// 加载 express模块
const express = require('express');
// 生成express应用对象
const app = express();
// 引用body-parser 模块
const bodyParser = require('body-parser');

// nodejs内置文件系统模块
const fs = require("fs");

// 使用body-parser 模块 处理通过post请求相关的参数
app.use(bodyParser.urlencoded({ extended: false }));
// 指定一个静态目录
app.use(express.static('www'));

app.get('/', (req, res) => {
  console.log(req.query);
});

app.post('/login', (req, res) => {

});

// 监听指定的端口
app.listen(3000, () => {
  console.log('服务器起动成功！！')
});
