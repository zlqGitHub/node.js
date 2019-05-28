/*
    通过mongoose来操作mongodb，写入数据
    需要知道三个重要的对象
        Schemas：模式对象
        Models：集合中所有文档的表示，相当于mongodb中的集合collection
        Documnets：表示具体的文档
*/
//1.建立连接   (端口号默认是27017，可以省略不写，但是更改之后，一定要将端口号添加到后面)
let mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/m_data",{useNewUrlParser:true});

//2.建立连接
let db = mongoose.connection;   //得到了数据库
// console.log(db);
mongoose.connection.once("open",(err)=>{
    console.log("数据库连接成功");
});

//3.创建一个Schema模式对象
let Schemas = mongoose.Schema;
let personSchema = new Schemas({
    name:String,
    age:Number,
    sex:{
        type:String,
        default:"男"
    },
    tel:String
});

//4.创建一个Model对象   注意：如果集合名称是单数，会自动转为为负数格式  person -> people
let personModel = mongoose.model("person",personSchema);

//5.插入文档(符合node的规范，异步处理，通过回调函数来处理)
personModel.create({
    name:"zlq",
    age:20,
    tel:"15513268481"
},err=>{
    if(!err){
        console.log("插入成功");
    }else{
        throw err;
    }
});

personModel.create({
    name:"zlq2",
    age:22,
    tel:"15513268481"
},err=>{
    if(!err){
        console.log("插入成功");
    }else{
        throw err;
    }
});


