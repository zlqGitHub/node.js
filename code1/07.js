/*
    fs文件的学习
        在node中与文件系统的交互是非常重要的的，服务器的本质就是就是将本地的文件发送给远程服务器
        node中使用fs来和文件系统进行交互，该模块提供了一些标准的文件访问API、读取、写入、等操作
        使用fs前先需要导入其核心模块
            let fs = require("fs");
*/

//为了便于理解，先将以同步机制来处理（通不会发生线程阻塞）

//1.导入fs核心模块
let fs = require("fs");

//2.打开文件
let fd = fs.openSync("test.txt","w");
// console.log(fd);

//3.写入文件
fs.writeFileSync(fd,"我在学习node.js");

//4.保存并退出
fs.closeSync(fd);

console.log("使用的同步处理机制，有I/O先后顺序！")

