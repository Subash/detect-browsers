### Detect Installed Browsers

```javascript
import { getAvailableBrowsers, launchBrowser } from 'detect-browsers';
const browsers = await getAvailableBrowsers();
await launchBrowser(browsers[0], 'https://subashpathak.com');
```

License -> MIT
