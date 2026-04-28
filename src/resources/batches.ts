// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as CodesAPI from './codes';
import * as LanguagesAPI from './languages';
import * as NamespacesAPI from './namespaces';
import * as ProjectsAPI from './projects';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

/**
 * Realtime Batch API
 */
export class Batches extends APIResource {
  /**
   * @example
   * ```ts
   * const batches = await client.batches.create('x', {
   *   date: 'x',
   * });
   * ```
   */
  create(hour: string, params: BatchCreateParams, options?: RequestOptions): APIPromise<BatchCreateResponse> {
    const { date, ...body } = params;
    return this._client.post(path`/v2/batches/${date}/${hour}`, { body, ...options });
  }

  /**
   * @example
   * ```ts
   * const batches = await client.batches.retrieve('x', {
   *   date: 'x',
   * });
   * ```
   */
  retrieve(
    hour: string,
    params: BatchRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<BatchRetrieveResponse> {
    const { date, ...query } = params;
    return this._client.get(path`/v2/batches/${date}/${hour}`, { query, ...options });
  }

  /**
   * @example
   * ```ts
   * const response = await client.batches.downloadByIdentifier(
   *   'x',
   *   { date: 'x', hour: 'x' },
   * );
   *
   * const content = await response.blob();
   * console.log(content);
   * ```
   */
  downloadByIdentifier(
    identifier: string,
    params: BatchDownloadByIdentifierParams,
    options?: RequestOptions,
  ): APIPromise<Response> {
    const { date, hour, Range } = params;
    return this._client.get(path`/v2/batches/${date}/${hour}/${identifier}/download`, {
      ...options,
      headers: buildHeaders([
        { Accept: 'application/gzip', ...(Range != null ? { Range: Range } : undefined) },
        options?.headers,
      ]),
      __binaryResponse: true,
    });
  }

  /**
   * @example
   * ```ts
   * const batch = await client.batches.retrieveByIdentifier(
   *   'x',
   *   { date: 'x', hour: 'x' },
   * );
   * ```
   */
  retrieveByIdentifier(
    identifier: string,
    params: BatchRetrieveByIdentifierParams,
    options?: RequestOptions,
  ): APIPromise<Batch> {
    const { date, hour, ...query } = params;
    return this._client.get(path`/v2/batches/${date}/${hour}/${identifier}`, { query, ...options });
  }

  /**
   * @example
   * ```ts
   * const batch = await client.batches.updateByIdentifier('x', {
   *   date: 'x',
   *   hour: 'x',
   * });
   * ```
   */
  updateByIdentifier(
    identifier: string,
    params: BatchUpdateByIdentifierParams,
    options?: RequestOptions,
  ): APIPromise<Batch> {
    const { date, hour, ...body } = params;
    return this._client.post(path`/v2/batches/${date}/${hour}/${identifier}`, { body, ...options });
  }
}

export interface Batch {
  identifier?: string;

  in_language?: LanguagesAPI.Language;

  is_part_of?: ProjectsAPI.Project;

  name?: string;

  namespace?: NamespacesAPI.Namespace;

  size?: Size;

  version?: string;
}

export interface Size {
  unit_text?: string;

  value?: number;
}

export type BatchCreateResponse = Array<Batch>;

export type BatchRetrieveResponse = Array<Batch>;

export interface BatchCreateParams {
  /**
   * Path param
   */
  date: string;

  /**
   * Body param: Select which fields to receive in your response, using JSON dot
   * notation.
   */
  fields?: Array<string>;

  /**
   * Body param: Select which projects and languages to receive in your response.
   */
  filters?: Array<CodesAPI.Filter>;
}

export interface BatchRetrieveParams {
  /**
   * Path param
   */
  date: string;

  /**
   * Query param: Select which fields to receive in your response, using JSON dot
   * notation.
   */
  fields?: Array<string>;

  /**
   * Query param: Select which projects and languages to receive in your response.
   */
  filters?: Array<CodesAPI.Filter>;
}

export interface BatchDownloadByIdentifierParams {
  /**
   * Path param
   */
  date: string;

  /**
   * Path param
   */
  hour: string;

  /**
   * Header param: The Range HTTP request header indicates the part of a document
   * that the server should return.
   */
  Range?: string;
}

export interface BatchRetrieveByIdentifierParams {
  /**
   * Path param
   */
  date: string;

  /**
   * Path param
   */
  hour: string;

  /**
   * Query param: Select which fields to receive in your response, using JSON dot
   * notation.
   */
  fields?: Array<string>;
}

export interface BatchUpdateByIdentifierParams {
  /**
   * Path param
   */
  date: string;

  /**
   * Path param
   */
  hour: string;

  /**
   * Body param: Select which fields to receive in your response, using JSON dot
   * notation.
   */
  fields?: Array<string>;
}

export declare namespace Batches {
  export {
    type Batch as Batch,
    type Size as Size,
    type BatchCreateResponse as BatchCreateResponse,
    type BatchRetrieveResponse as BatchRetrieveResponse,
    type BatchCreateParams as BatchCreateParams,
    type BatchRetrieveParams as BatchRetrieveParams,
    type BatchDownloadByIdentifierParams as BatchDownloadByIdentifierParams,
    type BatchRetrieveByIdentifierParams as BatchRetrieveByIdentifierParams,
    type BatchUpdateByIdentifierParams as BatchUpdateByIdentifierParams,
  };
}
