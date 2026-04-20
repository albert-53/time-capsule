const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// 把当前目录当成静态文件目录
app.use(express.static('.'));

// 根路径直接返回你的 index.html
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// 启动服务并监听端口
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
