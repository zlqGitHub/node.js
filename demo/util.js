/*
    工具包
    封装了一些公用方法、变量
*/

//判断当前信息是否已注册   假定userName是唯一的
function isReg(userObj,users) {
    for(let i = 0; i < users.length; i++){
        if(userObj.userName === users[i].userName){
            return users[i];
        }
    }
    users.push(userObj);
}
let users = [];  //保存注册用户的信息

exports.isReg = isReg;  //将方法暴露出去
exports.users = users;  //将保存用户信息的数组传递出去