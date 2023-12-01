/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Connection } from '@opensearch-project/opensearch-next';
import {
  AOSD_HEADER_ACCESS_KEY,
  AOSD_HEADER_SECRET_KEY,
  AOSD_HEADER_SESSION_TOKEN,
  AOSD_HEADER_REGION,
  AOSD_HEADER_SERVICE,
} from '../../common/data_sources';
const aws4 = require('aws4');
const crypto = require('crypto');

function buildSignedRequestObject(request = {}) {
  request.service = request.headers[AOSD_HEADER_SERVICE] || null;
  request.region = request.headers[AOSD_HEADER_REGION] || null;

  const accessKeyId = request.headers[AOSD_HEADER_ACCESS_KEY] || null;
  const secretAccessKey = request.headers[AOSD_HEADER_SECRET_KEY] || null;
  const sessionToken = request.headers[AOSD_HEADER_SESSION_TOKEN] || null;
  const sigv4Credentials = {
    accessKeyId,
    secretAccessKey,
    sessionToken,
  };

  deleteHeaders(request);

  request.headers = request.headers || {};
  request.headers['host'] = request.hostname;
  const signed = aws4.sign(request, sigv4Credentials);
  signed.headers['x-amz-content-sha256'] = crypto
    .createHash('sha256')
    .update(request.body || '', 'utf8')
    .digest('hex');
  return signed;
}

function deleteHeaders(request = {}) {
  delete request.headers[AOSD_HEADER_ACCESS_KEY];
  delete request.headers[AOSD_HEADER_SECRET_KEY];
  delete request.headers[AOSD_HEADER_SESSION_TOKEN];
  delete request.headers[AOSD_HEADER_SERVICE];
  delete request.headers[AOSD_HEADER_REGION];
}

export class AwsSigv4SignerConnection extends Connection {
  buildRequestObject(params) {
    const request = super.buildRequestObject(params);
    return buildSignedRequestObject(request);
  }
}
