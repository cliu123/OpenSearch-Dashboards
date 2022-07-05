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
