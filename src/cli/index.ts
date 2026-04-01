import { login } from './commands/login';
import { list_codes } from './commands/list_codes';

const commands: Record<string, { description: string; run: (args: string[]) => Promise<void> }> = {
  login: {
    description: 'Authenticate with username and password',
    run: login,
  },
  'list-codes': {
    description: 'List all codes',
    run: list_codes,
  },
};

function printHelp() {
  console.log('Usage: wikimedia-enterprise <command> [options]');
  console.log('');
  console.log('Commands:');
  for (const [name, { description }] of Object.entries(commands)) {
    console.log(`  ${name.padEnd(16)}${description}`);
  }
}

async function main() {
  const args = process.argv.slice(2);
  const command = args[0];

  if (!command || command === '--help' || command === '-h') {
    printHelp();
    process.exit(0);
  }

  const handler = commands[command];
  if (!handler) {
    console.error(`Unknown command: ${command}`);
    console.error('');
    printHelp();
    process.exit(1);
  }

  await handler.run(args.slice(1));
}

main().catch((err) => {
  console.error(err.message || err);
  process.exit(1);
});
