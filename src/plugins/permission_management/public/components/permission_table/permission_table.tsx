/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 *
 * Any modifications Copyright OpenSearch Contributors. See
 * GitHub history for details.
 */

/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import {
  EuiBadge,
  EuiButtonEmpty,
  EuiFlexGroup,
  EuiFlexItem,
  EuiInMemoryTable,
  EuiSpacer,
  EuiText,
  EuiBadgeGroup,
  EuiPageContent,
  EuiTitle,
  EuiButton,
} from '@elastic/eui';
import { FormattedMessage } from '@osd/i18n/react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { i18n } from '@osd/i18n';
import {
  reactRouterNavigate,
  useOpenSearchDashboards,
} from '../../../../opensearch_dashboards_react/public';
// import { IndexPatternManagmentContext } from '../../types';
import { CreateButton } from '../create_button';
import { PermissionTableItem, PermissionCreationOption } from '../types';
// import { getIndexPatterns } from '../utils';
// import { getListBreadcrumbs } from '../breadcrumbs';
// import { EmptyState } from './empty_state';
// import { MatchedItem, ResolveIndexResponseItemAlias } from '../create_index_pattern_wizard/types';
// import { EmptyIndexPatternPrompt } from './empty_index_pattern_prompt';
// import { getIndices } from '../create_index_pattern_wizard/lib';

const pagination = {
  initialPageSize: 10,
  pageSizeOptions: [5, 10, 25, 50],
};

const sorting = {
  sort: {
    field: 'title',
    direction: 'asc' as const,
  },
};

const search = {
  box: {
    incremental: true,
    schema: {
      fields: { title: { type: 'string' } },
    },
  },
};

const ariaRegion = i18n.translate('PermissionManagement.editIndexPatternLiveRegionAriaLabel', {
  defaultMessage: 'Permissions',
});

const title = i18n.translate('permissionManagement.permissionTable.title', {
  defaultMessage: 'Permissions',
});

interface Props extends RouteComponentProps {
  canSave: boolean;
}

