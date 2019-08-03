### Detect Installed Browsers

```javascript
const browsers = require('detect-browsers');

//Get installed browsers
browsers.getAvailableBrowsers()
  .then( list => console.log(list))
  .catch( error => console.error(error));

//Open browser
browsers.openBrowser('Google Chrome', 'https://subashpathak.com');
```

License -> MIT
