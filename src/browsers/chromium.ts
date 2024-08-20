import type { PossibleExecutables } from './types';

export default {
  linux: ['chromium', 'chromium-browser'],
  darwin: ['/Applications/Chromium.app/Contents/MacOS/Chromium']
} as PossibleExecutables;
