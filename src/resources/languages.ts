// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as CodesAPI from './codes';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

/**
 * Metadata
 */
export class Languages extends APIResource {
  /**
   * @example
   * ```ts
   * const languages = await client.languages.create();
   * ```
   */
  create(
    body: LanguageCreateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<LanguageCreateResponse> {
    return this._client.post('/v2/languages', { body, ...options });
  }

  /**
   * @example
   * ```ts
   * const language = await client.languages.retrieve('x');
   * ```
   */
  retrieve(
    identifier: string,
    query: LanguageRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Language> {
    return this._client.get(path`/v2/languages/${identifier}`, { query, ...options });
  }

  /**
   * @example
   * ```ts
   * const language = await client.languages.update('x');
   * ```
   */
  update(
    identifier: string,
    body: LanguageUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Language> {
    return this._client.post(path`/v2/languages/${identifier}`, { body, ...options });
  }

  /**
   * @example
   * ```ts
   * const languages = await client.languages.list();
   * ```
   */
  list(
    query: LanguageListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<LanguageListResponse> {
    return this._client.get('/v2/languages', { query, ...options });
  }
}

export interface Language {
  alternate_name?: string;

  direction?: string;

  identifier?: string;

  name?: string;
}

export type LanguageCreateResponse = Array<Language>;

export type LanguageListResponse = Array<Language>;

export interface LanguageCreateParams {
  /**
   * Select which fields to receive in your response, using JSON dot notation.
   */
  fields?: Array<string>;

  /**
   * Select which projects and languages to receive in your response.
   */
  filters?: Array<CodesAPI.Filter>;
}

export interface LanguageRetrieveParams {
  /**
   * Select which fields to receive in your response, using JSON dot notation.
   */
  fields?: Array<string>;
}

export interface LanguageUpdateParams {
  /**
   * Select which fields to receive in your response, using JSON dot notation.
   */
  fields?: Array<string>;
}

export interface LanguageListParams {
  /**
   * Select which fields to receive in your response, using JSON dot notation.
   */
  fields?: Array<string>;

  /**
   * Select which projects and languages to receive in your response.
   */
  filters?: Array<CodesAPI.Filter>;
}

export declare namespace Languages {
  export {
    type Language as Language,
    type LanguageCreateResponse as LanguageCreateResponse,
    type LanguageListResponse as LanguageListResponse,
    type LanguageCreateParams as LanguageCreateParams,
    type LanguageRetrieveParams as LanguageRetrieveParams,
    type LanguageUpdateParams as LanguageUpdateParams,
    type LanguageListParams as LanguageListParams,
  };
}
