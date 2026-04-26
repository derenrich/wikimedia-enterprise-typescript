// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

/**
 * Authentication and Account Management
 */
export class TokenRefresh extends APIResource {
  /**
   * Provides new access and id tokens with your valid username and refresh token.
   */
  refresh(body: TokenRefreshRefreshParams, options?: RequestOptions): APIPromise<TokenRefreshRefreshResponse> {
    return this._client.post('/v1/token-refresh', { body, defaultBaseURL: 'https://auth.enterprise.wikimedia.com', ...options, __security: {  } });
  }
}

export interface TokenRefreshRefreshResponse {
  access_token?: string;

  expires_in?: number;

  id_token?: string;
}

export interface TokenRefreshRefreshParams {
  refresh_token: string;

  username: string;
}

export declare namespace TokenRefresh {
  export {
    type TokenRefreshRefreshResponse as TokenRefreshRefreshResponse,
    type TokenRefreshRefreshParams as TokenRefreshRefreshParams
  };
}
