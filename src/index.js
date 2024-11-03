// 引入依赖包
const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');


// 创建 Express 应用
const app = express();

// 解析 JSON 请求体
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded


// 连接到 MongoDB
mongoose.connect('mongodb://localhost:27017/test').then(() => {
    console.log('Connected to MongoDB');
}).catch((error) => {
    console.error('Error connecting to MongoDB:', error);
});

app.use('/', userRoutes);

// 启动服务器
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
