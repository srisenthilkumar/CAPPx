const { spawn } = require('child_process');
const ffmpegArg = require('../lib/ffmpegArg');

/**
 * 
 */
function Recorder() {

	var recordProcess = null;
	
	let args = ffmpegArg.getCaptureArgs();
	    
	this.on = function() {
		
		recordProcess = spawn('ffmpeg', args);
	
		recordProcess.stdout.on('data', (data) => {
			console.log(`stdout: ${data}`);
		});

		recordProcess.stderr.on('data', (data) => {
			console.log(`stderr: ${data}`);
		});

		recordProcess.on('close', (code) => {
			console.log(`child process exited with code ${code}`);
		});
		
	};

	this.off = function() {
		if(recordProcess)
		{
			recordProcess.kill();
		}
		else{
			console.log('nothing to kill');
		}
		
	}

	return this;

}

module.exports = Recorder;