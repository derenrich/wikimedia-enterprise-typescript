import WikimediaEnterprise from '../../index';
import type { CLICommand, CLIResult } from '../types';

export const list_codes: CLICommand = async (_args, context): Promise<CLIResult> => {
  const accessToken = context.env['WME_ACCESS_TOKEN'];

  if (!accessToken) {
    return { exitCode: 1, stderr: usage() };
  }

  const client = new WikimediaEnterprise({ apiKey: '_' });
  const codes = await client.codes.list(undefined, {
    headers: { Authorization: `Bearer ${accessToken}` },
  });
  return { exitCode: 0, stdout: [JSON.stringify(codes, null, 2)] };
};

function usage(): string[] {
  return [
    'Usage: wikimedia-enterprise list-codes',
    'Requires WME_ACCESS_TOKEN environment variable to be set (see "login" command)',
  ];
}
