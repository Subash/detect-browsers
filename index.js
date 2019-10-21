const { promisify } = require('util');
const { spawn } = require('child_process');
const which = promisify(require('which'));
const browsers = require('./browsers');

async function getExecutable(browser) {
  const execs = browsers[browser];
  if(!execs || !execs[process.platform]) return;
  for(const exec of execs[process.platform]) {
    const executable = await which(exec).catch(()=>{});
    if(executable) return executable;
  }
}

async function getAvailableBrowsers() {
  const list = [];
  for(const browser of Object.keys(browsers)) {
    const exec = await getExecutable(browser);
    if(exec) list.push({ browser, path: exec });
  }
  return list;
}

async function launchBrowser(browser, address) {
  const options = {
    detached: true,
    env: process.env
  };

  // use open command to open browsers in macOS
  if(process.platform === 'darwin') {
    spawn('open', [ '-a', browser.browser, address ], options);
    return;
  }

  // edge can not be started by running the executable
  if(browser.browser === 'Edge') {
    spawn(`start microsoft-edge:"${address}"`, { ...options, shell: true });
    return;
  }

  // spawn the executable
  spawn(browser.path, [ address ], options);
}

module.exports = {
  getAvailableBrowsers,
  launchBrowser
};
