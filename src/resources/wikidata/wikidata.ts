// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ItemsAPI from './items';
import { ItemCreateParams, ItemCreateResponse, ItemRetrieveParams, ItemRetrieveResponse, Items, License, Protection, WikidataArticle, WikidataEntityProperty, WikidataEntityValue } from './items';
import * as LabelsAPI from './labels';
import { LabelCreateParams, LabelCreateResponse, LabelRetrieveParams, LabelRetrieveResponse, Labels } from './labels';
import * as PropertiesAPI from './properties';
import { Properties, PropertyCreateParams, PropertyCreateResponse, PropertyRetrieveParams, PropertyRetrieveResponse } from './properties';

export class Wikidata extends APIResource {
  items: ItemsAPI.Items = new ItemsAPI.Items(this._client);
  properties: PropertiesAPI.Properties = new PropertiesAPI.Properties(this._client);
  labels: LabelsAPI.Labels = new LabelsAPI.Labels(this._client);
}

Wikidata.Items = Items;
Wikidata.Properties = Properties;
Wikidata.Labels = Labels;

export declare namespace Wikidata {
  export {
    Items as Items,
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

  export {
    Properties as Properties,
    type PropertyCreateResponse as PropertyCreateResponse,
    type PropertyRetrieveResponse as PropertyRetrieveResponse,
    type PropertyCreateParams as PropertyCreateParams,
    type PropertyRetrieveParams as PropertyRetrieveParams
  };

  export {
    Labels as Labels,
    type LabelCreateResponse as LabelCreateResponse,
    type LabelRetrieveResponse as LabelRetrieveResponse,
    type LabelCreateParams as LabelCreateParams,
    type LabelRetrieveParams as LabelRetrieveParams
  };
}
