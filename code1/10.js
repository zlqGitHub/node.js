/*
    fs异步读取文件
        fs.readFile(path[, options], callback)
*/
//1.导入核心模块
let fs = require("fs");

//2.读取文件
fs.readFile("test.txt",(err,data) => {
    if(!err){
        console.log(data);
        console.log(data.toString());
    }else{
        throw err;
    }
})

//读取图片   (同理，读取视屏、写入视屏同样的道理)
fs.readFile("./code1/10.jpg",(err,data) => {
    if(!err){
        // console.log(data);
        // console.log(data.toString());
        //将图片写入
        fs.writeFile("./code1/10imgs.jpg",data,(err) => {
            if(!err){
                console.log("图片写入成功");
            }else{
                throw err;
            }

        })
    }else{
        throw err;
    }
})