/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */
import { DataSourcePluginConfigType } from '../../config';
import { parseClientOptions } from './client_config';

const TEST_DATA_SOURCE_ENDPOINT = 'http://test.com/';

const config = {
  enabled: true,
  clientPool: {
    size: 5,
  },
} as DataSourcePluginConfigType;

describe('parseClientOptions', () => {
  test('include the ssl client configs as defaults', () => {
    expect(parseClientOptions(config, TEST_DATA_SOURCE_ENDPOINT)).toEqual(
      expect.objectContaining({
        node: TEST_DATA_SOURCE_ENDPOINT,
        ssl: {
          requestCert: true,
          rejectUnauthorized: true,
        },
      })
    );
  });

  test('should replace http://vpc-xxx with http://search-xxx in endpoint', () => {
    const VPCEndpoint = 'http://vpc-xxxx.com';
    const NonVPCEndpoint = 'http://search-xxxx.com';
    expect(parseClientOptions(config, VPCEndpoint)).toEqual(
      expect.objectContaining({
        node: NonVPCEndpoint,
        ssl: {
          requestCert: true,
          rejectUnauthorized: true,
        },
      })
    );
  });

  test('should replace https://vpc-xxx with http://search-xxx in endpoint', () => {
    const VPCEndpoint = 'https://vpc-xxxx.com';
    const NonVPCEndpoint = 'https://search-xxxx.com';
    expect(parseClientOptions(config, VPCEndpoint)).toEqual(
      expect.objectContaining({
        node: NonVPCEndpoint,
        ssl: {
          requestCert: true,
          rejectUnauthorized: true,
        },
      })
    );
  });

  test('should only replace first occurrence of vpc in https://vpc-xxxx-vpc-test.com in endpoint', () => {
    const VPCEndpoint = 'https://vpc-xxxx-vpc-test.com';
    const NonVPCEndpoint = 'https://search-xxxx-vpc-test.com';
    expect(parseClientOptions(config, VPCEndpoint)).toEqual(
      expect.objectContaining({
        node: NonVPCEndpoint,
        ssl: {
          requestCert: true,
          rejectUnauthorized: true,
        },
      })
    );
  });
});
