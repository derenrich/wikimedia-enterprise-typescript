// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';

/**
 * Authentication and Account Management
 */
export class TokenRevoke extends APIResource {
  /**
   * Revokes the associated access tokens with your valid refresh token.
   */
  revoke(body: TokenRevokeRevokeParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/v1/token-revoke', { body, defaultBaseURL: 'https://auth.enterprise.wikimedia.com', ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]), __security: {  } });
  }
}

export interface TokenRevokeRevokeParams {
  refresh_token?: string;
}

export declare namespace TokenRevoke {
  export {
    type TokenRevokeRevokeParams as TokenRevokeRevokeParams
  };
}
