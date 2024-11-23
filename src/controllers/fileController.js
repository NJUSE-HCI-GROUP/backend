// src/controllers/uploadController.js
const { saveFile } = require('../services/fileService');

/**
 * 文件上传控制器
 */
const uploadFileController = (req, res, next) => {
  try {
    const result = saveFile(req.file); // 调用服务层处理文件
    res.status(200).json(result);
  } catch (error) {
    next(error); // 错误交给全局错误处理中间件
  }
};

module.exports = {
  uploadFileController,
};
