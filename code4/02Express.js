/*
    使用express后端框架来实现ejs模板引擎的渲染
        改进百度热搜列表
*/
let express = require("express");
let ejs = require("ejs");
let fs = require("fs");

let app = express();

app.get("/",(req,res) => {
    //获取数据
    getDataJson((dataJson) => {
        // console.log(dataJson);
        //使用模板殷勤设置路径
        app.set('views', './code4');
        //注册模板
        app.set("view engine","ejs");
        //数据绑定  (第一个参数：当前路径下对应的 .ejs 文件；
        // 第二个参数：要传递过去的JSON数据)
        res.render("02.ejs",{"datas":dataJson});
    });
});

app.listen(3000);

//获取JSON数据
function getDataJson(callback) {
    fs.readFile("./code4/model/list.json",(err,data) => {
        if (err){
            throw err;
            return;
        }else{
            let dataJson = JSON.parse(data);   //转换为表中JSON格式
            // console.log(dataJson);
            callback(dataJson);
        }

    });
}
