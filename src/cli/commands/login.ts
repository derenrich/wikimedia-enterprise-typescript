import WikimediaEnterprise from '../../index';

export async function login(args: string[]): Promise<void> {
  let username: string | undefined;
  let password: string | undefined;

  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    if ((arg === '--username' || arg === '-u') && i + 1 < args.length) {
      username = args[++i];
    } else if ((arg === '--password' || arg === '-p') && i + 1 < args.length) {
      password = args[++i];
    } else if (arg === '--help' || arg === '-h') {
      printUsage();
      process.exit(0);
    }
  }

  if (!username || !password) {
    printUsage();
    process.exit(1);
  }

  // Login endpoint uses __security: {} so no API key is needed.
  // Pass a placeholder to satisfy the constructor requirement.
  const client = new WikimediaEnterprise({ apiKey: '_' });
  const response = await client.login.authenticate({ username, password });
  console.log(`WME_ACCESS_TOKEN=${response.access_token}"`);
  console.log(`REFRESH_TOKEN="${response.refresh_token}"`);
}

function printUsage() {
  console.error('Usage: wikimedia-enterprise login --username <username> --password <password>');
}
