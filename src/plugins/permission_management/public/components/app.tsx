import React, { useState } from 'react';
import { FormattedMessage, I18nProvider } from '@osd/i18n/react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import {
  EuiButton,
  EuiHorizontalRule,
  EuiPage,
  EuiPageBody,
  EuiPageContent,
  EuiPageContentBody,
  EuiPageContentHeader,
  EuiPageHeader,
  EuiTitle,
  EuiText,
} from '@elastic/eui';

import { CoreStart } from '../../../../core/public';

import { PLUGIN_ID, PLUGIN_NAME } from '../../common';
import { PermissionManagmentContext } from '../types';
import { PermissionTableWithRouter } from './permission_table';

// interface PermissionManagementAppDeps {
//   http: CoreStart['http'];
// }

export const PermissionManagementApp = ({ services }: PermissionManagmentContext) => {
  // Use React hooks to manage state.
  const [timestamp, setTimestamp] = useState<string | undefined>();

  const onClickHandler = () => {
    // Use the core http service to make a response to the server API.
    services.http.get('/api/permission_management/example').then((res) => {
      setTimestamp(res.time);
      // eslint-disable-next-line no-console
      console.log('data updated');
    });

    services.savedObjects.client
      .create('sample-permission', { name: "i'm permission", count: 1 })
      .then((res: any) => {
        // eslint-disable-next-line no-console
        console.log(res);
      });
  };

  // Render the application DOM.
  // Note that `navigation.ui.TopNavMenu` is a stateful component exported on the `navigation` plugin's start contract.
  return (
    <Router>
      <I18nProvider>
        <Router>
          <Switch>
            <Route path={['/']}>
              <PermissionTableWithRouter canSave={true} />
              {/* <>
                <EuiPage restrictWidth="1000px">
                  <EuiPageBody component="main">
                    <EuiPageHeader>
                      <EuiTitle size="l">
                        <h1>
                          <FormattedMessage
                            id="permissionManagement.helloWorldText"
                            defaultMessage="{name}"
                            values={{ name: PLUGIN_NAME }}
                          />
                        </h1>
                      </EuiTitle>
                    </EuiPageHeader>
                    <EuiPageContent>
                      <EuiPageContentHeader>
                        <EuiTitle>
                          <h2>
                            <FormattedMessage
                              id="permissionManagement.congratulationsTitle"
                              defaultMessage="Congratulations, you have successfully created a new OpenSearch Dashboards Plugin!"
                            />
                          </h2>
                        </EuiTitle>
                      </EuiPageContentHeader>
                      <EuiPageContentBody>
                        <EuiText>
                          <p>
                            <FormattedMessage
                              id="permissionManagement.content"
                              defaultMessage="Look through the generated code and check out the plugin development documentation."
                            />
                          </p>
                          <EuiHorizontalRule />
                          <p>
                            <FormattedMessage
                              id="permissionManagement.timestampText"
                              defaultMessage="Last timestamp: {time}"
                              values={{ time: timestamp ? timestamp : 'Unknown' }}
                            />
                          </p>
                          <EuiButton type="primary" size="s" onClick={onClickHandler}>
                            <FormattedMessage
                              id="permissionManagement.buttonText"
                              defaultMessage="Get data"
                            />
                          </EuiButton>
                        </EuiText>
                      </EuiPageContentBody>
                    </EuiPageContent>
                  </EuiPageBody>
                </EuiPage>
              </> */}
            </Route>
          </Switch>
        </Router>
      </I18nProvider>
    </Router>
  );
};
