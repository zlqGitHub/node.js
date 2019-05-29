/*
    功能描述：
        建立服务器，读取数据，将数据通过模板引擎渲染到页面中
*/
let http = require("http");
let fs = require("fs");
let ejs = require("ejs");

http.createServer((req,res) => {

}).listen(80,"127.0.0.1");

//获取JSON数据
function getDataJson(callback) {
    fs.readFile("./code4/model/list.json",(err,data) => {
        if(!err){

        }else{
            throw err;
            res.writeHead(404,{"Content-Type":"text/html;charset=utf-8"});
            res.end();
        }
    })
}



