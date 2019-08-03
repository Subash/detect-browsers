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

async function getInstalledBrowsers() {
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

  //Use open command to open browser in macOS
  if(process.platform === 'darwin') {
    return spawn('open', [ '-a', browser, address ], options);
  }

  // Edge can not be started by running the executable
  if(browser === 'Edge') {
    spawn(`start microsoft-edge:"${address}"`, { ...options, shell: true });
    return;
  }

  //Spawn the executable
  const exec = await getExecutable(browser);
  if(!exec) return;
  spawn(exec, [ address ], options);
}

module.exports = {
  getInstalledBrowsers,
  getExecutable,
  openBrowser
};