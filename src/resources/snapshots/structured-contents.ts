// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as CodesAPI from '../codes';
import * as SnapshotsAPI from './snapshots';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * (BETA) Structured Contents Snapshot API
 */
export class StructuredContents extends APIResource {
  /**
   * @example
   * ```ts
   * const snapshots =
   *   await client.snapshots.structuredContents.create();
   * ```
   */
  create(body: StructuredContentCreateParams | null | undefined = {}, options?: RequestOptions): APIPromise<StructuredContentCreateResponse> {
    return this._client.post('/v2/snapshots/structured-contents', { body, ...options });
  }

  /**
   * @example
   * ```ts
   * const snapshot =
   *   await client.snapshots.structuredContents.retrieve('x');
   * ```
   */
  retrieve(identifier: string, query: StructuredContentRetrieveParams | null | undefined = {}, options?: RequestOptions): APIPromise<SnapshotsAPI.Snapshot> {
    return this._client.get(path`/v2/snapshots/structured-contents/${identifier}`, { query, ...options });
  }

  /**
   * @example
   * ```ts
   * const snapshot =
   *   await client.snapshots.structuredContents.update('x');
   * ```
   */
  update(identifier: string, body: StructuredContentUpdateParams | null | undefined = {}, options?: RequestOptions): APIPromise<SnapshotsAPI.Snapshot> {
    return this._client.post(path`/v2/snapshots/structured-contents/${identifier}`, { body, ...options });
  }

  /**
   * @example
   * ```ts
   * const snapshots =
   *   await client.snapshots.structuredContents.list();
   * ```
   */
  list(query: StructuredContentListParams | null | undefined = {}, options?: RequestOptions): APIPromise<StructuredContentListResponse> {
    return this._client.get('/v2/snapshots/structured-contents', { query, ...options });
  }

  /**
   * @example
   * ```ts
   * const response =
   *   await client.snapshots.structuredContents.download('x');
   *
   * const content = await response.blob();
   * console.log(content);
   * ```
   */
  download(identifier: string, params: StructuredContentDownloadParams | null | undefined = {}, options?: RequestOptions): APIPromise<Response> {
    const { Range } = params ?? {}
    return this._client.get(path`/v2/snapshots/structured-contents/${identifier}/download`, { ...options, headers: buildHeaders([{Accept: 'application/gzip', ...(Range != null ? { Range: Range } : undefined)}, options?.headers]), __binaryResponse: true });
  }
}

export type StructuredContentCreateResponse = Array<SnapshotsAPI.Snapshot>

export type StructuredContentListResponse = Array<SnapshotsAPI.Snapshot>

export interface StructuredContentCreateParams {
  /**
   * Select which fields to receive in your response, using JSON dot notation.
   */
  fields?: Array<string>;

  /**
   * Select which projects and languages to receive in your response.
   */
  filters?: Array<CodesAPI.Filter>;
}

export interface StructuredContentRetrieveParams {
  /**
   * Select which fields to receive in your response, using JSON dot notation.
   */
  fields?: Array<string>;
}

export interface StructuredContentUpdateParams {
  /**
   * Select which fields to receive in your response, using JSON dot notation.
   */
  fields?: Array<string>;
}

export interface StructuredContentListParams {
  /**
   * Select which fields to receive in your response, using JSON dot notation.
   */
  fields?: Array<string>;

  /**
   * Select which projects and languages to receive in your response.
   */
  filters?: Array<CodesAPI.Filter>;
}

export interface StructuredContentDownloadParams {
  /**
   * The Range HTTP request header indicates the part of a document that the server
   * should return.
   */
  Range?: string;
}

export declare namespace StructuredContents {
  export {
    type StructuredContentCreateResponse as StructuredContentCreateResponse,
    type StructuredContentListResponse as StructuredContentListResponse,
    type StructuredContentCreateParams as StructuredContentCreateParams,
    type StructuredContentRetrieveParams as StructuredContentRetrieveParams,
    type StructuredContentUpdateParams as StructuredContentUpdateParams,
    type StructuredContentListParams as StructuredContentListParams,
    type StructuredContentDownloadParams as StructuredContentDownloadParams
  };
}
