// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as CodesAPI from './codes';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

/**
 * Metadata
 */
export class Namespaces extends APIResource {
  /**
   * @example
   * ```ts
   * const namespaces = await client.namespaces.create();
   * ```
   */
  create(body: NamespaceCreateParams | null | undefined = {}, options?: RequestOptions): APIPromise<NamespaceCreateResponse> {
    return this._client.post('/v2/namespaces', { body, ...options });
  }

  /**
   * @example
   * ```ts
   * const namespace = await client.namespaces.retrieve(0);
   * ```
   */
  retrieve(identifier: number, query: NamespaceRetrieveParams | null | undefined = {}, options?: RequestOptions): APIPromise<Namespace> {
    return this._client.get(path`/v2/namespaces/${identifier}`, { query, ...options });
  }

  /**
   * @example
   * ```ts
   * const namespace = await client.namespaces.update(0);
   * ```
   */
  update(identifier: number, body: NamespaceUpdateParams | null | undefined = {}, options?: RequestOptions): APIPromise<Namespace> {
    return this._client.post(path`/v2/namespaces/${identifier}`, { body, ...options });
  }

  /**
   * @example
   * ```ts
   * const namespaces = await client.namespaces.list();
   * ```
   */
  list(query: NamespaceListParams | null | undefined = {}, options?: RequestOptions): APIPromise<NamespaceListResponse> {
    return this._client.get('/v2/namespaces', { query, ...options });
  }
}

export interface Namespace {
  description?: string;

  identifier?: number;

  name?: string;
}

export type NamespaceCreateResponse = Array<Namespace>

export type NamespaceListResponse = Array<Namespace>

export interface NamespaceCreateParams {
  /**
   * Select which fields to receive in your response, using JSON dot notation.
   */
  fields?: Array<string>;

  /**
   * Select which projects and languages to receive in your response.
   */
  filters?: Array<CodesAPI.Filter>;
}

export interface NamespaceRetrieveParams {
  /**
   * Select which fields to receive in your response, using JSON dot notation.
   */
  fields?: Array<string>;
}

export interface NamespaceUpdateParams {
  /**
   * Select which fields to receive in your response, using JSON dot notation.
   */
  fields?: Array<string>;
}

export interface NamespaceListParams {
  /**
   * Select which fields to receive in your response, using JSON dot notation.
   */
  fields?: Array<string>;

  /**
   * Select which projects and languages to receive in your response.
   */
  filters?: Array<CodesAPI.Filter>;
}

export declare namespace Namespaces {
  export {
    type Namespace as Namespace,
    type NamespaceCreateResponse as NamespaceCreateResponse,
    type NamespaceListResponse as NamespaceListResponse,
    type NamespaceCreateParams as NamespaceCreateParams,
    type NamespaceRetrieveParams as NamespaceRetrieveParams,
    type NamespaceUpdateParams as NamespaceUpdateParams,
    type NamespaceListParams as NamespaceListParams
  };
}
