let age = 18;
let name = "张利强";

let fun = ()=>{
    console.log("我正在学习node.js");
}

//在node中通过使用 exports 来将资源暴露出去
exports.age = age;
exports.fun = fun;

/*
    02.js   03.js  主要是node中 模块化的体现，即将独立的js文件封装起来，并暴露出去
*/