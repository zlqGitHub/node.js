let express = require("express");
let router = express.Router();
let util = require("./../util");

router.get("/",function (req,res,next) {
    // console.log(req.url);
    res.render("register",{"title":"注册"});
});


router.post("/",function (req,res,next) {
    //可以通过req.body来获取用户传递过来的参数
    // console.log(req.body);     //{ userName: '张利强', loginPwd: '123456' }
    let userName = req.body.userName;
    let loginPwd = req.body.loginPwd;
    let userObj = {
        userName,
        loginPwd
    };
    console.log(userObj);
    let user = util.isReg(userObj,util.users);
    console.log(user);

    if(user === undefined || null === user){
        res.send("用户已注册");
    }else{
        res.redirect("/login");
    }

});


module.exports = router;




