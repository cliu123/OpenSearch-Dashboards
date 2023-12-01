/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

// This is copy of https://github.com/TheDeveloper/http-aws-es/blob/master/src/node.js
const AWS = require('aws-sdk');
const zlib = require('zlib');

class NodeHttpClient {
  constructor() {
    this.client = new AWS.NodeHttpClient();
  }

  handleRequest(request, httpOptions, cb) {
    let req;
    let response;
    let body;
    let status;
    let headers;

    // general clean-up procedure to run after the request
    // completes, has an error, or is aborted.
    const cleanUp = (err) => {
      req && req.removeAllListeners();
      response && response.removeAllListeners();

      if (err instanceof Error) return cb(err);

      cb(null, body, status, headers);
    };

    req = this.client.handleRequest(
      request,
      httpOptions,
      (res) => {
        response = res;

        status = response.statusCode;
        headers = response.headers;
        body = '';

        const encoding = (headers['content-encoding'] || '').toLowerCase();
        if (encoding === 'gzip' || encoding === 'deflate') {
          response = response.pipe(zlib.createUnzip());
        }

        response.setEncoding('utf8');
        response.on('data', function (d) {
          body += d;
        });

        response.on('error', cleanUp);
        response.on('end', cleanUp);
      },
      cleanUp
    );

    req.setNoDelay(true);
    req.setSocketKeepAlive(true);

    return req;
  }
}

module.exports = NodeHttpClient;
