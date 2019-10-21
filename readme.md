### Detect Installed Browsers

```javascript
const detectBrowsers = require('detect-browsers');

// get installed browsers
detectBrowsers.getAvailableBrowsers()
  .then(browsers => {
    detectBrowsers.launchBrowser(browsers[0], 'https://subashpathak.com')
  })
  .catch( error => console.error(error));
```

License -> MIT
