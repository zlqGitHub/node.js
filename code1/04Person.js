//定义一个Person类即一个构造函数
 function Person(name,sex,age){
    this.name = name;
    this.sex = sex;
    this.age = age;
 }

 Person.prototype = {
    eat: function () {
        console.log(this.name+"哈哈哈哈");
    }
 }

 // exports = Person;
module.exports = Person;