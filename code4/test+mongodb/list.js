/*
    在mongodb数据中获取到数据，并渲染到页面中去
*/
let http = require("http");
let fs = require("fs");
let mongoose = require("mongoose");
let ejs = require("ejs");

//连接数据库
mongoose.connect("mongodb://localhost/m_data",{useNewUrlParser:true});
mongoose.connection.once("open",(err) => {
    console.log("数据库连接成功");
});
//创建一个Schema对象
let Schema = mongoose.Schema;
let schema = new Schema({
    title:String,
    count:Number,
    up:Number
});
//创建一个Model对象
let model = mongoose.model("list",schema);


http.createServer((req,res) => {
    getData((docs) => {
        console.log(docs);
        let lists = {"lists":docs};
        // console.log(JSON.stringify(lists));

        /*
        将读到的数据写入文件中,从数据库中读出的数据无需写入文件中，可以直接拿来使用
        fs.writeFile("./code4/test+mongodb/model/lists.json",JSON.stringify(lists),{"flag":"w"},(err) => {
            if(err)  throw err;
            console.log("数据写入成功");
        })
        */

        fs.readFile("./code4/test+mongodb/list.ejs",(err,data) => {
            if(err){
                res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
                res.write("<h1>404,页面找不到。</h1>")
                throw err;
            }else{
                let objList = data.toString();    //注意：取到都是模板字符串，不要使用 toString();
                // console.log(objList);

                //实例化模板
                // let tem = ejs.render(objList,{"lists":lists});

                let tem = ejs.render(objList,{"lists":docs});   //ejs传递数据

                res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
                res.end(tem);   //注意：此处的参数一定是模板与数据绑定之后的模板
            }

        })

    })
}).listen(80,"127.0.0.1");

//从数据库中获取数据
function getData(callback) {
    //1.向数据库中添加数据
    /*model.create(  [
        {"title": "巴啦啦小魔仙，你喜欢吗？","count": 135314,"up": 1},
        {"title": "中北大学烽火里诞生。。。","count": 999888,"up": 0},
        {"title": "太原市理工大学是重点大学","count": 135314,"up": 1},
        {"title": "巴啦啦小魔仙，你喜欢吗？","count": 135314,"up": 0},
        {"title": "巴啦啦小魔仙，你喜欢吗？","count": 135314,"up": 1},
        {"title": "今天天气不错，适合出去游玩。","count": 135314,"up": 1}
    ],(err) => {
        if (!err){
            console.log("数据写入成功");
        } else{
            throw err;
        }
    });*/

    //查询数据库中的数据
    model.find({},(err,docs)=>{
        if(!err){
            callback(docs);
        }else{
            throw err;
        }
    });

}


