/*
    URL的认识
        原生js只能通过正则表达式来获取 URL 中的信息
        node提供了URL接口，来获取特定的信息
    1.使用 WHATWG  的 API 解析 URL 字符串：  适合完整的地址
        const myURL =  new URL('https://user:pass@sub.host.com:8080/p/a/t/h?query=string#hash');
    2.使用遗留的 API 解析 URL 字符串：
        const url = require('url');
        const myURL = url.parse('https://user:pass@sub.host.com:8080/p/a/t/h?query=string#hash');
*/

//1.导入核心模块
let http = require("http");
let URL = require("url");

//创建一个服务器
let server = http.createServer((req,res) => {
    res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"})
    console.log(req.url);
    let url = URL.parse(req.url);
    console.log(url);
    res.end("你好，世界！");
});

//3.监听
server.listen(80,"127.0.0.1");
