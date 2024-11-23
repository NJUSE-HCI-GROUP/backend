const path = require('path');
const filedb = require('../models/file');

/**
 * 保存文件的业务逻辑
 * @param {Object} file - 上传的文件信息
 * @returns {Object} 文件保存路径或其他业务处理结果
 */
const saveFile = (file) => {
  if (!file) {
    throw new Error('未上传文件');
  }

  // const existingFile = filedb.findOne({ original_name: file.originalname });
  // if (existingFile) {
  //   throw new Error('文件已存在');
  // }

  // 返回文件路径或执行进一步处理
  filedb.create({
    store_path: file.filename,
    original_name: file.originalname,
  });
  const filePath = path.resolve(__dirname, '../uploads', file.filename);
  return {
    message: '文件上传成功',
    filePath,
  };
};

module.exports = {
  saveFile,
};
