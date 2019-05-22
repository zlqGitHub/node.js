/*
    通过 import 来将需要的资源导入进来
    注意：引入文件的时候需要使用  ./  或者   ../
*/
let test = require('./02.js');
console.log(test);

console.log(test.age);

console.log(test.fun());


//导入js中 myFunction.js 文件
let myFun = require('./js/myFunction');   // .js 后缀可以不写   内部会将其补全
console.log(myFun);

let sum = myFun.sum(1,2,3,4,5);
console.log(sum);

let avg = myFun.avg(1,2,3,4,5,6);
console.log(avg);