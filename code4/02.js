/*
    功能描述：
        建立服务器，读取数据，将数据通过模板引擎渲染到页面中
*/
let http = require("http");
let fs = require("fs");
let ejs = require("ejs");

http.createServer((req,res) => {
    getDataJson((dataJson) => {
        // 读取模板
        fs.readFile("./code4/02.ejs",(err,data) => {
            let objList = data.toString();

            // 实例模板
            let tem = ejs.render(objList,dataJson);
            // console.log(dataJson);
            //返回页面
            res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
            res.end(tem);
        })

    });
}).listen(80,"127.0.0.1");

//获取JSON数据
function getDataJson(callback) {
    fs.readFile("./code4/model/list.json",(err,data) => {
        if(!err){
            let dataJson = JSON.parse(data);
            callback(dataJson);
        }else{
            throw err;
            return;
        }
    })
}


