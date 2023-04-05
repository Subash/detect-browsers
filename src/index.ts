import { spawn } from 'child_process';
import which from 'which';
import browsers from './browsers';
import type { Browser } from './browsers/types';
export type { Browser } from './browsers/types';

export type BrowserName = keyof typeof browsers;

async function getExecutable(name: BrowserName): Promise<string | undefined> {
  const execs = browsers[name];
  if (!execs || !execs[process.platform]) return;
  for (const exec of execs[process.platform]) {
    const executable = await which(exec).catch(() => {});
    if (executable) return executable;
  }
}

export async function getAvailableBrowsers(): Promise<Browser[]> {
  const list = [];
  for (const browser of Object.keys(browsers) as BrowserName[]) {
    const executable = await getExecutable(browser);
    if (executable) list.push({ browser, executable });
  }
  return list;
}

async function launchBrowserMac(
  browser: Browser,
  address: string
): Promise<void> {
  spawn('open', ['-a', browser.browser, decodeURI(address)], {
    detached: true,
    env: process.env
  });
}

async function launchEdge(address: string): Promise<void> {
  spawn(`start microsoft-edge:"${address}"`, {
    detached: true,
    env: process.env,
    shell: true
  });
}

export async function launchBrowser(
  browser: Browser,
  address: string
): Promise<void> {
  // use open command to open browsers in macOS
  if (process.platform === 'darwin') {
    return launchBrowserMac(browser, address);
  }

  // legacy edge can not be started by spawning the executable
  if (browser.executable.endsWith('MicrosoftEdge.exe')) {
    return launchEdge(address);
  }

  // spawn the executable for all other browsers and platforms
  spawn(browser.executable, [address], { detached: true, env: process.env });
}
