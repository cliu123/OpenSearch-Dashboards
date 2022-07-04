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

import { IRouter } from 'src/core/server';
import axios, { AxiosResponse } from 'axios';

export function evaluatePermissionRoute(router: IRouter): void {
  router.get(
    {
      path: '/api/permission_management/hasPermission/{permission}',
      validate: false,
    },
    async (context, request, response) => {
      // TODO: Use parameter to get permissionRequired.
      const pathSegments = request.route.path.split('/');
      const permissionRequired = pathSegments[pathSegments.length - 1];
      const axiosResponse: AxiosResponse = await axios.get(
        `http://localhost:5601/api/saved_objects/_find?type=sample-permission`
      );
      const savedObjects = axiosResponse.data.saved_objects
      let attributes = savedObjects.map(({ attributes }) => attributes);
      let permissions = attributes.map(({ name }) => name);
      const result = permissions.includes(permissionRequired);
      return response.ok({
        body: {
          authorized: result.toString(),
        },
      });
    }
  );
}
