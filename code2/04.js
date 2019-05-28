/*
    Document对象
*/
//1.连接数据库
let mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/m_data",{useNewUrlParser:true});
mongoose.connection.once("open",()=>{
    console.log("数据库连接成功");
});

//2.创建一个Schema模式对象
let Schema = mongoose.Schema;
let personSchema = new Schema({
    name:String,
    age:Number,
    sex:{
        type:String,
        default:"女"
    },
    tel:String
});

//3.创建一个Model对象
let personModel = mongoose.model("person",personSchema);

//4.创建一个文档
let person = new personModel({
    name:"hahah",
    age:88,
    sex:"你猜",
    tel:"110"
});

person.save((err,product)=>{
    if(!err){
        console.log(product);
    }else{
        throw err;
    }

})