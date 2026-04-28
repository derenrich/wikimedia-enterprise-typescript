// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Labels extends APIResource {
  /**
   * @example
   * ```ts
   * const label = await client.wikidata.labels.create('Q42');
   * ```
   */
  create(
    identifier: string,
    body: LabelCreateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<unknown> {
    return this._client.post(path`/v2/wikidata/labels/${identifier}`, { body, ...options });
  }

  /**
   * @example
   * ```ts
   * const label = await client.wikidata.labels.retrieve('Q42');
   * ```
   */
  retrieve(
    identifier: string,
    query: LabelRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<unknown> {
    return this._client.get(path`/v2/wikidata/labels/${identifier}`, { query, ...options });
  }
}

export type LabelCreateResponse = unknown;

export type LabelRetrieveResponse = unknown;

export interface LabelCreateParams {
  /**
   * Select which fields to receive in your response, using JSON dot notation.
   */
  fields?: Array<string>;
}

export interface LabelRetrieveParams {
  /**
   * Select which fields to receive in your response, using JSON dot notation.
   */
  fields?: Array<string>;
}

export declare namespace Labels {
  export {
    type LabelCreateResponse as LabelCreateResponse,
    type LabelRetrieveResponse as LabelRetrieveResponse,
    type LabelCreateParams as LabelCreateParams,
    type LabelRetrieveParams as LabelRetrieveParams,
  };
}
