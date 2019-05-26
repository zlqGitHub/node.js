/*
    文件流式操作
*/

//1.导入核心模块
let fs = require("fs");

//2.创建一个写入流
let ws = fs.createWriteStream("test.txt");
console.log(ws);

//3.打开通道
ws.once("open",() => {
    console.log("通道已打开");
})
ws.once("close",() => {
    console.log("通道已经关闭");
})

//4.写入内容
ws.write("创新");
ws.write("团结");
ws.write("努力");

//5.关闭通道  流可以无限写入内容  直到监听到完成时才会关闭
ws.end();

