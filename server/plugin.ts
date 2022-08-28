/*
 *   Copyright OpenSearch Contributors
 *
 *   Licensed under the Apache License, Version 2.0 (the "License").
 *   You may not use this file except in compliance with the License.
 *   A copy of the License is located at
 *
 *       http://www.apache.org/licenses/LICENSE-2.0
 *
 *   or in the "license" file accompanying this file. This file is distributed
 *   on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
 *   express or implied. See the License for the specific language governing
 *   permissions and limitations under the License.
 */

import { first } from 'rxjs/operators';
import { Observable } from 'rxjs';
import {
  PluginInitializerContext,
  CoreSetup,
  CoreStart,
  Plugin,
  Logger,
  ILegacyClusterClient,
  SessionStorageFactory,
  SharedGlobalConfig,
} from '../../../src/core/server';

import { SecurityPluginSetup, SecurityPluginStart } from './types';
import { defineRoutes } from './routes';
import { SecurityPluginConfigType } from '.';
import opensearchSecurityConfiguratoinPlugin from './backend/opensearch_security_configuration_plugin';
import opensearchSecurityPlugin from './backend/opensearch_security_plugin';
import { SecuritySessionCookie, getSecurityCookieOptions } from './session/security_cookie';
import { SecurityClient } from './backend/opensearch_security_client';
import {
  SavedObjectsSerializer,
  ISavedObjectTypeRegistry,
} from '../../../src/core/server/saved_objects';
import { setupIndexTemplate, migrateTenantIndices } from './multitenancy/tenant_index';
import { IAuthenticationType, OpenSearchDashboardsAuthState } from './auth/types/authentication_type';
import { getAuthenticationHandler } from './auth/auth_handler_factory';
import { setupMultitenantRoutes } from './multitenancy/routes';
import { defineAuthTypeRoutes } from './routes/auth_type_routes';
import { createMigrationOpenSearchClient } from '../../../src/core/server/saved_objects/migrations/core';
import _ from 'lodash';
import { SecuritySavedObjectsClientWrapper } from './saved_objects/saved_objects_wrapper';

export interface SecurityPluginRequestContext {
  logger: Logger;
  esClient: ILegacyClusterClient;
}

declare module 'opensearch-dashboards/server' {
  interface RequestHandlerContext {
    security_plugin: SecurityPluginRequestContext;
  }
}

export interface SecurityPluginRequestContext {
  logger: Logger;
}

declare module 'opensearch-dashboards/server' {
  interface RequestHandlerContext {
    security_plugin: SecurityPluginRequestContext;
  }
}

export class SecurityPlugin implements Plugin<SecurityPluginSetup, SecurityPluginStart> {
  private readonly logger: Logger;
  // FIXME: keep an reference of admin client so that it can be used in start(), better to figureout a
  //        decent way to get adminClient in start. (maybe using getStartServices() from setup?)

  // @ts-ignore: property not initialzied in constructor
  private securityClient: SecurityClient;

  private savedObjectClientWrapper: SecuritySavedObjectsClientWrapper;

  constructor(private readonly initializerContext: PluginInitializerContext) {
    this.logger = initializerContext.logger.get();
    this.savedObjectClientWrapper = new SecuritySavedObjectsClientWrapper();
  }

