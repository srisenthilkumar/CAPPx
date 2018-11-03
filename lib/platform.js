const isWindows = /^win/.test(process.platform);
const isDarwin = /^darwin/.test(process.platform);
const isLinux = /^linux/.test(process.platform);

var platform = {};
platform.detect = function () {
    if (isWindows) {
        return platform.WINDOWS;
    }
    else if (isDarwin) {
        return platform.DARWIN;
    }
    else if (isLinux) {
        return platform.LINUX;
    }
};

platform.WINDOWS = 'windows'
platform.DARWIN = 'darwin'
platform.LINUX = 'linux'

module.exports = platform;