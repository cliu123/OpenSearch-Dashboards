/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import {
  ChromeStart,
  ApplicationStart,
  IUiSettingsClient,
  OverlayStart,
  SavedObjectsStart,
  NotificationsStart,
  DocLinksStart,
  HttpSetup,
} from 'src/core/public';
import { ManagementAppMountParams } from 'src/plugins/management/public';
import { SavedObjectAttributes } from 'src/core/types';
import { i18n } from '@osd/i18n';
import { EuiSelectOption } from '@elastic/eui';
import { SigV4ServiceName } from '../../data_source/common/data_sources';
import { OpenSearchDashboardsReactContextValue } from '../../opensearch_dashboards_react/public';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface DataSourceManagementPluginStart {}

export interface DataSourceManagementContext {
  chrome: ChromeStart;
  application: ApplicationStart;
  savedObjects: SavedObjectsStart;
  uiSettings: IUiSettingsClient;
  notifications: NotificationsStart;
  overlays: OverlayStart;
  http: HttpSetup;
  docLinks: DocLinksStart;
  setBreadcrumbs: ManagementAppMountParams['setBreadcrumbs'];
}

export interface DataSourceTableItem {
  id: string;
  title: string;
  description: string;
  sort: string;
}

export interface ToastMessageItem {
  id: string;
  defaultMessage: string;
  success?: boolean;
}

export type DataSourceManagementContextValue = OpenSearchDashboardsReactContextValue<
  DataSourceManagementContext
>;

/* Datasource types */
export enum AuthType {
  NoAuth = 'no_auth',
  UsernamePasswordType = 'username_password',
  SigV4 = 'sigv4',
  TokenExchange = 'token_exchange',
}

export const credentialSourceOptions = (allowedAuthTypes: Record<string, boolean>) => {
  const authenticationMethods = [
    allowedAuthTypes.showNoAuth
      ? {
          value: AuthType.NoAuth,
          text: i18n.translate('dataSourceManagement.credentialSourceOptions.NoAuthentication', {
            defaultMessage: 'No authentication',
          }),
        }
      : '',
    allowedAuthTypes.showUsernamePasswordAuth
      ? {
          value: AuthType.UsernamePasswordType,
          text: i18n.translate('dataSourceManagement.credentialSourceOptions.UsernamePassword', {
            defaultMessage: 'Username & Password',
          }),
        }
      : '',
    allowedAuthTypes.showAWSSigv4
      ? {
          value: AuthType.SigV4,
          text: i18n.translate('dataSourceManagement.credentialSourceOptions.AwsSigV4', {
            defaultMessage: 'AWS SigV4',
          }),
        }
      : '',
    allowedAuthTypes.showTokenExchange
      ? {
          value: AuthType.TokenExchange,
          text: i18n.translate('dataSourceManagement.credentialSourceOptions.TokenExchange', {
            defaultMessage: 'AWS Trust Identity Propagation',
          }),
        }
      : '',
  ];
  return authenticationMethods.filter((item) => item !== '') as EuiSelectOption[];
};

export const sigV4ServiceOptions = [
  {
    value: SigV4ServiceName.OpenSearch,
    text: i18n.translate('dataSourceManagement.SigV4ServiceOptions.OpenSearch', {
      defaultMessage: 'Amazon OpenSearch Service',
    }),
  },
  {
    value: SigV4ServiceName.OpenSearchServerless,
    text: i18n.translate('dataSourceManagement.SigV4ServiceOptions.OpenSearchServerless', {
      defaultMessage: 'Amazon OpenSearch Serverless',
    }),
  },
];

export interface DataSourceAttributes extends SavedObjectAttributes {
  title: string;
  description?: string;
  endpoint?: string;
  auth: {
    type: AuthType;
    credentials: UsernamePasswordTypedContent | SigV4Content | TokenExchangeContent | undefined;
  };
}

export interface UsernamePasswordTypedContent extends SavedObjectAttributes {
  username: string;
  password?: string;
}

export interface SigV4Content extends SavedObjectAttributes {
  accessKey: string;
  secretKey: string;
  region: string;
  service?: SigV4ServiceName;
}

export interface TokenExchangeContent extends SavedObjectAttributes {
  region: string;
  roleARN: string;
}
