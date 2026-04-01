// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';

/**
 * Authentication and Account Management
 */
export class ForgotPassword extends APIResource {
  /**
   * Sends a confirmation code via email.
   */
  sendConfirmationCode(
    body: ForgotPasswordSendConfirmationCodeParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.post('/v1/forgot-password', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
      __security: {},
    });
  }
}

export interface ForgotPasswordSendConfirmationCodeParams {
  username?: string;
}

export declare namespace ForgotPassword {
  export { type ForgotPasswordSendConfirmationCodeParams as ForgotPasswordSendConfirmationCodeParams };
}
