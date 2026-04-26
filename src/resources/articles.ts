// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as CodesAPI from './codes';
import * as LanguagesAPI from './languages';
import * as NamespacesAPI from './namespaces';
import * as ProjectsAPI from './projects';
import * as StructuredContentsAPI from './structured-contents';
import * as ItemsAPI from './wikidata/items';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

/**
 * On-demand API
 */
export class Articles extends APIResource {
  /**
   * @example
   * ```ts
   * const articles = await client.articles.create('x');
   * ```
   */
  create(name: string, body: ArticleCreateParams | null | undefined = {}, options?: RequestOptions): APIPromise<ArticleCreateResponse> {
    return this._client.post(path`/v2/articles/${name}`, { body, ...options });
  }

  /**
   * @example
   * ```ts
   * const articles = await client.articles.retrieve('x');
   * ```
   */
  retrieve(name: string, query: ArticleRetrieveParams | null | undefined = {}, options?: RequestOptions): APIPromise<ArticleRetrieveResponse> {
    return this._client.get(path`/v2/articles/${name}`, { query, ...options });
  }
}

export interface Article {
  abstract?: string;

  additional_entities?: Array<Entity>;

  article_body?: Article.ArticleBody;

  categories?: Array<Article.Category>;

  date_modified?: string;

  event?: Event;

  has_parts?: Array<Part>;

  identifier?: number;

  in_language?: LanguagesAPI.Language;

  is_part_of?: ProjectsAPI.Project;

  license?: Array<ItemsAPI.License>;

  main_entity?: Entity;

  name?: string;

  namespace?: NamespacesAPI.Namespace;

  protection?: Array<ItemsAPI.Protection>;

  redirects?: Array<Article.Redirect>;

  templates?: Array<Article.Template>;

  url?: string;

  version?: Version;

  visibility?: Visibility;
}

export namespace Article {
  export interface ArticleBody {
    html?: string;

    wikitext?: string;
  }

  export interface Category {
    name?: string;

    url?: string;
  }

  export interface Redirect {
    name?: string;

    url?: string;
  }

  export interface Template {
    name?: string;

    url?: string;
  }
}

export interface Entity {
  identifier?: string;

  url?: string;
}

export interface Event {
  date_created?: string;

  identifier?: string;

  type?: string;
}

export interface Link {
  images?: Array<StructuredContentsAPI.Image>;

  text?: string;

  url?: string;
}

export interface Part {
  citations?: Array<Part.Citation>;

  has_parts?: Array<unknown>;

  images?: Array<StructuredContentsAPI.Image>;

  links?: Array<Link>;

  name?: string;

  type?: string;

  value?: string;

  values?: Array<string>;
}

export namespace Part {
  export interface Citation {
    group?: string;

    identifier?: string;

    text?: string;
  }
}

export interface Version {
  comment?: string;

  editor?: Version.Editor;

  identifier?: number;

  is_flagged_stable?: boolean;

  is_minor_edit?: boolean;

  maintenance_tags?: Version.MaintenanceTags;

  noindex?: boolean;

  scores?: Version.Scores;

  tags?: Array<string>;
}

export namespace Version {
  export interface Editor {
    date_started?: string;

    edit_count?: number;

    groups?: Array<string>;

    identifier?: number;

    is_anonymous?: boolean;

    is_bot?: boolean;

    name?: string;
  }

  export interface MaintenanceTags {
    citation_needed_count?: number;

    clarification_needed_count?: number;

    pov_count?: number;

    update_count?: number;
  }

  export interface Scores {
    referenceneed?: Scores.Referenceneed;

    referencerisk?: Scores.Referencerisk;

    revertrisk?: Scores.Revertrisk;
  }

  export namespace Scores {
    export interface Referenceneed {
      reference_need_score?: number;
    }

    export interface Referencerisk {
      reference_risk_score?: number;
    }

    export interface Revertrisk {
      prediction?: boolean;

      probability?: Revertrisk.Probability;
    }

    export namespace Revertrisk {
      export interface Probability {
        false?: number;

        true?: number;
      }
    }
  }
}

export interface Visibility {
  comment?: boolean;

  text?: boolean;

  user?: boolean;
}

export type ArticleCreateResponse = Array<Article>

export type ArticleRetrieveResponse = Array<Article>

export interface ArticleCreateParams {
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

export interface ArticleRetrieveParams {
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

export declare namespace Articles {
  export {
    type Article as Article,
    type Entity as Entity,
    type Event as Event,
    type Link as Link,
    type Part as Part,
    type Version as Version,
    type Visibility as Visibility,
    type ArticleCreateResponse as ArticleCreateResponse,
    type ArticleRetrieveResponse as ArticleRetrieveResponse,
    type ArticleCreateParams as ArticleCreateParams,
    type ArticleRetrieveParams as ArticleRetrieveParams
  };
}
