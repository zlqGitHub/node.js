/*
    mongoose的基本使用
        参考：https://mongoosejs.com/docs/index.html
        使用原因：可以通过mongoose来操作mongodb数据库
*/
//1.引入模块  (引入模块时优先在node_modules下查找)
let mongoose = require('mongoose');

//2.建立连接
mongoose.connect('mongodb://localhost/m_data',{useNewUrlParser:true});

//3.监听状态变化   （通过connection属性来监听各种状态的变化）
var db = mongoose.connection;  //获取数据库
db.on('error', () => {
    console.log("连接失败");
});
db.once('open', function() {
    console.log("连接成功")
});
db.once('close', function() {
    console.log("关闭连接")
});
/*
    注意：(节点:29320)弃用警告:当前URL字符串解析器已弃用，将在将来的版本中删除。
    要使用新的解析器，请将选项{useNewUrlParser: true}传递给MongoClient.connect
*/




