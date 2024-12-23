// src/routes/uploadRouter.js
const express = require('express');
const { uploadFileController } = require('../controllers/fileController');
const { fileUploader } = require('../utils/fileUploader');

const router = express.Router();

// 单文件上传接口
router.post('/upload', fileUploader('file'), uploadFileController);

module.exports = router;
