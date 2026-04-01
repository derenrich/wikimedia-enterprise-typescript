// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';

/**
 * Authentication and Account Management
 */
export class ForgotPasswordConfirm extends APIResource {
  /**
   * Changes user password with a valid confirmation code.
   */
  confirm(body: ForgotPasswordConfirmConfirmParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/v1/forgot-password-confirm', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
      __security: {},
    });
  }
}

export interface ForgotPasswordConfirmConfirmParams {
  confirmation_code: string;

  password: string;

  username: string;
}

export declare namespace ForgotPasswordConfirm {
  export { type ForgotPasswordConfirmConfirmParams as ForgotPasswordConfirmConfirmParams };
}
