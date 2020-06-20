module.exports = {
  linux: ['vivaldi', 'vivaldi-stable'],
  darwin: ['/Applications/Vivaldi.app/Contents/MacOS/Vivaldi'],
  win32: [
    process.env.LOCALAPPDATA + '\\Vivaldi\\Application\\vivaldi.exe'
  ]
};
