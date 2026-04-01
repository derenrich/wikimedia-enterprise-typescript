export interface CLIContext {
  env: Record<string, string | undefined>;
}

export interface CLIResult {
  exitCode: number;
  stdout?: string[];
  stderr?: string[];
}

export type CLICommand = (args: string[], context: CLIContext) => Promise<CLIResult>;
