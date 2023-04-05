import process from 'node:process';

export type PossibleExecutable = string[];

export type PossibleExecutables = Record<
  typeof process.platform,
  PossibleExecutable
>;

export type Browser = {
  browser: string;
  executable: string;
};
