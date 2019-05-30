/*
    通过Express框架来操作模板引擎ejs
*/

let express = require("express");
let ejs = require("ejs");

let app = express();

//使用模板殷勤
// 设置资源路径
app.set('views', './code5/views')
// 注册模板殷勤
app.set('view engine', 'ejs')

app.get("/",(req,res) => {
    //第二个参数可是传递一些JSON数据
    res.render("index",{"lists":["张利强",18,"男"]})
});

app.listen(3000);
