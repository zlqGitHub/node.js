let age = 18;
let name = "张利强";

let fun = ()=>{
    console.log("我正在学习node.js");
}
console.log("我是 02.js 文件");
//在node中通过使用 exports 来将资源暴露出去    到导入文件打印时，自身文件中的打印也会输出到控制台中
exports.age = age;
exports.fun = fun;

/*
    02.js   03.js  主要是node中 模块化的体现，即将独立的js文件封装起来，并暴露出去
*/