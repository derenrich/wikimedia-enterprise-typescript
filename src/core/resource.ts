// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { WikimediaEnterprise } from '../client';

export abstract class APIResource {
  protected _client: WikimediaEnterprise;

  constructor(client: WikimediaEnterprise) {
    this._client = client;
  }
}
