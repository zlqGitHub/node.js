/*
    node.js中 Buffer 的认识
        node中的buffer是一个二进制容器，专门用于node的数据存放
        Buffer比较特殊，在node下可以直接拿来使用,node自带Buffer,不需要引入
        00-ff
        0-255
        00000000-11111111
        8bit = 1B
        1KB = 1024B
        1MB = 1024KB
        1GB = 1024MB
        1TB = 1024GB
*/

/*
    传统的Buffer的使用（其使用情况类似于数组）
    let buffer = new Buffer(10);
    console.log(buffer);
    已被废除，其稳定性为0，具有安全隐患
*/

// let str = "abcdefg";
let str = "张利强";
let buffer = Buffer.from(str);
console.log(buffer);
console.log(buffer.length);
console.log(str.length);

console.log("************************");

/*
    注意：英文或数字时，字符串和buffer的长度是一样的
          中文时，buffer的一个中文时三个字节，str的一个中文是一个字节
*/


//2.Buffer.alloc(size[, fill[, encoding]])
/*
    使用注意事项：第一个 参数size必须给出
*/

let buffer2 = Buffer.alloc(10);
buffer2[0] = 20;
// console.log(buffer2[0]);
buffer2[1] = 0xff;     //0x 开头代表16进制
// console.log(buffer2[1])
buffer2[20] = 32;

buffer2.forEach((item , index) => {
    console.log(index + " : " + item);
})
