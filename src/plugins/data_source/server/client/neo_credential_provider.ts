/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { STSClient, AssumeRoleCommand, AssumeRoleCommandInput } from '@aws-sdk/client-sts';
import * as jose from 'jose';
import { OpenSearchDashboardsRequest } from 'src/core/server';
import {
  AOSD_HEADER_APP_ID,
  AOSD_HEADER_ID_TOKEN,
  AOSD_HEADER_USER_NAME,
  SigV4Content,
} from '../../common/data_sources';

const STS_ROLE_SESSION_DURATION = 900; // In Seconds
const STS_PROVIDER_ARN = 'arn:aws:iam::aws:contextProvider/IdentityCenter';

export interface NeoUserInfo {
  applicationId: string;
  identityToken: string;
  userName: string;
}

export function buildNeoUserInfo(request: OpenSearchDashboardsRequest): NeoUserInfo {
  return {
    applicationId: request.headers[AOSD_HEADER_APP_ID] as string,
    identityToken: request.headers[AOSD_HEADER_ID_TOKEN] as string,
    userName: request.headers[AOSD_HEADER_USER_NAME] as string,
  };
}

export async function getCredentials(
  userInfo: NeoUserInfo,
  roleARN: string,
  region: string
): Promise<SigV4Content> {
  const { identityToken, userName } = userInfo;
  try {
    const contextAssertion = await getStsClaim(identityToken);
    return await assumeRole(contextAssertion, roleARN, userName, region);
  } catch (error: any) {
    throw Error(`Error while fetching credentials ${error.message}`);
  }
}

const getSTSClient = (): STSClient => {
  const applicationRegion = process.env.REGION;
  return new STSClient({ region: applicationRegion });
};

const getStsClaim = async (identityToken: string): Promise<string> => {
  try {
    const decodedJwt = jose.decodeJwt(identityToken);
    /**
     * PEZ team has deployed IdC changes for PEZ guardrail policy to Prod. Because of this change, we need to onboard
     * to API allow listing. More details can be found in https://quip-amazon.com/j6LHAKPbuNt7/Guardrails-for-PEZNon-PEZ-sessions-API-Allow-listing
     * We have decided for Beta, as we do not do credential exchange on AOS side, we can switch to sts:audit_context
     * and then we onboard to this API allow listing after initial beta launch
     */
    return decodedJwt['sts:audit_context'] as string;
  } catch (error: any) {
    throw new Error(`Invalid JWT: ${error.message}`);
  }
};

const assumeRole = async (
  contextAssertion: string,
  roleARN: string,
  username: string,
  region: string
): Promise<SigV4Content> => {
  const params: AssumeRoleCommandInput = {
    RoleArn: roleARN,
    RoleSessionName: `aosd-${username}`,
    DurationSeconds: STS_ROLE_SESSION_DURATION,
    ProvidedContexts: [
      {
        ProviderArn: STS_PROVIDER_ARN,
        ContextAssertion: contextAssertion,
      },
    ],
  };
  const command = new AssumeRoleCommand(params);

  try {
    const stsClient = getSTSClient();
    const data = await stsClient.send(command);
    if (
      data.Credentials &&
      data.Credentials.AccessKeyId &&
      data.Credentials.SecretAccessKey &&
      data.Credentials.SessionToken
    ) {
      const credential = {
        region,
        accessKey: data.Credentials?.AccessKeyId || '',
        secretKey: data.Credentials?.SecretAccessKey || '',
        sessionToken: data.Credentials?.SessionToken,
      };
      return credential;
    } else {
      throw Error(`Assume Role failed`);
    }
  } catch (error: any) {
    throw Error(`Error while assuming role ${error.message}`);
  }
};
