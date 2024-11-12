const { exec } = require('child_process');
const path = require('path');

function splitAudio(inputPath, outputPath) {
    return new Promise((resolve, reject) => {
        const scriptPath = path.resolve(__dirname, 'split_audio.py');
        exec(`python ${scriptPath} ${inputPath} ${outputPath}`, (error, stdout, stderr) => {
            if (error) {
                reject(`Error: ${error.message}`);
            } else if (stderr) {
                reject(`Stderr: ${stderr}`);
            } else {
                resolve(stdout);
            }
        });
    });
}

module.exports = {
    splitAudio
};