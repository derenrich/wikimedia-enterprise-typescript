// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import WikimediaEnterprise from 'wikimedia-enterprise';

const client = new WikimediaEnterprise({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource structuredContents', () => {
  // Mock server tests are disabled
  test.skip('create', async () => {
    const responsePromise = client.structuredContents.create('x');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('create: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.structuredContents.create(
        'x',
        {
          fields: ['string'],
          filters: [{ field: 'field', value: 'value' }],
          limit: 0,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(WikimediaEnterprise.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.structuredContents.retrieve('x');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('retrieve: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.structuredContents.retrieve(
        'x',
        {
          fields: ['name'],
          filters: [{ field: 'field', value: 'value' }],
          limit: 0,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(WikimediaEnterprise.NotFoundError);
  });
});
