import type { PossibleExecutables } from './types';

export default {
  linux: ['firefox-developer-edition'],
  darwin: [
    '/Applications/Firefox Developer Edition.app/Contents/MacOS/firefox-bin',
    '/Applications/Firefox Developer Edition.app/Contents/MacOS/firefox'
  ],
  win32: [
    process.env.LOCALAPPDATA + '\\Firefox Developer Edition\\firefox.exe',
    process.env.ProgramW6432 + '\\Firefox Developer Edition\\firefox.exe',
    process.env.ProgramFiles + '\\Firefox Developer Edition\\firefox.exe',
    process.env['ProgramFiles(x86)'] +
      '\\Firefox Developer Edition\\firefox.exe'
  ]
} as PossibleExecutables;
