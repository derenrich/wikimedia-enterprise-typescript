// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

/**
 * Authentication and Account Management
 */
export class NewPasswordRequired extends APIResource {
  /**
   * Responds to the NEW_PASSWORD_REQUIRED challenge.
   */
  respond(
    body: NewPasswordRequiredRespondParams,
    options?: RequestOptions,
  ): APIPromise<NewPasswordRequiredRespondResponse> {
    return this._client.post('/v1/new-password-required', {
      body,
      defaultBaseURL: 'https://auth.enterprise.wikimedia.com',
      ...options,
      __security: {},
    });
  }
}

export interface NewPasswordRequiredRespondResponse {
  access_token?: string;

  expires_in?: number;

  id_token?: string;

  refresh_token?: string;

  session?: string;
}

export interface NewPasswordRequiredRespondParams {
  new_password: string;

  session: string;

  username: string;
}

export declare namespace NewPasswordRequired {
  export {
    type NewPasswordRequiredRespondResponse as NewPasswordRequiredRespondResponse,
    type NewPasswordRequiredRespondParams as NewPasswordRequiredRespondParams,
  };
}
