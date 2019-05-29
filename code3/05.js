/*
    POST请求 + 对图片的处理

    实际开发中是通过工具来处理form表单传递过来的数据的
*/

let http = require("http");
let URL = require("url");
//可以将 'foo=bar&abc=xyz&abc=123 ' 数据转化为对象
let querystring = require("querystring");

let server = http.createServer((req,res) => {
    // console.log(req.url)
    res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
    if(req.url === "/postmsg" && req.method.toLowerCase() === "post"){
        console.log("我是post请求");
        //POST 请求传递过来的参数较多，采用了分段的方式接受数据
        let allData = "";

        //监听数据的传入   监听data数据事件
        req.on("data",(buf)=>{
            allData += buf;
        })

        //监听数据接受完毕   end完毕事件
        req.once("end",() => {
            res.end("OK");
            let dataObj = querystring.parse(allData);
            console.log(dataObj);
            console.log(dataObj.sex);
            // console.log(allData);
        })

    }
    // console.log(req.url);
    // console.log(req.method);   method属性可以判断是什么请求
    // res.end("巴啦啦小魔仙");
}).listen(80,"127.0.0.1");