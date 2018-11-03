const platform = require('./platform');

/**
 * 
 */
var ffmpegArg = {}

/**
 * 
 */
ffmpegArg.getCaptureArgs = function () {
    let windowsArgs = [];
    let darwinArgs = ['-f', 'avfoundation', '-video_device_index', '0', '-audio_device_index', '0', '-i', '""', 'output3.mkv'];
    let linuxArgs = [];
    let type = platform.detect();
    switch (type) {
        case platform.DARWIN:
            return darwinArgs;
        case platform.WINDOWS:
            return windowsArgs;
        case platform.LINUX:
            return linuxArgs;
        default:
            []
    }
};

module.exports = ffmpegArg