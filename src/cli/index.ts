import { login } from './commands/login';
import { list_codes } from './commands/list_codes';
import type { CLICommand, CLIContext, CLIResult } from './types';

const commands: Record<string, { description: string; run: CLICommand }> = {
  login: {
    description: 'Authenticate with username and password',
    run: login,
  },
  'list-codes': {
    description: 'List all codes',
    run: list_codes,
  },
};

function buildHelp(): string[] {
  const lines = ['Usage: wikimedia-enterprise <command> [options]', '', 'Commands:'];
  for (const [name, { description }] of Object.entries(commands)) {
    lines.push(`  ${name.padEnd(16)}${description}`);
  }
  return lines;
}

function formatError(err: unknown): string {
  return err instanceof Error ? err.message : String(err);
}

export async function runCLI(args: string[], context: CLIContext): Promise<CLIResult> {
  const command = args[0];

  if (!command || command === '--help' || command === '-h') {
    return { exitCode: 0, stdout: buildHelp() };
  }

  const handler = commands[command];
  if (!handler) {
    return {
      exitCode: 1,
      stderr: [`Unknown command: ${command}`, '', ...buildHelp()],
    };
  }

  try {
    return await handler.run(args.slice(1), context);
  } catch (err) {
    return { exitCode: 1, stderr: [formatError(err)] };
  }
}
