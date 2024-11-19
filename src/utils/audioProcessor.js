const exec  = require('child_process');
const ffmpeg = require('fluent-ffmpeg');
const ffmpegStatic = require('ffmpeg-static');
const path = require('path');


// 设置 FFmpeg 的路径为静态二进制文件
ffmpeg.setFfmpegPath(ffmpegStatic);

/**
 * 转换音频文件格式
 * 
 * @param {string} inputPath - 输入文件路径
 * @param {string} outputPath - 输出文件路径（包含文件名和扩展名）
 * @param {object} options - 可选的转换设置，如比特率、采样率、通道数等
 * @returns {Promise} 返回一个 Promise，表示转换操作的完成
 */
function convertAudioFormat(inputPath, outputPath, options = {}) {
    return new Promise((resolve, reject) => {
      // 使用 ffmpeg 进行转换
      let command = ffmpeg(inputPath);
  
      // 根据传入的 options 设置参数
      if (options.bitRate) {
        command.audioBitrate(options.bitRate);
      }
      if (options.sampleRate) {
        command.audioFrequency(options.sampleRate);
      }
      if (options.channels) {
        command.audioChannels(options.channels);
      }
  
      // 开始转换并输出到指定文件
      command
        .toFormat(path.extname(outputPath).slice(1)) // 自动从输出路径推断格式
        .on('end', () => {
          console.log(`Conversion completed: ${outputPath}`);
          resolve(outputPath);
        })
        .on('error', (err) => {
          console.error('Error during conversion:', err);
          reject(err);
        })
        .save(outputPath); // 保存输出文件
    });
  }

/**
 * 人声伴奏分离
 * @param {string} inputPath 音频输入路径
 * @param {string} outputPath 音频输出路径
 * @returns {Promise} 返回一个 Promise，表示转换操作的完成
 */

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
    convertAudioFormat,
    splitAudio
};