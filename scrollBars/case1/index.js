$(function () {
    let $parent = $(".parent");
    let $child = $(".child");
    let $box = $(".box");

    $child.on("mousedown",function (event) {
        event = event || window.event;
        let clientX = event.clientX;
        let offsetLeft = $(this).offset().left;
        let ol = clientX - offsetLeft;

        /*
            结合原生js实现
            $(document)[0].onmousemove = function (event) {
                event = event || window.event;
                let left = event.clientX - ol;
                $child.css({"left":left})
            }
            $(document)[0].onmouseup = function (event) {
                $(document)[0].onmousemove = null;
                $(document)[0].onmouseup = null;
            }
        */
        //$(document)将document转变为一个jQuery对象
        $(document).on("mousemove",function (event) {
            event = event || window.event;
            let clientX = event.clientX;
            let left = event.clientX - ol;
            let size = event.clientX;
            if(event.clientX -ol < 0 ){
                left = 0;
                size = 0;
            }
            if(left > $parent.width() - $child.width()){
                left = $parent.width() - $child.width();
                size = $parent.width();
            }

            $child.css({"left":left})
            $box.css({"width": size,"height":size});
        })
        //通过 off 来删除元素的事件
        $(document).on("mouseup",function () {
            $(document).off();
        })

    })


})