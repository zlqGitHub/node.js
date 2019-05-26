/*
    批量导入文件   (简写)
*/

let fs = require("fs");

//2.创建读写流
let rs = fs.createReadStream("C:\\Users\\lenovo\\Desktop/李健、孙俪 - 风吹麦浪 (Live).mp3");   //路径中的双斜线表示转码
let ws = fs.createWriteStream("./code1/李健、孙俪 - 风吹麦浪 (Live).mp3");

//通过创建管道（管道会替我们去做之前的一些繁琐的操作）
rs.pipe(ws);