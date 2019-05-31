var express = require("express");
var router = express.Router();  //创建一个新的路由对象
let util = require("./../util");

router.get("/",function (req,res,next) {
    console.log(req.url);
    res.render("login",{title: "登录"});
});

router.post("/",function (req,res,next) {
    // console.log(req.body);
    //获取登录的数据
    let userName = req.userName;
    let loginPwd = req.loginPwd;

    let loginUser = {
        userName,
        loginPwd
    }

    //判断是否注册过
    let user = util.isReg(loginUser,util.users);

    if(null !== user && undefined !== user){
        //判断其密码是否正确
        if(user.loginPwd === loginPwd){
            res.redirect("/chat");
        }else{
            res.send("密码错误！");
        }
    }else{
        res.send("该用户还没有注册");
    }

});

module.exports = router;
