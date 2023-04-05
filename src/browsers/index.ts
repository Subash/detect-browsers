import brave from './brave';
import chrome from './chrome';
import chromeCanary from './chrome-canary';
import chromium from './chromium';
import firefox from './firefox';
import firefoxDeveloperEdition from './firefox-developer-edition';
import firefoxNightly from './firefox-nightly';
import internetExplorer from './internet-explorer';
import microsoftEdge from './microsoft-edge';
import opera from './opera';
import safari from './safari';
import safariTechnologyPreview from './safari-tech-preview';
import vivaldi from './vivaldi';

export default {
  'Brave Browser': brave,
  'Chromium': chromium,
  'Firefox Developer Edition': firefoxDeveloperEdition,
  'Firefox Nightly': firefoxNightly,
  'Firefox': firefox,
  'Google Chrome Canary': chromeCanary,
  'Google Chrome': chrome,
  'Internet Explorer': internetExplorer,
  'Microsoft Edge': microsoftEdge,
  'Opera': opera,
  'Safari Technology Preview': safariTechnologyPreview,
  'Safari': safari,
  'Vivaldi': vivaldi
} as const;
