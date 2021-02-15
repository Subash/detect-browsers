module.exports = {
  linux: ['brave-browser', 'brave'],
  darwin: ['/Applications/Brave Browser.app/Contents/MacOS/Brave Browser'],
  win32: [
    process.env.LOCALAPPDATA + '\\BraveSoftware\\Brave-Browser\\Application\\brave.exe',
    process.env.ProgramW6432 + '\\BraveSoftware\\Brave-Browser\\Application\\brave.exe',
    process.env.ProgramFiles + '\\BraveSoftware\\Brave-Browser\\Application\\brave.exe',
    process.env['ProgramFiles(x86)'] + '\\BraveSoftware\\Brave-Browser\\Application\\brave.exe'
  ]
};
