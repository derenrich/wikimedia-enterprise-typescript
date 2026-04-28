// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as BatchesAPI from '../batches';
import * as CodesAPI from '../codes';
import * as LanguagesAPI from '../languages';
import * as NamespacesAPI from '../namespaces';
import * as ProjectsAPI from '../projects';
import * as ChunksAPI from './chunks';
import {
  ChunkCreateParams,
  ChunkDownloadParams,
  ChunkListParams,
  ChunkRetrieveParams,
  ChunkUpdateParams,
  Chunks,
} from './chunks';
import * as StructuredContentsAPI from './structured-contents';
import {
  StructuredContentCreateParams,
  StructuredContentCreateResponse,
  StructuredContentDownloadParams,
  StructuredContentListParams,
  StructuredContentListResponse,
  StructuredContentRetrieveParams,
  StructuredContentUpdateParams,
  StructuredContents,
} from './structured-contents';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * Snapshot API
 */
export class Snapshots extends APIResource {
  chunks: ChunksAPI.Chunks = new ChunksAPI.Chunks(this._client);
  structuredContents: StructuredContentsAPI.StructuredContents = new StructuredContentsAPI.StructuredContents(
    this._client,
  );

  /**
   * @example
   * ```ts
   * const snapshots = await client.snapshots.create();
   * ```
   */
  create(
    body: SnapshotCreateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SnapshotCreateResponse> {
    return this._client.post('/v2/snapshots', { body, ...options });
  }

  /**
   * @example
   * ```ts
   * const snapshot = await client.snapshots.retrieve('x');
   * ```
   */
  retrieve(
    identifier: string,
    query: SnapshotRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Snapshot> {
    return this._client.get(path`/v2/snapshots/${identifier}`, { query, ...options });
  }

  /**
   * @example
   * ```ts
   * const snapshot = await client.snapshots.update('x');
   * ```
   */
  update(
    identifier: string,
    body: SnapshotUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Snapshot> {
    return this._client.post(path`/v2/snapshots/${identifier}`, { body, ...options });
  }

  /**
   * @example
   * ```ts
   * const snapshots = await client.snapshots.list();
   * ```
   */
  list(
    query: SnapshotListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SnapshotListResponse> {
    return this._client.get('/v2/snapshots', { query, ...options });
  }

  /**
   * @example
   * ```ts
   * const response = await client.snapshots.download('x');
   *
   * const content = await response.blob();
   * console.log(content);
   * ```
   */
  download(
    identifier: string,
    params: SnapshotDownloadParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Response> {
    const { Range } = params ?? {};
    return this._client.get(path`/v2/snapshots/${identifier}/download`, {
      ...options,
      headers: buildHeaders([
        { Accept: 'application/gzip', ...(Range != null ? { Range: Range } : undefined) },
        options?.headers,
      ]),
      __binaryResponse: true,
    });
  }
}

export interface Snapshot {
  chunks?: Array<string>;

  date_modified?: string;

  identifier?: string;

  in_language?: LanguagesAPI.Language;

  is_part_of?: ProjectsAPI.Project;

  namespace?: NamespacesAPI.Namespace;

  size?: BatchesAPI.Size;

  version?: string;
}

export type SnapshotCreateResponse = Array<Snapshot>;

export type SnapshotListResponse = Array<Snapshot>;

export interface SnapshotCreateParams {
  /**
   * Select which fields to receive in your response, using JSON dot notation.
   */
  fields?: Array<string>;

  /**
   * Select which projects and languages to receive in your response.
   */
  filters?: Array<CodesAPI.Filter>;
}

export interface SnapshotRetrieveParams {
  /**
   * Select which fields to receive in your response, using JSON dot notation.
   */
  fields?: Array<string>;
}

export interface SnapshotUpdateParams {
  /**
   * Select which fields to receive in your response, using JSON dot notation.
   */
  fields?: Array<string>;
}

export interface SnapshotListParams {
  /**
   * Select which fields to receive in your response, using JSON dot notation.
   */
  fields?: Array<string>;

  /**
   * Select which projects and languages to receive in your response.
   */
  filters?: Array<CodesAPI.Filter>;
}

export interface SnapshotDownloadParams {
  /**
   * The Range HTTP request header indicates the part of a document that the server
   * should return.
   */
  Range?: string;
}

Snapshots.Chunks = Chunks;
Snapshots.StructuredContents = StructuredContents;

export declare namespace Snapshots {
  export {
    type Snapshot as Snapshot,
    type SnapshotCreateResponse as SnapshotCreateResponse,
    type SnapshotListResponse as SnapshotListResponse,
    type SnapshotCreateParams as SnapshotCreateParams,
    type SnapshotRetrieveParams as SnapshotRetrieveParams,
    type SnapshotUpdateParams as SnapshotUpdateParams,
    type SnapshotListParams as SnapshotListParams,
    type SnapshotDownloadParams as SnapshotDownloadParams,
  };

  export {
    Chunks as Chunks,
    type ChunkCreateParams as ChunkCreateParams,
    type ChunkRetrieveParams as ChunkRetrieveParams,
    type ChunkUpdateParams as ChunkUpdateParams,
    type ChunkListParams as ChunkListParams,
    type ChunkDownloadParams as ChunkDownloadParams,
  };

  export {
    StructuredContents as StructuredContents,
    type StructuredContentCreateResponse as StructuredContentCreateResponse,
    type StructuredContentListResponse as StructuredContentListResponse,
    type StructuredContentCreateParams as StructuredContentCreateParams,
    type StructuredContentRetrieveParams as StructuredContentRetrieveParams,
    type StructuredContentUpdateParams as StructuredContentUpdateParams,
    type StructuredContentListParams as StructuredContentListParams,
    type StructuredContentDownloadParams as StructuredContentDownloadParams,
  };
}
