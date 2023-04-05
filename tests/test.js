const { getAvailableBrowsers } = require('../');

test('Test getAvailableBrowsers()', async () => {
  await getAvailableBrowsers();
});
