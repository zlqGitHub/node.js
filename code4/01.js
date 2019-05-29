/*
    node.js来访问静态资源库
*/
//1.导入模块
let http = require("http");
let fs = require("fs");
let url = require("url");
let path = require("path");

//2.创建服务器
http.createServer((req,res) => {

    //匹配路径
    let pathUrl = url.parse(req.url);
    let pathname = pathUrl.pathname;
    // console.log(pathname)

    //处理文件
    if(pathname.lastIndexOf('.') === -1){
        pathname = "/index.html";
    }

    //文件路径    可以通过 path.normalize(String)   来规范路径
    let fileUrl =  "./" + path.normalize("./code4/static" + pathname);
    // console.log(fileUrl);

    //获取匹配到的路径的类型
    let extname = path.extname(fileUrl);
    // console.log(extname);

    //读取文件
    fs.readFile(fileUrl,(err,data) => {
        //没有找到
        if(err){
            throw err;
            res.writeHead(404,{"Content-Type":"text/html;charset=utf-8"});
            res.end("<h1>404,数据加载错误!</h1>");
        }else{
            // console.log(data.toString());
            getContentTyppe(extname,(contentType) => {
                res.writeHead(200,{"Content-Type": contentType + ";charset=utf-8"});
                // console.log(data);
                res.end(data)
            })
        }

    })
}).listen(80,"127.0.0.1");

//获取文件对应的Content-Type类型
function getContentTyppe(extname,callback) {
    fs.readFile("./code4/mime.json",(err,data) => {
        if(err){
            throw err;
            return;
        }
        let mimeJSON = JSON.parse(data);   //将获取的mime.json 数据转化为表中JOSN格式
        let contentType = mimeJSON[extname] || "text/plain";
        callback(contentType);
    })
}

