import type { PossibleExecutables } from './types';

export default {
  linux: ['opera'],
  darwin: ['/Applications/Opera.app/Contents/MacOS/Opera'],
  win32: [process.env.LOCALAPPDATA + '\\Programs\\Opera\\launcher.exe']
} as PossibleExecutables;
