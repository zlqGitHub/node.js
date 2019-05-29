/*
    表单请求之 get
    获取表单中传递过来的数据
*/
let http = require("http");
let URL = require("url");

http.createServer((req,res) => {
    // console.log(req);
    res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
    let url = URL.parse(req.url,true);   //第二个参数表示转化为一个对象
    console.log(url);
    let queryObj = url.query;
    console.log(queryObj);
    console.log(queryObj.name);
    console.log(queryObj.age);
    console.log(queryObj.sex);

    res.end("你好，世界");
}).listen(80,"127.0.0.1");
