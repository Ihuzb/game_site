/**
 * Created by Administrator on 2016/8/27.
 */
//创建底部菱形
$(function () {
    for (var i = 0; i < $("#box>ul>li").length; i++) {
        //根据图片数量创建li元素，并添加上菱形样式
        $("#box .wei").append($("<li></li>").addClass("ling"))
    }
    //使第一个菱形保持选中样式
    $("#box .wei>li").eq(0).addClass("ling1")
    //克隆第一张图片
    var $img = $("#box>ul>li").eq(0).clone()
    //添加到所有图片最后
    $("#box>ul").append($img)
    //鼠标放置在菱形上变换样式,并且切换到响应图片
    var imgW = $("#box>ul>li").eq(0).width()
    $("#box .wei>li").mouseenter(function () {
        $(this).addClass("ling1").siblings().removeClass("ling1")
        var idx = $(this).index()
        var imgW = $("#box>ul>li").eq(0).width()
        $("#box>ul").stop().animate({
            left: -idx * imgW + "px"
        }, 500)
        num = idx
        gen = idx
    })
    var num = 0
    var gen = 0
    //点击右键切换图片
    $("#box #right").click(function () {
        if (num == $("#box>ul>li").length - 1) {
            num = 0
            $("#box>ul").css("left", -num * imgW + "px")
        }
        num++
        $("#box>ul").stop().animate({
            left: -num * imgW + "px"
        }, 1000)
        if (gen == $("#box .wei>li").length - 1) {
            gen = 0
        } else {
            gen++
        }
        $("#box .wei>li").eq(gen).addClass("ling1").siblings().removeClass("ling1")
    })
    //点击左键切换图片
    $("#box #left").click(function () {
        if (num == 0) {
            num = $("#box>ul>li").length - 1
            $("#box>ul").css("left", -num * imgW + "px")
        }
        num--
        $("#box>ul").stop().animate({
            left: -num * imgW + "px"
        }, 1000)
        if (gen == 0) {
            gen = $("#box .wei>li").length - 1
        } else {
            gen--
        }
        $("#box .wei>li").eq(gen).addClass("ling1").siblings().removeClass("ling1")
    })
    //鼠标放置显示左右箭头
    var timer = null
    $(".tese").mouseenter(function () {
        $("#arr").show()
        clearInterval(timer)
    })
    $(".tese").mouseleave(function () {
        $("#arr").hide()
        timer = setInterval(function () {
            $("#box #right").click()
        }, 2000)
    })
    timer = setInterval(function () {
        $("#box #right").click()
    }, 2000)
})




