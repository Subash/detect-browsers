### Detect browsers installed on a machine

```javascript
//import
import * as detectBrowsers from 'detect-browsers';

//require
const detectBrowsers = require('detect-browsers');

//async

detectBrowsers.getInstalledBrowsers()
  .then( browsers => console.log(browsers))
  .catch( error => console.error(error))

//sync

const browsers = detectBrowsers.getInstalledBrowsersSync();
console.log(browsers);

//Experimental async/await
//Must be inside another async function

const browsers = await detectBrowsers.getInstalledBrowsers();
console.log(browsers);

```

License -> MIT