export const PermissionTable = ({ canSave, history }: Props) => {
  // const {
  //   setBreadcrumbs,
  //   savedObjects,
  //   uiSettings,
  //   permissionManagementStart,
  //   chrome,
  //   docLinks,
  //   application,
  //   http,
  //   getMlCardState,
  //   data,
  // } = useOpenSearchDashboards<IndexPatternManagmentContext>().services;
  const [permissions, setIndexPatterns] = useState<PermissionTableItem[]>([]);
  const [creationOptions, setCreationOptions] = useState<PermissionCreationOption[]>([]);
  // const [sources, setSources] = useState<MatchedItem[]>([]);
  // const [remoteClustersExist, setRemoteClustersExist] = useState<boolean>(false);
  // const [isLoadingSources, setIsLoadingSources] = useState<boolean>(true);
  // const [isLoadingIndexPatterns, setIsLoadingIndexPatterns] = useState<boolean>(true);

  // setBreadcrumbs(getListBreadcrumbs());
  // useEffect(() => {
  //   (async function () {
  //     const options = await permissionManagementStart.creation.getIndexPatternCreationOptions(
  //       history.push
  //     );
  //     const gettedIndexPatterns: IndexPatternTableItem[] = await getIndexPatterns(
  //       savedObjects.client,
  //       uiSettings.get('defaultIndex'),
  //       permissionManagementStart
  //     );
  //     setIsLoadingIndexPatterns(false);
  //     setCreationOptions(options);
  //     setIndexPatterns(gettedIndexPatterns);
  //   })();
  // }, [
  //   history.push,
  //   permissions.length,
  //   permissionManagementStart,
  //   uiSettings,
  //   savedObjects.client,
  // ]);

  // const removeAliases = (item: MatchedItem) =>
  //   !((item as unknown) as ResolveIndexResponseItemAlias).indices;

  // const searchClient = data.search.search;

  // const loadSources = () => {
  //   getIndices({ http, pattern: '*', searchClient }).then((permissions) =>
  //     setSources(permissions.filter(removeAliases))
  //   );
  //   getIndices({ http, pattern: '*:*', searchClient }).then((permissions) =>
  //     setRemoteClustersExist(!!permissions.filter(removeAliases).length)
  //   );
  // };

  // useEffect(() => {
  //   getIndices({ http, pattern: '*', searchClient }).then((permissions) => {
  //     setSources(permissions.filter(removeAliases));
  //     setIsLoadingSources(false);
  //   });
  //   getIndices({ http, pattern: '*:*', searchClient }).then((permissions) =>
  //     setRemoteClustersExist(!!permissions.filter(removeAliases).length)
  //   );
  // }, [http, creationOptions, searchClient]);

  // chrome.docTitle.change(title);

  const columns = [
    {
      field: 'title',
      name: 'permission',
      render: (
        name: string,
        index: {
          id: string;
          tags?: Array<{
            key: string;
            name: string;
          }>;
        }
      ) => (
        <>
          <EuiButtonEmpty size="xs" {...reactRouterNavigate(history, `permissions/${index.id}`)}>
            {name}
          </EuiButtonEmpty>
          &emsp;
          <EuiBadgeGroup gutterSize="s">
            {index.tags &&
              index.tags.map(({ key: tagKey, name: tagName }) => (
                <EuiBadge key={tagKey}>{tagName}</EuiBadge>
              ))}
          </EuiBadgeGroup>
        </>
      ),
      dataType: 'string' as const,
      sortable: ({ sort }: { sort: string }) => sort,
    },
  ];
  creationOptions.push({
    text: 'Create',
    onClick(): void {
      throw new Error('Function not implemented.');
    },
  });

  const createButton = canSave ? (
    <CreateButton options={creationOptions}>
      <FormattedMessage
        id="permissionManagement.permissionTable.createBtn"
        defaultMessage="Create permission"
      />
    </CreateButton>
  ) : (
    <></>
  );

  // const myButton = <EuiButton>test</EuiButton>;
  // if (isLoadingSources || isLoadingIndexPatterns) {
  //   return <></>;
  // }

  // const hasDataIndices = sources.some(({ name }: MatchedItem) => !name.startsWith('.'));

  // if (!permissions.length) {
  //   if (!hasDataIndices && !remoteClustersExist) {
  //     return (
  //       <EmptyState
  //         onRefresh={loadSources}
  //         docLinks={docLinks}
  //         navigateToApp={application.navigateToApp}
  //         getMlCardState={getMlCardState}
  //         canSave={canSave}
  //       />
  //     );
  //   } else {
  //     return (
  //       <EmptyIndexPatternPrompt
  //         canSave={canSave}
  //         creationOptions={creationOptions}
  //         docLinksIndexPatternIntro={docLinks.links.noDocumentation.permissions.introduction}
  //         setBreadcrumbs={setBreadcrumbs}
  //       />
  //     );
  //   }
  // }

  return (
    <EuiPageContent data-test-subj="permissionTable" role="region" aria-label={ariaRegion}>
      <EuiFlexGroup justifyContent="spaceBetween">
        <EuiFlexItem grow={false}>
          <EuiTitle>
            <h2>{title}</h2>
          </EuiTitle>
          <EuiSpacer size="s" />
          <EuiText>
            <p>
              <FormattedMessage
                id="permissionManagement.permissionTable.permissionExplanation"
                defaultMessage="Create and manage the permissions that help you retrieve your data from OpenSearch."
              />
            </p>
          </EuiText>
        </EuiFlexItem>
        <EuiFlexItem grow={false}>{createButton}</EuiFlexItem>
      </EuiFlexGroup>
      <EuiSpacer />
      <EuiInMemoryTable
        allowNeutralSort={false}
        itemId="id"
        isSelectable={false}
        items={permissions}
        columns={columns}
        pagination={pagination}
        sorting={sorting}
        search={search}
      />
    </EuiPageContent>
  );
};

export const PermissionTableWithRouter = withRouter(PermissionTable);
