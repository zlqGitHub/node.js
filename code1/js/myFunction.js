/*
    编写独立模块的js文件，并将其暴露出去
*/

//求和
let sum = function(...numbers) {    //使用延展字符串作为参数与
    let result = 0;
    numbers.forEach((item) => {
        result += item;
    })
    return result;
}

//求平均
let avg = function (...numbers) {
    let result = 0;
    numbers.forEach((item) => {
        result += item;
    })
    return result/numbers.length;
}

//将方法暴露出去
exports.sum = sum;
exports.avg = avg;