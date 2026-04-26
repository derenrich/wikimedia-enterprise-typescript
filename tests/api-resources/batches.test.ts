// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import WikimediaEnterprise from 'wikimedia-enterprise';

const client = new WikimediaEnterprise({ apiKey: 'My API Key', baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010' });

describe('resource batches', () => {
  // Mock server tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.batches.create('x', { date: 'x' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('create: required and optional params', async () => {
    const response = await client.batches.create('x', {
    date: 'x',
    fields: ['string'],
    filters: [{ field: 'field', value: 'value' }],
  });
  });

  // Mock server tests are disabled
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.batches.retrieve('x', { date: 'x' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('retrieve: required and optional params', async () => {
    const response = await client.batches.retrieve('x', {
    date: 'x',
    fields: ['name'],
    filters: [{ field: 'field', value: 'value' }],
  });
  });

  // Mock server tests are disabled
  test.skip('downloadByIdentifier: required and optional params', async () => {
    const response = await client.batches.downloadByIdentifier('x', {
    date: 'x',
    hour: 'x',
    Range: 'Range',
  });
  });

  // Mock server tests are disabled
  test.skip('retrieveByIdentifier: only required params', async () => {
    const responsePromise = client.batches.retrieveByIdentifier('x', { date: 'x', hour: 'x' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('retrieveByIdentifier: required and optional params', async () => {
    const response = await client.batches.retrieveByIdentifier('x', {
    date: 'x',
    hour: 'x',
    fields: ['name'],
  });
  });

  // Mock server tests are disabled
  test.skip('updateByIdentifier: only required params', async () => {
    const responsePromise = client.batches.updateByIdentifier('x', { date: 'x', hour: 'x' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('updateByIdentifier: required and optional params', async () => {
    const response = await client.batches.updateByIdentifier('x', {
    date: 'x',
    hour: 'x',
    fields: ['string'],
  });
  });
});
