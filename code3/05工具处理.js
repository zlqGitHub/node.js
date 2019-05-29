/*
    POST请求 + 对图片的处理
    工具处理
*/

let http = require("http");
let fs = require("fs");
let path = require("path");
let formidable = require("formidable");
let uuidv1 = require("uuid/v1");
let util = require("util");

//可以将 'foo=bar&abc=xyz&abc=123 ' 数据转化为对象
let querystring = require("querystring");

let server = http.createServer((req,res) => {
    // console.log(req.url)
    res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
    if(req.url === "/postmsg" && req.method.toLowerCase() === "post"){
        // 实例form对象
        let form = new formidable.IncomingForm();
        //图片上传路径
        form.uploadDir = "./code3/upload";

        //通过uuid来重新生成图片名称，并改变
        let name = uuidv1();

        form.parse(req, function(err, fields, files) {
            let extname = path.extname(files.photo.name);    //文件后缀名
            // console.log(__dirname);
            let oldPath = __dirname + files.photo.path.replace(/code3/,"");  //老路径
            let newPath = __dirname + "/upload/" + name + extname;

            // console.log(oldPath, newPath);
            //更换名称
            fs.rename(oldPath,newPath,(err)=>{
                if(!err){
                    res.writeHead(200, {'content-type': 'text/plain;charset=utf-8'});
                    res.write('received upload:\n\n');
                    res.end(util.inspect({fields: fields, files: files}));
                }else{
                    throw err;
                }
            });
        });

        return;

    }
}).listen(80,"127.0.0.1");