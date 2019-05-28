/*
    数据库的CRUD
    通过面向方法的方式来执行，执行的过程与mongodb语句一样
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

//4.对数据库进行增、删、改、查

//使用Model对象下create方法来插入数据
/*
    personModel.create([
        {name:"张三",age:20,tel:"12121313"},
        {name:"李四",age:22,tel:"794651"},
        {name:"王五",age:24,tel:"4856"},
        {name:"赵六",age:25,tel:"89864513"},
    ],(err) => {
        //可以通过 打印arguments来查看回调函数中想详细参数
        // console.log(arguments);
        // console.log(arguments.callee);
        // console.log(arguments.callee.toString());
        if(!err){
            console.log("数据写入成功");
        }else{
            throw err;
        }
    })
*/

//查询   Model.find()     Model.findById()   Model.findOne()
// personModel.find();   不能够直接来查询，使用的异步对象，应该有回调函数
/*
    personModel.find({},(err,docs) => {
        if(!err){
            console.log(docs);
            console.log(typeof docs);
        }else{
            throw err;
        }
    })
*/

/*
    personModel.find({},{name:1},(err,docs) => {  //只显示name字段  _id默认显示
        if(!err){
            console.log(docs);
            // console.log(typeof docs);
        }else{
            throw err;
        }
    })
*/

/*
    personModel.find({},{name:1},{skip:3,limit:5},(err,docs) => {  //只显示name字段  _id默认显示
        if(!err){
            console.log(docs);
            // console.log(typeof docs);
        }else{
            throw err;
        }
    })
*/


/*
    修改、删除
        通过调用mongoose中的Model中的方法来处理
        处理过程同可视化工具的语句
*/

//修改
/*
    personModel.updateMany({name:"zlq"},{$set:{age:10}},{multi:true},(err)=>{
        if(!err){
            console.log("修改成功");
        }else{
            throw err;
        }
    })
*/


//删除：  Model.remote()  Model.deleteMany()   Model.deleteOne()
/*
    personModel.deleteMany({name:"zlq2"},err => {
        if(!err){
            console.log("删除成功");
        }else{
            throw err;
        }
    })
*/

//统计数据库中数据数量
personModel.countDocuments({},(err,count) => {
    if(!err){
        console.log(count);
    }else{
        throw err;
    }
})





