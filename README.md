# CAPPx
A simple screen recorder with lot more features

> WIP :articulated_lorry:

### Test Commands

```
ffmpeg -f avfoundation -list_devices true -i ""
ffmpeg -f avfoundation -i "0:0" output.mkv
```

## Tech stack
- Node.js 10.2.0, 
- Chromium 66.0.3359.181
- Electron 3.0.4.
- ffmpeg (currently used a direct install, need to add package)

## References
- https://trac.ffmpeg.org/wiki/Capture/Desktop
- https://www.ffmpeg.org/ffmpeg-devices.html#avfoundation
- https://www.ffmpeg.org/ffmpeg-devices.html
- https://nodejs.org/dist/latest-v10.x/docs/api/child_process.html
- https://medium.com/developers-writing/building-a-desktop-application-with-electron-204203eeb658
- http://dranger.com/ffmpeg/
- https://ffmpeg.org/documentation.html

## Problems

- https://ffmpeg.zeranoe.com/forum/viewtopic.php?t=468

```
The solution was to specify -c:a ac3 or -acodec ac3, not -c:a copy or -acodec copy (even though the final product has the exact same format/same bitrate/same sample rate). This let ffmpeg auto-"correct" the sample format from s16 to flt.
```
