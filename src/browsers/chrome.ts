import type { PossibleExecutables } from './types';

export default {
  linux: ['google-chrome', 'google-chrome-stable'],
  darwin: ['/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'],
  win32: [
    process.env.LOCALAPPDATA + '\\Google\\Chrome\\Application\\chrome.exe',
    process.env.ProgramW6432 + '\\Google\\Chrome\\Application\\chrome.exe',
    process.env.ProgramFiles + '\\Google\\Chrome\\Application\\chrome.exe',
    process.env['ProgramFiles(x86)'] +
      '\\Google\\Chrome\\Application\\chrome.exe'
  ]
} as PossibleExecutables;
