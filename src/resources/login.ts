// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

/**
 * Authentication and Account Management
 */
export class Login extends APIResource {
  /**
   * Create new access, id, and refresh tokens with your valid username and password.
   */
  authenticate(
    body: LoginAuthenticateParams,
    options?: RequestOptions,
  ): APIPromise<LoginAuthenticateResponse> {
    return this._client.post('/v1/login', {
      body,
      defaultBaseURL: 'https://auth.enterprise.wikimedia.com',
      ...options,
      __security: {},
    });
  }
}

export interface LoginAuthenticateResponse {
  access_token?: string;

  expires_in?: number;

  id_token?: string;

  refresh_token?: string;
}

export interface LoginAuthenticateParams {
  password: string;

  username: string;
}

export declare namespace Login {
  export {
    type LoginAuthenticateResponse as LoginAuthenticateResponse,
    type LoginAuthenticateParams as LoginAuthenticateParams,
  };
}
