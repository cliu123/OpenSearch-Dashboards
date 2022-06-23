import { PluginInitializerContext } from '../../../core/server';
import { PermissionManagementPlugin } from './plugin';

// This exports static code and TypeScript types,
// as well as, OpenSearch Dashboards Platform `plugin()` initializer.

export function plugin(initializerContext: PluginInitializerContext) {
  console.log('~~~~permissionManagement: Started');
  return new PermissionManagementPlugin(initializerContext);
}

export { PermissionManagementPluginSetup, PermissionManagementPluginStart } from './types';
