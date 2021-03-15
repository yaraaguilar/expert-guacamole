const AudioRecorder = require('osx-audio');
const fs = require('fs');
 
const input = new AudioRecorder.Input();
 
const writable = fs.createWriteStream('output.mp3');
input.pipe(writable);