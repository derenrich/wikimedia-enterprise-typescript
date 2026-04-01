// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';

/**
 * Authentication and Account Management
 */
export class ChangePassword extends APIResource {
  /**
   * Changes user password with your valid access token and current password.
   */
  update(body: ChangePasswordUpdateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/v1/change-password', {
      body,
      defaultBaseURL: 'https://auth.enterprise.wikimedia.com',
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
      __security: {},
    });
  }
}

export interface ChangePasswordUpdateParams {
  access_token: string;

  previous_password: string;

  proposed_password: string;
}

export declare namespace ChangePassword {
  export { type ChangePasswordUpdateParams as ChangePasswordUpdateParams };
}
