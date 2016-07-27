import browsersList from '../browsers';
import bluebird from 'bluebird';
import which from 'which';
import { spawn } from 'child_process';
const browserCache = [];
const platform = process.platform;
const whichAsync  = bluebird.promisify(which);

async function checkBrowser(commands) {
  for(const command of commands) {
    try {
      return await whichAsync(command);
    } catch(err) {}
  }
}

async function getInstalledBrowsers() {
  if(browserCache.length) return browserCache;
  for(const key of Object.keys(browsersList)) {
    const browser = browsersList[key];
    const name = browser.name;
    const commands = browser.DEFAULT_CMD[platform];
    if(!commands) continue;
    const executablePath = await checkBrowser(commands);
    if(!executablePath) continue;
    browserCache.push({ name, executablePath });
  }
  return browserCache;
}

function checkBrowserSync(commands) {
  for(const command of commands) {
    try {
      return which.sync(command);
    } catch(err) {}
  }
}

function getInstalledBrowsersSync() {
  if(browserCache.length) return browserCache;
  for(const key of Object.keys(browsersList)) {
    const browser = browsersList[key];
    const name = browser.name;
    const commands = browser.DEFAULT_CMD[platform];
    if(!commands) continue;
    const executablePath = checkBrowserSync(commands);
    if(!executablePath) continue;
    browserCache.push({ name, executablePath });
  }
  return browserCache;
}

function openBrowser({ name, executablePath }, address) {
  if(process.platform === 'darwin' && ['Safari', 'Firefox'].includes(name)) {
    spawn('open', ['-a', name, address], { detached: true});
  } else if(process.platform === 'win32' && name === 'Microsoft Edge') {
    spawn('start', ['/c', `start microsoft-edge:${address}`], { detached: true, env: process.env });
  } else {
    spawn(executablePath, [address], { detached: true});
  }
}

export { getInstalledBrowsers, getInstalledBrowsersSync, openBrowser };
