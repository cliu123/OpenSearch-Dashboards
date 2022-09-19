import {
  PluginInitializerContext,
  CoreSetup,
  CoreStart,
  Plugin,
  Logger,
} from '../../../core/server';

import { PermissionManagementPluginSetup, PermissionManagementPluginStart } from './types';
import { defineRoutes } from './routes';
import { samplePermission } from './saved_objects';
import { evaluatePermissionRoute } from './routes/permission_evaluation';

export class PermissionManagementPlugin
  implements Plugin<PermissionManagementPluginSetup, PermissionManagementPluginStart> {
  private readonly logger: Logger;

  constructor(initializerContext: PluginInitializerContext) {
    this.logger = initializerContext.logger.get();
  }

  public setup(core: CoreSetup) {
    core.savedObjects.registerType(samplePermission);

    this.logger.debug('permissionManagement: Setup');
    const router = core.http.createRouter();

    // Register server side APIs
    defineRoutes(router);
    evaluatePermissionRoute(router);

    return {};
  }

  public start(core: CoreStart) {
    this.logger.debug('permissionManagement: Started');
    return {};
  }

  public stop() {}
}
