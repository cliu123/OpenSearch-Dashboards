/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { OpenSearchClient, RequestHandlerContext } from 'src/core/server';
import { IOpenSearchSearchRequest } from '..';
// eslint-disable-next-line @osd/eslint/no-restricted-paths
import { DataSourceError } from '../../../../data_source/server/lib/error';
import { DataSourcePluginSetup } from '../../../../data_source/server';

export const decideClient = async (
  context: RequestHandlerContext,
  request: IOpenSearchSearchRequest,
  dataSource?: DataSourcePluginSetup
): Promise<OpenSearchClient> => {
  // if data source feature is disabled, return default opensearch client of current user
  if (request.dataSourceId && context.dataSource) {
    return await context.dataSource.opensearch.getClient(request.dataSourceId);
  }

  if (!dataSource || dataSource.defaultClusterEnabled()) {
    return context.core.opensearch.client.asCurrentUser;
  }
  throw new DataSourceError({ statusCode: 400 }, 'Data source id is required');
};
