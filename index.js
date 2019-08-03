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
    if(exec) list.push(browser);
  }
  return list;
}

async function openBrowser(browser, address) {
  const options = {
    detached: true,
    env: process.env
  };

  // Use open command to open browsers in macOS
  if(process.platform === 'darwin') {
    spawn('open', [ '-a', browser, address ], options);
    return;
  }

  // Edge can not be started by running the executable
  if(browser === 'Edge') {
    spawn(`start microsoft-edge:"${address}"`, { ...options, shell: true });
    return;
  }

  //Spawn the executable
  const exec = await getExecutable(browser);
  if(exec) spawn(exec, [ address ], options);
}

module.exports = {
  getAvailableBrowsers,
  getInstalledBrowsers: getAvailableBrowsers, // legacy api
  getExecutable,
  openBrowser
};
