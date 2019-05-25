// 引入文件
let test = require('./04.js');
// console.log(test);

let Person = require('./04Person');
let p = new Person("zlq",18,"nan");
console.log(p);     //{ name: 'zlq', sex: 18, age: 'nan' }

/*
    值类型
    let num1 = 10;
    let num2 = num1;
    num1 += 10;
    console.log(num2);   //10
    console.log(num1);    //20
*/

/*
    引用类型
    let obj1 = {};
    let obj2 = boj1;    //二者指向同一个地址
    obj2.name = "zlq";
    console.log(obj1.name);    //zlq
    console.log(obj2.name);    //zlq
*/

