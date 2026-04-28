// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Properties extends APIResource {
  /**
   * @example
   * ```ts
   * const property = await client.wikidata.properties.create(
   *   'P31',
   * );
   * ```
   */
  create(
    identifier: string,
    body: PropertyCreateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<unknown> {
    return this._client.post(path`/v2/wikidata/properties/${identifier}`, { body, ...options });
  }

  /**
   * @example
   * ```ts
   * const property = await client.wikidata.properties.retrieve(
   *   'P31',
   * );
   * ```
   */
  retrieve(
    identifier: string,
    query: PropertyRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<unknown> {
    return this._client.get(path`/v2/wikidata/properties/${identifier}`, { query, ...options });
  }
}

export type PropertyCreateResponse = unknown;

export type PropertyRetrieveResponse = unknown;

export interface PropertyCreateParams {
  /**
   * Select which fields to receive in your response, using JSON dot notation.
   */
  fields?: Array<string>;
}

export interface PropertyRetrieveParams {
  /**
   * Select which fields to receive in your response, using JSON dot notation.
   */
  fields?: Array<string>;
}

export declare namespace Properties {
  export {
    type PropertyCreateResponse as PropertyCreateResponse,
    type PropertyRetrieveResponse as PropertyRetrieveResponse,
    type PropertyCreateParams as PropertyCreateParams,
    type PropertyRetrieveParams as PropertyRetrieveParams,
  };
}
