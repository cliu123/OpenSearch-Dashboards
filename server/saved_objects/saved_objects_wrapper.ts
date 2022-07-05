import _ from "lodash";
import { HttpServiceStart, SavedObject, SavedObjectsBaseOptions, SavedObjectsBulkCreateObject, SavedObjectsBulkGetObject, SavedObjectsBulkResponse, SavedObjectsBulkUpdateObject, SavedObjectsBulkUpdateOptions, SavedObjectsBulkUpdateResponse, SavedObjectsCheckConflictsObject, SavedObjectsCheckConflictsResponse, SavedObjectsClientWrapperFactory, SavedObjectsCreateOptions, SavedObjectsDeleteOptions, SavedObjectsFindOptions, SavedObjectsFindResponse, SavedObjectsUpdateOptions, SavedObjectsUpdateResponse } from "opensearch-dashboards/server";
import { OpenSearchDashboardsAuthState } from "../auth/types/authentication_type";

export class SecuritySavedObjectsClientWrapper {
  public httpStart?: HttpServiceStart;

  constructor() {
  }

  public wrapperFactory: SavedObjectsClientWrapperFactory = (wrapperOptions) => {
    const state: OpenSearchDashboardsAuthState = this.httpStart!.auth.get(wrapperOptions.request).state as OpenSearchDashboardsAuthState || {};
    // console.log(`State: ${JSON.stringify(state)}`);

    const createWithNamespace = async <T = unknown>(type: string, attributes: T, options?: SavedObjectsCreateOptions) => {
      _.assign(options, { namespace: [state.selectedTenant]});
      return await wrapperOptions.client.create(type, attributes, options);
    }

    const bulkGetWithNamespace = async <T = unknown>(
      objects: SavedObjectsBulkGetObject[] = [],
      options: SavedObjectsBaseOptions = {}
    ): Promise<SavedObjectsBulkResponse<T>> => {
      _.assign(options, { namespace: [state.selectedTenant]});
      return await wrapperOptions.client.bulkGet(objects, options);
      // return await this._repository.bulkGet(objects, options);
    }

    const findWithNamespace = async <T = unknown>(options: SavedObjectsFindOptions): Promise<SavedObjectsFindResponse<T>> => {
      const tenants = state.authInfo?.tenants;
      const availableTenantNames = Object.keys(tenants!);
      availableTenantNames.push('default');
      _.assign(options, { namespaces: availableTenantNames});
      // _.assign(options, { namespaces: [state.selectedTenant]});
      return await wrapperOptions.client.find(options);
      // return await this._repository.find(options);
    }

    const getWithNamespace = async <T = unknown>(
      type: string,
      id: string,
      options: SavedObjectsBaseOptions = {}
    ): Promise<SavedObject<T>> => {
      _.assign(options, { namespace: [state.selectedTenant]});
      return await wrapperOptions.client.get(type, id, options);
      // return await this._repository.get(type, id, options);
    }

    const updateWithNamespace = async <T = unknown>(
      type: string,
      id: string,
      attributes: Partial<T>,
      options: SavedObjectsUpdateOptions = {}
    ): Promise<SavedObjectsUpdateResponse<T>> => {
      _.assign(options, { namespace: [state.selectedTenant]});
      return await wrapperOptions.client.update(type, id, attributes, options);
      // return await this._repository.update(type, id, attributes, options);
    }

    const bulkCreateWithNamespace = async <T = unknown>(
      objects: Array<SavedObjectsBulkCreateObject<T>>,
      options?: SavedObjectsCreateOptions
    ): Promise<SavedObjectsBulkResponse<T>> => {
      _.assign(options, { namespace: [state.selectedTenant]});
      return await wrapperOptions.client.bulkCreate(objects, options);
      // return await this._repository.bulkCreate(objects, options);
    }

    const bulkUpdateWithNamespace = async <T = unknown>(
      objects: Array<SavedObjectsBulkUpdateObject<T>>,
      options?: SavedObjectsBulkUpdateOptions
    ): Promise<SavedObjectsBulkUpdateResponse<T>> => {
      _.assign(options, { namespace: [state.selectedTenant]});
      return await wrapperOptions.client.bulkUpdate(objects, options);
      // return await this._repository.bulkUpdate(objects, options);
    }

    const deleteWithNamespace = async (type: string, id: string, options: SavedObjectsDeleteOptions = {}) => {
      _.assign(options, { namespace: [state.selectedTenant]});
      return await wrapperOptions.client.delete(type, id, options);
      // return await this._repository.delete(type, id, options);
    }

    const checkConflictsWithNamespace = async (
      objects: SavedObjectsCheckConflictsObject[] = [],
      options: SavedObjectsBaseOptions = {}
    ): Promise<SavedObjectsCheckConflictsResponse> => {
      _.assign(options, { namespace: [state.selectedTenant]});
      return await wrapperOptions.client.checkConflicts(objects, options);
      // return await this._repository.checkConflicts(objects, options);
    }
    
    // const addToNamespaces = async (
    //   type: string,
    //   id: string,
    //   namespaces: string[],
    //   options: SavedObjectsAddToNamespacesOptions = {}
    // ): Promise<SavedObjectsAddToNamespacesResponse> => {
    //   // return await this._repository.addToNamespaces(type, id, namespaces, options);
    // }

    // console.log(wrapperOptions);
    return {
      ...(wrapperOptions.client),
      // get: (type, id, options) => wrapperOptions.client.get(type, id, options),
      get: getWithNamespace,
      update: updateWithNamespace,
      bulkCreate: bulkCreateWithNamespace,
      bulkGet: bulkGetWithNamespace,
      bulkUpdate: bulkUpdateWithNamespace,
      create: createWithNamespace,
      delete: deleteWithNamespace,
      errors: wrapperOptions.client.errors,
      checkConflicts: checkConflictsWithNamespace,
      addToNamespaces: wrapperOptions.client.addToNamespaces,
      find: findWithNamespace,
      deleteFromNamespaces: wrapperOptions.client.deleteFromNamespaces,
    }
  }
}
