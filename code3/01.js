/*
    Http的基本认识
*/
//1.引入http核心模块
let http = require("http");

//2.创建服务器
/*
    req：表示用户发出的请求  request
    res：表示服务器端做出的响应  response
    node中页面的切换到是通过 req.url 来实现的
        没有web容器，所有的页面资源都需要通过配置路由，配置路径
        127.0.0.1/02test1.html   不能够跳转过去，因为其没有web容器

    其他语言的如php、java是通过直接切换页面来实现的  index.html->test.html
        这类型的语言有一个根目录，可以在根目录下根据目录结构切换页面
*/
let server = http.createServer((req,res) => {
    console.log(req.url);
    res.writeHead(200,{"Content-Type":"text/html;charset=UTF-8"});
    res.write("哈哈哈哈");   //响应到页面的数据   开始
    res.write(" 嘿嘿嘿 ");
    res.write("<h3>我跟他们不同，我是标签</h3>")
    res.end("Hello,Node.js");    //响应到页面的数据   结束
})

//3.监听     注意：在监听之前，不要把之前php的服务器Apache停掉，不然会有冲突
server.listen(80,"127.0.0.1");