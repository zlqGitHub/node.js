/*
    通过 import 来将需要的资源导入进来
    注意：引入文件的时候需要使用  ./  或者   ../
*/
let test = require('./02.js');
console.log(test);

console.log(test.age);
console.log(test.fun());

//导入js中 myFunction.js 文件    我们自己编写 的文件称为 “文件模块”
let myFun = require('./js/myFunction');   // .js 后缀可以不写   内部会将其补全
console.log(myFun);

let sum = myFun.sum(1,2,3,4,5);
console.log(sum);

let avg = myFun.avg(1,2,3,4,5,6);
console.log(avg);

//下面的文件时node自身提供   称为：“核心模块”
let fs = require('fs');

/*
    思考：exports、require
        1.window不是node的全局变量
        2.node中只有一个全局变量 global
        3.exports、require本质上是函数的参数
            通过arguments（函数的标识）来获取函数的所有参数
            通过打印 arguments.callee 来获取函数自身
            arguments.callee.toString()
        4.本质上node模块外部是一个函数
*/

// console.log(window);   报错，不是其全局变量
// console.log(window.exports);

// console.log(global);
// console.log(global.exports);  //undefined
// console.log(global.require);  //undefined

// console.log(arguments);
// console.log(arguments[1]);
// console.log(arguments.callee);    输出为[Function]
// console.log(arguments.callee.toString());    //将其转换为字符串来查看函数具体信息,函数如下：

/*
    所有模块中的代码都是包装在一个函数中执行的，并且在函数执行的同时传递进去5个参数
    function (exports, require, module, __filename, __dirname) {
        ...函数体（就是该 .js 模块文件中的内容）...
    }
    剖析node模块结构：
        exports：该对象将函数内部的局部变量或局部函数暴露到外部
        require：用来引入外部的模块
        module：代表的是当前模块本身，exports就是起属性，可以使用exports或module.exports导出
        __filename：当前文件的完整路径
        __dirname：当前文件所在文件件的路径
*/

// console.log(module.exports === exports);   //true

// console.log(__filename);    //D:\微信小程序\Node\code1\03.js

// console.log(__dirname);    //D:\微信小程序\Node\code1
