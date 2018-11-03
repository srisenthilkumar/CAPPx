// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
const recorder = require('./recorder')();

function startRecord() {
    recorder.on();
}

function stopRecord() {
    recorder.off();
}

var startBtn = document.querySelector('.start');
var stopBtn = document.querySelector('.stop');

startBtn.addEventListener('click', function () {
    startRecord();
});

stopBtn.addEventListener('click', function () {
    stopRecord();
});