/*
    路由的配置及参数的使用
*/

let express = require("express");

let app = express();

//含有参数的请求  http://127.0.0.1:3000/zlq/20
app.get("/:name/:age",(req,res) => {
    // res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});   使用express框架时不需要在配置头部
    // res.send("在");
    // res.send("在干嘛");
    // res.status(200).send("嘛也不干");

    console.log(req.params);    //{ name: 'zlq', age: '20' }
    console.log(req.params.name);
    console.log(req.params["age"]);

    res.status(404).send("那咋办");

});

app.listen(3000,"127.0.0.1");

