// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import WikimediaEnterprise from 'wikimedia-enterprise';

const client = new WikimediaEnterprise({ apiKey: 'My API Key', baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010' });

describe('resource forgotPasswordConfirm', () => {
  // Mock server tests are disabled
  test.skip('confirm: only required params', async () => {
    const responsePromise = client.forgotPasswordConfirm.confirm({
    confirmation_code: 'confirmation_code',
    password: 'password',
    username: 'username',
  });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('confirm: required and optional params', async () => {
    const response = await client.forgotPasswordConfirm.confirm({
    confirmation_code: 'confirmation_code',
    password: 'password',
    username: 'username',
  });
  });
});
