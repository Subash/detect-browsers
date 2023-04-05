import type { PossibleExecutables } from './types';

export default {
  win32: [
    process.env.ProgramW6432 + '\\Internet Explorer\\iexplore.exe',
    process.env.ProgramFiles + '\\Internet Explorer\\iexplore.exe',
    process.env['ProgramFiles(x86)'] + '\\Internet Explorer\\iexplore.exe'
  ]
} as PossibleExecutables;
