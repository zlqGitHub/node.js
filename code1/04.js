// 导出资源

/*
    exports.name = "zlq";
    exports.age = 18;
    exports.obj = {
        "name":"张三",
        "age":20,
    }
*/

/*
    exports = {    另一模块中获取不到
        "name":"张三",
        "age":20,
    }
*/

module.exports = {
    'name':"zlq",
    'age':18,
}

/*
    exports、module.exports的主要区别：
        exports只能通过 .语法 来向外暴露内部语法，   exports.*** = ***;
        module.exports 即可以通过 .语法   也可以通过直接赋值一个对象   module.exports = {***:***};

    二者之间的关系：
        let md = new Object();
        md.exports = new Object({});
        let exports = md.exports;
        exports.name = "***";
            这样操作之后，exports 的本质发生了变化，不在是module.exports对象了
*/