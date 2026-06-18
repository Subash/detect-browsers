import type { PossibleExecutables } from './types';

export default {
  linux: ['google-chrome-dev'],
  darwin: [
    '/Applications/Google Chrome Dev.app/Contents/MacOS/Google Chrome Dev'
  ],
  win32: [
    process.env.LOCALAPPDATA + '\\Google\\Chrome Dev\\Application\\chrome.exe',
    process.env.ProgramW6432 + '\\Google\\Chrome Dev\\Application\\chrome.exe',
    process.env.ProgramFiles + '\\Google\\Chrome Dev\\Application\\chrome.exe',
    process.env['ProgramFiles(x86)'] +
      '\\Google\\Chrome Dev\\Application\\chrome.exe'
  ]
} as PossibleExecutables; 