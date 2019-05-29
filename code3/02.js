/*
    路由配置的基本使用
*/
//1.导入核心模块
let http = require("http");
let fs = require("fs");

//2.创建服务器
let server = http.createServer((req,res) => {
    console.log(req.url);
    //路由配置    在实际开发中，会使用框架来配合路由，不会像下面这么繁琐
    if(req.url === "/02test1.html"){
        // res.writeHead(200,{"Content-Type":"text/html;charset=UTF-8"});
        //通过文件的读写操作将页面显示
        //  ******注意：异步处理，需要回调函数******
        fs.readFile("./code3/02test1.html",(err,data) => {
            if(!err){
                // console.log(data.toString());
                res.writeHead(200,{"Content-Type":"text/html;charset=UTF-8"});
                res.end(data);
            }else{
                throw err;
            }
        });
        // res.end("aaa");
    }else if(req.url === "/page2"){    //"./02test2.html"   可以被任意替换
        fs.readFile("./code3/02test2.html",(err,data) => {
            if(!err){
                res.writeHead(200,{"Content-Type":"text/html;charset=UTF-8"});
                res.end(data);
            }else{
                throw err;
            }
        })
    }else if(req.url === "/css/index.css"){    // .css 文件
        fs.readFile("./code3/css/index.css",(err,data) => {
            if(!err){
                console.log("aa");
                res.writeHead(200,{"Content-Type":"text/css"});
                res.end(data);
            }else{
                throw err;
            }
        })
    }
    /*
    同理可以处理其他类型的文件，注意：Content-Type 的值   参考：https://www.runoob.com/http/http-content-type.html
    else if(req.url === "/sources/index.mp4"){    // 视频文件
        fs.readFile("./code3/sources/index.mp4",(err,data) => {
            if(!err){
                console.log("aa");
                res.writeHead(200,{"Content-Type":"video/mpeg4"});
                res.end(data);
            }else{
                throw err;
            }
        })
    } else if(req.url === "/img/index.jpg"){    // img文件
        fs.readFile("./code3/img/index.jpg",(err,data) => {
            if(!err){
                console.log("aa");
                res.writeHead(200,{"Content-Type":"image/jpeg"});
                res.end(data);
            }else{
                throw err;
            }
        })
    }
    */
    else if(req.url === "/"){     //项目根目录
        res.writeHead(200,{"Content-Type":"text/html;charset=UTF-8"});
        res.end("Hello World!");
    }else{      //错误页面
        res.writeHead(404,{"Content-Type":"text/html;charset=UTF-8"});
        res.end("没有找到页面");
    }
})

//3.监听状态   默认端口可省略
server.listen(80,"127.0.0.1");