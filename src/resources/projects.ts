// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as CodesAPI from './codes';
import * as LanguagesAPI from './languages';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

/**
 * Metadata
 */
export class Projects extends APIResource {
  /**
   * @example
   * ```ts
   * const projects = await client.projects.create();
   * ```
   */
  create(body: ProjectCreateParams | null | undefined = {}, options?: RequestOptions): APIPromise<ProjectCreateResponse> {
    return this._client.post('/v2/projects', { body, ...options });
  }

  /**
   * @example
   * ```ts
   * const project = await client.projects.retrieve('x');
   * ```
   */
  retrieve(identifier: string, query: ProjectRetrieveParams | null | undefined = {}, options?: RequestOptions): APIPromise<Project> {
    return this._client.get(path`/v2/projects/${identifier}`, { query, ...options });
  }

  /**
   * @example
   * ```ts
   * const project = await client.projects.update('x');
   * ```
   */
  update(identifier: string, body: ProjectUpdateParams | null | undefined = {}, options?: RequestOptions): APIPromise<Project> {
    return this._client.post(path`/v2/projects/${identifier}`, { body, ...options });
  }

  /**
   * @example
   * ```ts
   * const projects = await client.projects.list();
   * ```
   */
  list(query: ProjectListParams | null | undefined = {}, options?: RequestOptions): APIPromise<ProjectListResponse> {
    return this._client.get('/v2/projects', { query, ...options });
  }
}

export interface Project {
  code?: string;

  identifier?: string;

  in_language?: LanguagesAPI.Language;

  name?: string;

  url?: string;
}

export type ProjectCreateResponse = Array<Project>

export type ProjectListResponse = Array<Project>

export interface ProjectCreateParams {
  /**
   * Select which fields to receive in your response, using JSON dot notation.
   */
  fields?: Array<string>;

  /**
   * Select which projects and languages to receive in your response.
   */
  filters?: Array<CodesAPI.Filter>;
}

export interface ProjectRetrieveParams {
  /**
   * Select which fields to receive in your response, using JSON dot notation.
   */
  fields?: Array<string>;
}

export interface ProjectUpdateParams {
  /**
   * Select which fields to receive in your response, using JSON dot notation.
   */
  fields?: Array<string>;
}

export interface ProjectListParams {
  /**
   * Select which fields to receive in your response, using JSON dot notation.
   */
  fields?: Array<string>;

  /**
   * Select which projects and languages to receive in your response.
   */
  filters?: Array<CodesAPI.Filter>;
}

export declare namespace Projects {
  export {
    type Project as Project,
    type ProjectCreateResponse as ProjectCreateResponse,
    type ProjectListResponse as ProjectListResponse,
    type ProjectCreateParams as ProjectCreateParams,
    type ProjectRetrieveParams as ProjectRetrieveParams,
    type ProjectUpdateParams as ProjectUpdateParams,
    type ProjectListParams as ProjectListParams
  };
}
