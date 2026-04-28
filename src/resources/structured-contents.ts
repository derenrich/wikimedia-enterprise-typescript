// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as ArticlesAPI from './articles';
import * as CodesAPI from './codes';
import * as LanguagesAPI from './languages';
import * as ProjectsAPI from './projects';
import * as ItemsAPI from './wikidata/items';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

/**
 * (BETA) Structured Contents On-demand API
 */
export class StructuredContents extends APIResource {
  /**
   * @example
   * ```ts
   * const structuredContents =
   *   await client.structuredContents.create('x');
   * ```
   */
  create(
    name: string,
    body: StructuredContentCreateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<StructuredContentCreateResponse> {
    return this._client.post(path`/v2/structured-contents/${name}`, { body, ...options });
  }

  /**
   * @example
   * ```ts
   * const structuredContents =
   *   await client.structuredContents.retrieve('x');
   * ```
   */
  retrieve(
    name: string,
    query: StructuredContentRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<StructuredContentRetrieveResponse> {
    return this._client.get(path`/v2/structured-contents/${name}`, { query, ...options });
  }
}

export interface Image {
  alternative_text?: string;

  caption?: string;

  content_url?: string;

  height?: string;

  width?: string;
}

export interface StructuredContent {
  abstract?: string;

  additional_entities?: Array<ArticlesAPI.Entity>;

  date_created?: string;

  date_modified?: string;

  description?: string;

  identifier?: number;

  image?: Image;

  in_language?: LanguagesAPI.Language;

  infoboxes?: Array<ArticlesAPI.Part>;

  is_part_of?: ProjectsAPI.Project;

  license?: ItemsAPI.License;

  main_entity?: ArticlesAPI.Entity;

  name?: string;

  references?: StructuredContent.References;

  sections?: Array<ArticlesAPI.Part>;

  tables?: StructuredContent.Tables;

  url?: string;

  version?: ArticlesAPI.Version;
}

export namespace StructuredContent {
  export interface References {
    group?: string;

    identifier?: string;

    metadata?: unknown;

    parent_reference?: string;

    source?: References.Source;

    text?: References.Text;

    type?: string;
  }

  export namespace References {
    export interface Source {
      links?: Array<ArticlesAPI.Link>;

      value?: string;
    }

    export interface Text {
      links?: Array<ArticlesAPI.Link>;

      value?: string;
    }
  }

  export interface Tables {
    confidence_score?: number;

    headers?: Array<Array<Tables.Header>>;

    identifier?: string;

    rows?: Array<Array<Tables.Row>>;
  }

  export namespace Tables {
    export interface Header {
      value?: string;
    }

    export interface Row {
      value?: string;
    }
  }
}

export type StructuredContentCreateResponse = Array<StructuredContent>;

export type StructuredContentRetrieveResponse = Array<StructuredContent>;

export interface StructuredContentCreateParams {
  /**
   * Select which fields to receive in your response, using JSON dot notation.
   */
  fields?: Array<string>;

  /**
   * Select which projects and languages to receive in your response.
   */
  filters?: Array<CodesAPI.Filter>;

  /**
   * Limit of articles to return.
   */
  limit?: number;
}

export interface StructuredContentRetrieveParams {
  /**
   * Select which fields to receive in your response, using JSON dot notation.
   */
  fields?: Array<string>;

  /**
   * Select which projects and languages to receive in your response.
   */
  filters?: Array<CodesAPI.Filter>;

  /**
   * Limit of articles to return.
   */
  limit?: number;
}

export declare namespace StructuredContents {
  export {
    type Image as Image,
    type StructuredContent as StructuredContent,
    type StructuredContentCreateResponse as StructuredContentCreateResponse,
    type StructuredContentRetrieveResponse as StructuredContentRetrieveResponse,
    type StructuredContentCreateParams as StructuredContentCreateParams,
    type StructuredContentRetrieveParams as StructuredContentRetrieveParams,
  };
}
