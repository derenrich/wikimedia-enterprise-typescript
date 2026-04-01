import WikimediaEnterprise from '../../index';
import type { CLICommand, CLIResult } from '../types';

export const login: CLICommand = async (args): Promise<CLIResult> => {
  let username: string | undefined;
  let password: string | undefined;

  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    if ((arg === '--username' || arg === '-u') && i + 1 < args.length) {
      username = args[++i];
    } else if ((arg === '--password' || arg === '-p') && i + 1 < args.length) {
      password = args[++i];
    } else if (arg === '--help' || arg === '-h') {
      return { exitCode: 0, stdout: [usage()] };
    }
  }

  if (!username || !password) {
    return { exitCode: 1, stderr: [usage()] };
  }

  // Login endpoint uses __security: {} so no API key is needed.
  // Pass a placeholder to satisfy the constructor requirement.
  const client = new WikimediaEnterprise({ apiKey: '_' });
  const response = await client.login.authenticate({ username, password });
  return { exitCode: 0, stdout: [`WME_ACCESS_TOKEN=${response.access_token}\nREFRESH_TOKEN=${response.refresh_token}`] };

}

function usage(): string {
  return 'Usage: wikimedia-enterprise login --username <username> --password <password>';
}
