const path = require('path');
const audio = require('../models/audio');

/**
 * 保存文件的业务逻辑
 * @param {Object} file - 上传的文件信息
 * @returns {Object} 文件保存路径或其他业务处理结果
 */
const saveFile = (file) => {
  if (!file) {
    throw new Error('未上传文件');
  }

  // 返回文件路径或执行进一步处理
  const filePath = path.resolve(__dirname, '../uploads', file.filename);
  return {
    message: '文件上传成功',
    filePath,
  };
};

module.exports = {
  saveFile,
};
