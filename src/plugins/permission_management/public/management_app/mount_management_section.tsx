import { StartServicesAccessor } from 'src/core/public';
import { DataPublicPluginStart } from 'src/plugins/data/public';

import React from 'react';
import ReactDOM from 'react-dom';
import { PermissionManagementApp } from '../components/app';
import { ManagementAppMountParams } from '../../../management/public';

import { PermissionManagmentContext } from '../types';

export interface PermissionManagementStartDependencies {
  data: DataPublicPluginStart;
}

export async function mountManagementSection(
  getStartServices: StartServicesAccessor<PermissionManagementStartDependencies>,
  params: ManagementAppMountParams
) {
  const [
    { chrome, application, savedObjects, uiSettings, notifications, overlays, http, docLinks },
    { data },
  ] = await getStartServices();

  const deps: PermissionManagmentContext = {
    chrome,
    application,
    savedObjects,
    uiSettings,
    notifications,
    overlays,
    http,
    docLinks,
    data,
  };

  // @ts-ignore
  ReactDOM.render(<PermissionManagementApp services={deps} />, params.element);

  return () => {
    chrome.docTitle.reset();
    ReactDOM.unmountComponentAtNode(params.element);
  };
}
