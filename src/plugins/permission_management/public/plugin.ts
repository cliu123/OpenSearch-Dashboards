import { i18n } from '@osd/i18n';
import { AppMountParameters, CoreSetup, CoreStart, Plugin } from '../../../core/public';
import {
  PermissionManagementPluginSetup,
  PermissionManagementPluginStart,
  AppPluginStartDependencies,
} from './types';
import { PLUGIN_NAME } from '../common';

import { ManagementSetup } from '../../management/public';
import { UrlForwardingSetup } from '../../url_forwarding/public';

import { PermissionManagementService } from './service';

export interface PermissionManagementSetupDependencies {
  management: ManagementSetup;
  urlForwarding: UrlForwardingSetup;
}

export class PermissionManagementPlugin
  implements Plugin<PermissionManagementPluginSetup, PermissionManagementPluginStart> {
  private readonly permissionManagementService = new PermissionManagementService();

  public setup(
    core: CoreSetup,
    { management, urlForwarding }: PermissionManagementSetupDependencies
  ): PermissionManagementPluginSetup {
    const opensearchDashboardsSection = management.sections.section.opensearchDashboards;

    if (!opensearchDashboardsSection) {
      throw new Error('`opensearchDashboards` management section not found.');
    }

    opensearchDashboardsSection.registerApp({
      id: 'permissionManagement',
      title: PLUGIN_NAME,
      order: 0,
      mount: async (params) => {
        const { mountManagementSection } = await import('./management_app');

        return mountManagementSection(core.getStartServices, params);
      },
    });

    return this.permissionManagementService.setup({ httpClient: core.http });
  }

  public start(core: CoreStart): PermissionManagementPluginStart {
    return {};
  }

  public stop() {}
}
