/*
    Express 访问静态资源（express.static）
*/
let express = require("express");
let app = express();

//配置路由
app.use(express.static("./code5/public"));

//第一个参数表示路径   第二个参数表示要打开的静态文件
app.use("/public",express.static("./code5/public"));
app.use("/file",express.static("./code5/file"));

app.listen(3000,"127.0.0.1");

