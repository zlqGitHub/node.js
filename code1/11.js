/*
    批量导入文件
*/

let fs = require("fs");

//2.创建读写流
let rs = fs.createReadStream("C:\\Users\\lenovo\\Desktop/李健、孙俪 - 风吹麦浪 (Live).mp3");   //路径中的双斜线表示转码
let ws = fs.createWriteStream("./code1/李健、孙俪 - 风吹麦浪 (Live).mp3");

//3.监听打开、关闭通道
ws.once("open",() => {
    console.log("写入通道已打开");
})
ws.once("close",() => {
    console.log("写入通道已关闭");
})
rs.once("open",() => {
    console.log("读出通道已打开");
})
rs.once("close",() => {
    console.log("读出通道已关闭");
})

//时刻监听文件流的读入，写入  用on    绑定data
rs.on("data",(data) =>{
    // console.log(data);
    ws.write(data);
})
