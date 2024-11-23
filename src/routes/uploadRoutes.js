// src/routes/uploadRouter.js
const express = require('express');
const { uploadFileController } = require('../controllers/uploadController');
const { singleFileUploader } = require('../utils/fileUploader');

const router = express.Router();

// 单文件上传接口
router.post('/upload', singleFileUploader('file'), uploadFileController);

module.exports = router;
