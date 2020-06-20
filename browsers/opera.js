module.exports = {
  linux: ['opera'],
  darwin: ['/Applications/Opera.app/Contents/MacOS/Opera'],
  win32: [
    process.env.LOCALAPPDATA + '\\Programs\\Opera\\launcher.exe'
  ]
};
