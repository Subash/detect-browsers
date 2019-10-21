const detectBrowsers = require('../');

test('Test getAvailableBrowsers()', (done)=> {
  expect.assertions(3);
  detectBrowsers
    .getAvailableBrowsers()
    .then((browsers)=> {
      expect(browsers.length).toBeGreaterThan(0);
      expect(browsers[0]).toHaveProperty('browser');
      expect(browsers[0]).toHaveProperty('path');
      done();
    });
});
