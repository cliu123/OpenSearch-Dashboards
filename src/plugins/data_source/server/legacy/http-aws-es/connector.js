/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * A connection handler for Amazon ES.
 *
 * Uses the aws-sdk to make signed requests to an Amazon ES endpoint.
 *
 * @param client {Client} - The Client that this class belongs to
 * @param config {Object} - Configuration options
 * @param [config.protocol=http:] {String} - The HTTP protocol that this connection will use, can be set to https:
 * @class HttpConnector
 */
import HttpClient from './src/node';
import { Config, Credentials } from 'aws-sdk';
import {
  AOSD_HEADER_ACCESS_KEY,
  AOSD_HEADER_SECRET_KEY,
  AOSD_HEADER_SESSION_TOKEN,
  AOSD_HEADER_REGION,
  AOSD_HEADER_SERVICE,
} from '../../../common/data_sources';

const AWS = require('aws-sdk');
const HttpConnector = require('elasticsearch/src/lib/connectors/http');

// This is reimplementation of https://github.com/TheDeveloper/http-aws-es/blob/master/connector.js
class HttpAmazonESConnector extends HttpConnector {
  constructor(host, config) {
    super(host, config);

    const protocol = host.protocol;
    const port = host.port;
    const endpoint = new AWS.Endpoint(host.host);

    if (protocol) endpoint.protocol = protocol.replace(/:?$/, ':');
    if (port) endpoint.port = port;

    this.awsConfig = config.awsConfig || AWS.config;
    this.endpoint = endpoint;
    this.httpOptions = config.httpOptions || this.awsConfig.httpOptions;
    this.httpClient = new HttpClient();
  }

  request(params, cb) {
    const reqParams = this.makeReqParams(params);
    let req;
    let cancelled;

    const cancel = () => {
      cancelled = true;
      req && req.abort();
    };

    const done = (err, response, status, headers) => {
      this.log.trace(params.method, reqParams, params.body, response, status);
      cb(err, response, status, headers);
    };

    // load creds
    this.getAWSCredentials(reqParams)
      .catch((e) => {
        if (e && e.message) e.message = `AWS Credentials error: ${e.message}`;
        throw e;
      })
      .then((creds) => {
        if (cancelled) {
          return;
        }

        const service = reqParams.headers[AOSD_HEADER_SERVICE] || null;
        delete reqParams.headers[AOSD_HEADER_SERVICE];

        const request = this.createRequest(params, reqParams);
        // Sign the request (Sigv4)
        this.signRequest(request, creds, service);
        req = this.httpClient.handleRequest(request, this.httpOptions, done);
      })
      .catch(done);

    return cancel;
  }

  // Modified this function to get credentials from request header
  // and reassign `this.awsConfig` with new credentials.
  getAWSCredentials(reqParams) {
    const accessKeyId = reqParams.headers[AOSD_HEADER_ACCESS_KEY] || null;
    const secretAccessKey = reqParams.headers[AOSD_HEADER_SECRET_KEY] || null;
    const sessionToken = reqParams.headers[AOSD_HEADER_SESSION_TOKEN] || null;
    const region = reqParams.headers[AOSD_HEADER_REGION] || null;

    this.deleteHeaders(reqParams);

    this.awsConfig = new Config({
      region,
      credentials: sessionToken
        ? new Credentials({ accessKeyId, secretAccessKey, sessionToken })
        : new Credentials({ accessKeyId, secretAccessKey }),
    });

    return new Promise((resolve, reject) => {
      this.awsConfig.getCredentials((err, creds) => {
        if (err) return reject(err);
        return resolve(creds);
      });
    });
  }

  // Function to delete headers once read
  deleteHeaders(request = {}) {
    delete request.headers[AOSD_HEADER_ACCESS_KEY];
    delete request.headers[AOSD_HEADER_SECRET_KEY];
    delete request.headers[AOSD_HEADER_SESSION_TOKEN];
    delete request.headers[AOSD_HEADER_REGION];
  }

  createRequest(params, reqParams) {
    const request = new AWS.HttpRequest(this.endpoint);

    // copy across params
    Object.assign(request, reqParams);

    request.region = this.awsConfig.region;
    if (!request.headers) request.headers = {};
    let body = params.body;

    if (body) {
      let contentLength = Buffer.isBuffer(body) ? body.length : Buffer.byteLength(body);
      request.headers['Content-Length'] = contentLength;
      request.body = body;
    }
    request.headers['Host'] = this.endpoint.host;

    return request;
  }

  signRequest(request, creds, service) {
    const signer = new AWS.Signers.V4(request, service);
    signer.addAuthorization(creds, new Date());
  }
}

module.exports = HttpAmazonESConnector;
