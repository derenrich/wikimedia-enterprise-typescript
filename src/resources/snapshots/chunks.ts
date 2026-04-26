// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as CodesAPI from '../codes';
import * as SnapshotsAPI from './snapshots';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * Snapshot API
 */
export class Chunks extends APIResource {
  /**
   * @example
   * ```ts
   * const snapshot = await client.snapshots.chunks.create('x');
   * ```
   */
  create(snapshotIdentifier: string, body: ChunkCreateParams | null | undefined = {}, options?: RequestOptions): APIPromise<SnapshotsAPI.Snapshot> {
    return this._client.post(path`/v2/snapshots/${snapshotIdentifier}/chunks`, { body, ...options });
  }

  /**
   * @example
   * ```ts
   * const snapshot = await client.snapshots.chunks.retrieve(
   *   'x',
   *   { snapshot_identifier: 'x' },
   * );
   * ```
   */
  retrieve(identifier: string, params: ChunkRetrieveParams, options?: RequestOptions): APIPromise<SnapshotsAPI.Snapshot> {
    const { snapshot_identifier, ...query } = params
    return this._client.get(path`/v2/snapshots/${snapshot_identifier}/chunks/${identifier}`, { query, ...options });
  }

  /**
   * @example
   * ```ts
   * const snapshot = await client.snapshots.chunks.update('x', {
   *   snapshot_identifier: 'x',
   * });
   * ```
   */
  update(identifier: string, params: ChunkUpdateParams, options?: RequestOptions): APIPromise<SnapshotsAPI.Snapshot> {
    const { snapshot_identifier, ...body } = params
    return this._client.post(path`/v2/snapshots/${snapshot_identifier}/chunks/${identifier}`, { body, ...options });
  }

  /**
   * @example
   * ```ts
   * const snapshot = await client.snapshots.chunks.list('x');
   * ```
   */
  list(snapshotIdentifier: string, query: ChunkListParams | null | undefined = {}, options?: RequestOptions): APIPromise<SnapshotsAPI.Snapshot> {
    return this._client.get(path`/v2/snapshots/${snapshotIdentifier}/chunks`, { query, ...options });
  }

  /**
   * @example
   * ```ts
   * const response = await client.snapshots.chunks.download(
   *   'x',
   *   { snapshot_identifier: 'x' },
   * );
   *
   * const content = await response.blob();
   * console.log(content);
   * ```
   */
  download(identifier: string, params: ChunkDownloadParams, options?: RequestOptions): APIPromise<Response> {
    const { snapshot_identifier, Range } = params
    return this._client.get(path`/v2/snapshots/${snapshot_identifier}/chunks/${identifier}/download`, { ...options, headers: buildHeaders([{Accept: 'application/gzip', ...(Range != null ? { Range: Range } : undefined)}, options?.headers]), __binaryResponse: true });
  }
}

export interface ChunkCreateParams {
  /**
   * Select which fields to receive in your response, using JSON dot notation.
   */
  fields?: Array<string>;

  /**
   * Select which projects and languages to receive in your response.
   */
  filters?: Array<CodesAPI.Filter>;
}

export interface ChunkRetrieveParams {
  /**
   * Path param: Snapshot identifier looks like
   * `<language><project_name>_namespace_<number>`, examples: `dewiki_namespace_14`
   * downloads categories used in de.wikipedia.org, `enwiki_namespace_0` downloads
   * articles used in en.wikipedia.org, `frwikivoyage_namespace_10` downloads
   * wikitext templates used in fr.wikivoyage.org. See our Metadata Endpoints for
   * language, projects, and namespaces available for configuration.
   */
  snapshot_identifier: string;

  /**
   * Query param: Select which fields to receive in your response, using JSON dot
   * notation.
   */
  fields?: Array<string>;
}

export interface ChunkUpdateParams {
  /**
   * Path param: Snapshot identifier looks like
   * `<language><project_name>_namespace_<number>`, examples: `dewiki_namespace_14`
   * downloads categories used in de.wikipedia.org, `enwiki_namespace_0` downloads
   * articles used in en.wikipedia.org, `frwikivoyage_namespace_10` downloads
   * wikitext templates used in fr.wikivoyage.org. See our Metadata Endpoints for
   * language, projects, and namespaces available for configuration.
   */
  snapshot_identifier: string;

  /**
   * Body param: Select which fields to receive in your response, using JSON dot
   * notation.
   */
  fields?: Array<string>;
}

export interface ChunkListParams {
  /**
   * Select which fields to receive in your response, using JSON dot notation.
   */
  fields?: Array<string>;

  /**
   * Select which projects and languages to receive in your response.
   */
  filters?: Array<CodesAPI.Filter>;
}

export interface ChunkDownloadParams {
  /**
   * Path param: Snapshot identifier looks like
   * `<language><project_name>_namespace_<number>`, examples: `dewiki_namespace_14`
   * downloads categories used in de.wikipedia.org, `enwiki_namespace_0` downloads
   * articles used in en.wikipedia.org, `frwikivoyage_namespace_10` downloads
   * wikitext templates used in fr.wikivoyage.org. See our Metadata Endpoints for
   * language, projects, and namespaces available for configuration.
   */
  snapshot_identifier: string;

  /**
   * Header param: The Range HTTP request header indicates the part of a document
   * that the server should return.
   */
  Range?: string;
}

export declare namespace Chunks {
  export {
    type ChunkCreateParams as ChunkCreateParams,
    type ChunkRetrieveParams as ChunkRetrieveParams,
    type ChunkUpdateParams as ChunkUpdateParams,
    type ChunkListParams as ChunkListParams,
    type ChunkDownloadParams as ChunkDownloadParams
  };
}