  public async setup(core: CoreSetup) {
    this.logger.debug('opendistro_security: Setup');

    const config$ = this.initializerContext.config.create<SecurityPluginConfigType>();
    const config: SecurityPluginConfigType = await config$.pipe(first()).toPromise();

    const router = core.http.createRouter();

    const esClient: ILegacyClusterClient = core.opensearch.legacy.createClient(
      'opendistro_security',
      {
        plugins: [opensearchSecurityConfiguratoinPlugin, opensearchSecurityPlugin],
      }
    );

    this.securityClient = new SecurityClient(esClient);

    const securitySessionStorageFactory: SessionStorageFactory<SecuritySessionCookie> = await core.http.createCookieSessionStorageFactory<
      SecuritySessionCookie
    >(getSecurityCookieOptions(config));

    // put logger into route handler context, so that we don't need to pass througth parameters
    core.http.registerRouteHandlerContext('security_plugin', (context, request) => {
      return {
        logger: this.logger,
        esClient,
      };
    });

    // setup auth
    const auth: IAuthenticationType = getAuthenticationHandler(
      config.auth.type,
      router,
      config,
      core,
      esClient,
      securitySessionStorageFactory,
      this.logger
    );
    core.http.registerAuth(auth.authHandler);

    // Register server side APIs
    defineRoutes(router);
    defineAuthTypeRoutes(router, config);
    // set up multi-tenent routes
    if (config.multitenancy?.enabled) {
      setupMultitenantRoutes(router, securitySessionStorageFactory, this.securityClient);
    }

    core.savedObjects.addClientWrapper(1, 'zengyan-test-wrapper', this.savedObjectClientWrapper.wrapperFactory);

    // const { http } = (await core.getStartServices()).at(0);
    // const startServices = await core.getStartServices();
    // const httpStart = startServices[0].http;
    // core.getStartServices().then((startServices) => {
    //   const coreStart = startServices[0];
    //   const httpStart = coreStart.http;
    //   core.savedObjects.addClientWrapper(1, 'zengyan-test-wrapper', (wrapperOptions) => {

    //     // console.log(Object.getPrototypeOf(wrapperOptions.client));
    //     // httpStart.auth.get(wrapperOptions.request).state;
    //     const state = httpStart.auth.get(wrapperOptions.request).state;
    //     console.log(`state: ${JSON.stringify(state)}`);
    //     return {
    //       // ...(wrapperOptions.client),
    //       // get: (type, id, options) => wrapperOptions.client.get(type, id, options),
    //       get: wrapperOptions.client.get,
    //       update: wrapperOptions.client.update,
    //       bulkCreate: wrapperOptions.client.bulkCreate,
    //       bulkGet: wrapperOptions.client.bulkGet,
    //       bulkUpdate: wrapperOptions.client.bulkUpdate,
    //       create: wrapperOptions.client.create,
    //       delete: wrapperOptions.client.delete,
    //       errors: wrapperOptions.client.errors,
    //       checkConflicts: wrapperOptions.client.checkConflicts,
    //       addToNamespaces: wrapperOptions.client.addToNamespaces,
    //       find: wrapperOptions.client.find,
    //       deleteFromNamespaces: wrapperOptions.client.deleteFromNamespaces,
    //     }
    //   });
    // }).catch(error => {
    //   this.logger.error(error.message);
    //   process.exit(1);
    // });



    return {
      config$,
      securityConfigClient: esClient,
    };
  }

  // TODO: add more logs
  public async start(core: CoreStart) {
    this.logger.debug('opendistro_security: Started');

    this.savedObjectClientWrapper.httpStart = core.http;

    const config$ = this.initializerContext.config.create<SecurityPluginConfigType>();
    const config = await config$.pipe(first()).toPromise();
    if (config.multitenancy?.enabled) {
      const globalConfig$: Observable<SharedGlobalConfig> = this.initializerContext.config.legacy
        .globalConfig$;
      const globalConfig: SharedGlobalConfig = await globalConfig$.pipe(first()).toPromise();
      const opensearchDashboardsIndex = globalConfig.opensearchDashboards.index;
      const typeRegistry: ISavedObjectTypeRegistry = core.savedObjects.getTypeRegistry();
      const esClient = core.opensearch.client.asInternalUser;
      const migrationClient = createMigrationOpenSearchClient(esClient, this.logger);

      setupIndexTemplate(esClient, opensearchDashboardsIndex, typeRegistry, this.logger);

      const serializer: SavedObjectsSerializer = core.savedObjects.createSerializer();
      const opensearchDashboardsVersion = this.initializerContext.env.packageInfo.version;
      migrateTenantIndices(
        opensearchDashboardsVersion,
        migrationClient,
        this.securityClient,
        typeRegistry,
        serializer,
        this.logger
      );
    }

    return {
      http: core.http,
      es: core.opensearch.legacy,
    };
  }

  public stop() {}
}
