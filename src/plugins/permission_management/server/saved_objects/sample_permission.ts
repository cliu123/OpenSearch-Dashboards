import { SavedObjectsType } from 'opensearch-dashboards/server';

export const samplePermission: SavedObjectsType = {
  name: 'sample-permission',
  namespaceType: 'agnostic',
  hidden: false,
  mappings: {
    properties: {
      name: {
        type: 'keyword',
      },
      count: {
        type: 'long',
      },
    },
  },
};
