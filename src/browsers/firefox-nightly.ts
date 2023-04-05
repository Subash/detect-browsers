import type { PossibleExecutables } from './types';

export default {
  darwin: ['/Applications/Firefox Nightly.app/Contents/MacOS/firefox-bin'],
  win32: [
    process.env.LOCALAPPDATA + '\\Firefox Nightly\\firefox.exe',
    process.env.ProgramW6432 + '\\Firefox Nightly\\firefox.exe',
    process.env.ProgramFiles + '\\Firefox Nightly\\firefox.exe',
    process.env['ProgramFiles(x86)'] + '\\Firefox Nightly\\firefox.exe'
  ]
} as PossibleExecutables;
