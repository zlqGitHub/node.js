/*
    Express的基本使用
*/
//1.导入核心模块
let express = require("express");

//2.实例化一个对象
let app = express();

//4.配置路由
//状态码说明：当访问正确时状态码200   前后两次的访问无数据变化时，状态码：304
app.get("/",(req,res) => {   //get请求时
    res.send("Hello World!");
});

app.get("/static",(req,res) => {   //get请求时
    res.send("jflasjflajh");
});


//5.监听端口及访问     注意：express框架默认访问的是 3000 端口
app.listen(3000,"127.0.0.1");
