// fileUploader.js
const multer = require('multer');
const path = require('path');
const fs = require('fs');

// 配置存储路径和文件名规则
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadDir = path.join(__dirname, 'uploads');
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true }); // 确保目录存在
    }
    cb(null, uploadDir); // 文件存储目录
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + path.extname(file.originalname)); // 保留文件扩展名
  },
});

// 初始化 multer
const upload = multer({ storage });

/**
 * 文件上传中间件
 * @param {string} fieldName - 前端文件字段名称
 */
const fileUploader = (fieldName) => upload.single(fieldName);

module.exports = fileUploader;
