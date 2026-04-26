// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ItemsAPI from './items';
import * as ArticlesAPI from '../articles';
import * as NamespacesAPI from '../namespaces';
import * as ProjectsAPI from '../projects';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Items extends APIResource {
  /**
   * @example
   * ```ts
   * const item = await client.wikidata.items.create('Q42');
   * ```
   */
  create(identifier: string, body: ItemCreateParams | null | undefined = {}, options?: RequestOptions): APIPromise<unknown> {
    return this._client.post(path`/v2/wikidata/items/${identifier}`, { body, ...options });
  }

  /**
   * @example
   * ```ts
   * const item = await client.wikidata.items.retrieve('Q42');
   * ```
   */
  retrieve(identifier: string, query: ItemRetrieveParams | null | undefined = {}, options?: RequestOptions): APIPromise<unknown> {
    return this._client.get(path`/v2/wikidata/items/${identifier}`, { query, ...options });
  }
}

export interface License {
  identifier?: string;

  name?: string;

  url?: string;
}

export interface Protection {
  expiry?: string;

  level?: string;

  type?: string;
}

export interface WikidataArticle {
  /**
   * unique numeric identifier of the article
   */
  identifier: number;

  license: License;

  /**
   * Wikidata item identifier (Q-number, e.g. Q42), or property identifier (P-number,
   * e.g. P31)
   */
  name: string;

  protection: Protection;

  /**
   * URL to the article
   */
  url: string;

  /**
   * ISO 8601 timestamp of when the article was first created
   */
  date_created?: string;

  /**
   * ISO 8601 timestamp of when the article was last modified
   */
  date_modified?: string;

  /**
   * Timestamp of the before-last revision in RFC3339 format
   */
  date_previously_modified?: string;

  entity?: WikidataArticle.Entity;

  event?: ArticlesAPI.Event;

  is_part_of?: ProjectsAPI.Project;

  namespace?: NamespacesAPI.Namespace;

  visibility?: ArticlesAPI.Visibility;
}

export namespace WikidataArticle {
  export interface Entity {
    /**
     * Wikidata item identifier (Q-number, e.g. Q42), or property identifier (P-number,
     * e.g. P31)
     */
    identifier: string;

    /**
     * The type of entity, either "item" or "property"
     */
    type: 'item' | 'property';

    /**
     * Key-value pairs with aliases in different languages. Every language may have
     * multiple aliases
     */
    aliases?: unknown;

    /**
     * Key-value pairs with descriptions in different languages
     */
    descriptions?: unknown;

    /**
     * key-value pairs with labels in different languages
     */
    labels?: unknown;

    /**
     * Mapping of this Wikidata item to other Wikimedia project site URLs
     */
    sitelinks?: Entity.Sitelinks;

    /**
     * Array of statement objects for this property
     */
    statements?: Array<Entity.Statement>;
  }

  export namespace Entity {
    /**
     * Mapping of this Wikidata item to other Wikimedia project site URLs
     */
    export interface Sitelinks {
      /**
       * <a href="https://www.wikidata.org/wiki/Help:Sitelinks#Badges">Badge</a>
       * identifiers for this sitelink
       */
      badges: Array<unknown>;

      /**
       * Title of the linked page
       */
      title: string;

      /**
       * URL to the linked page
       */
      url: string;
    }

    /**
     * Statement connecting a value to a Wikidata entity through a property. Each
     * statement corresponds to a single claim on the Wikidata entity, and includes the
     * value of the claim and metadata about the claim such as references, qualifiers,
     * and ranks
     */
    export interface Statement {
      /**
       * Unique identifier for the statement
       */
      identifier: string;

      property: ItemsAPI.WikidataEntityProperty;

      /**
       * Qualifier further describing or refining the value of a property in a statement
       */
      qualifiers: Statement.Qualifiers;

      /**
       * <a href="https://www.wikidata.org/wiki/Help:Ranking">Rank</a> of the statement
       * among other similar statements. Possible values are normal, preferred, and
       * deprecated
       */
      rank: 'normal' | 'preferred' | 'deprecated';

      /**
       * Reference supporting a Wikidata statement
       */
      references: Statement.References;

      /**
       * This object represents the actual value in a statement or qualifier
       */
      value: ItemsAPI.WikidataEntityValue;
    }

    export namespace Statement {
      /**
       * Qualifier further describing or refining the value of a property in a statement
       */
      export interface Qualifiers {
        property: ItemsAPI.WikidataEntityProperty;

        /**
         * This object represents the actual value in a statement or qualifier
         */
        value: ItemsAPI.WikidataEntityValue;
      }

      /**
       * Reference supporting a Wikidata statement
       */
      export interface References {
        /**
         * unique identifier for the reference
         */
        identifier: string;

        /**
         * Parts that make up this reference
         */
        parts: Array<References.Part>;
      }

      export namespace References {
        export interface Part {
          /**
           * The property this reference part refers to. Has the same substructure as
           * statements.PID.property
           */
          property: ItemsAPI.WikidataEntityProperty;

          /**
           * The value of the reference part. Has the same substructure as
           * statements.PROPERTYID.value
           */
          value: ItemsAPI.WikidataEntityValue;
        }
      }
    }
  }
}

export interface WikidataEntityProperty {
  /**
   * The expected <a href="https://www.wikidata.org/wiki/Help:Data_type"data type</a>
   * of the value for this property, e.g. time, quantity, wikibase-item, url, string.
   * The actual data type of the value for this property is found in
   * statements.PID.property.value.type
   */
  data_type: string;

  /**
   * Wikidata Property identifier (P-number, e.g. P31).
   */
  identifier: string;

  /**
   * Key-value pairs with property labels in different languages
   */
  labels?: unknown;
}

/**
 * This object represents the actual value in a statement or qualifier
 */
export interface WikidataEntityValue {
  /**
   * key-value pairs with labels in different languages
   */
  labels: unknown;

  /**
   * The actual data type of the value for this property. Should match
   * statements.PID.property.data_type, but might not.
   */
  type: string;

  /**
   * String representation of the value. If the value is too complex to represent as
   * a string or integer, this will be replaced by statements.PID.value.content_data
   */
  content?: string;

  /**
   * An object holding the representation of the value. If the value can be
   * represented simply as a string or integer, this will be replaced by
   * statements.PID.value.content
   */
  content_data?: unknown;
}

export type ItemCreateResponse = unknown

export type ItemRetrieveResponse = unknown

export interface ItemCreateParams {
  /**
   * Select which fields to receive in your response, using JSON dot notation.
   */
  fields?: Array<string>;
}

export interface ItemRetrieveParams {
  /**
   * Select which fields to receive in your response, using JSON dot notation.
   */
  fields?: Array<string>;
}

export declare namespace Items {
  export {
    type License as License,
    type Protection as Protection,
    type WikidataArticle as WikidataArticle,
    type WikidataEntityProperty as WikidataEntityProperty,
    type WikidataEntityValue as WikidataEntityValue,
    type ItemCreateResponse as ItemCreateResponse,
    type ItemRetrieveResponse as ItemRetrieveResponse,
    type ItemCreateParams as ItemCreateParams,
    type ItemRetrieveParams as ItemRetrieveParams
  };
}
