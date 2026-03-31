// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

/**
 * Metadata
 */
export class Codes extends APIResource {
  /**
   * @example
   * ```ts
   * const codes = await client.codes.create();
   * ```
   */
  create(
    body: CodeCreateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CodeCreateResponse> {
    return this._client.post('/v2/codes', { body, ...options });
  }

  /**
   * @example
   * ```ts
   * const code = await client.codes.retrieve('x');
   * ```
   */
  retrieve(
    identifier: string,
    query: CodeRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Code> {
    return this._client.get(path`/v2/codes/${identifier}`, { query, ...options });
  }

  /**
   * @example
   * ```ts
   * const code = await client.codes.update('x');
   * ```
   */
  update(
    identifier: string,
    body: CodeUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Code> {
    return this._client.post(path`/v2/codes/${identifier}`, { body, ...options });
  }

  /**
   * @example
   * ```ts
   * const codes = await client.codes.list();
   * ```
   */
  list(
    query: CodeListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CodeListResponse> {
    return this._client.get('/v2/codes', { query, ...options });
  }
}

export interface Code {
  description?: string;

  identifier?: string;

  name?: string;
}

export interface Filter {
  field?: string;

  value?: string;
}

export type CodeCreateResponse = Array<Code>;

export type CodeListResponse = Array<Code>;

export interface CodeCreateParams {
  /**
   * Select which fields to receive in your response, using JSON dot notation.
   */
  fields?: Array<string>;

  /**
   * Select which projects and languages to receive in your response.
   */
  filters?: Array<Filter>;
}

export interface CodeRetrieveParams {
  /**
   * Select which fields to receive in your response, using JSON dot notation.
   */
  fields?: Array<string>;
}

export interface CodeUpdateParams {
  /**
   * Select which fields to receive in your response, using JSON dot notation.
   */
  fields?: Array<string>;
}

export interface CodeListParams {
  /**
   * Select which fields to receive in your response, using JSON dot notation.
   */
  fields?: Array<string>;

  /**
   * Select which projects and languages to receive in your response.
   */
  filters?: Array<Filter>;
}

export declare namespace Codes {
  export {
    type Code as Code,
    type Filter as Filter,
    type CodeCreateResponse as CodeCreateResponse,
    type CodeListResponse as CodeListResponse,
    type CodeCreateParams as CodeCreateParams,
    type CodeRetrieveParams as CodeRetrieveParams,
    type CodeUpdateParams as CodeUpdateParams,
    type CodeListParams as CodeListParams,
  };
}
