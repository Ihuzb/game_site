/**
 * Created by Administrator on 2016/8/28.
 */
$(function () {
    var flag = true
    $(window).scroll(function () {
        if (flag && $(this).scrollTop() > 750) {
            $("#gu").stop().animate({
                right: "-75px"
            })
            $("#gu .ding3").stop().animate({
                opacity: "0"
            })
            $("#gu>div").mouseenter(function () {
                $(this).stop().animate({
                    "margin-left": "-85px",
                })
                $("#arr1").hide()
                $("#arr").hide()
            })
            $("#gu>div").mouseleave(function () {
                $(this).stop().animate({
                    "margin-left": "0px",
                })
                $("#arr1").fadeIn()
                $("#arr").fadeIn()
                //缩进后鼠标放置改变背景颜色
                $(this).removeClass("ding11")
            })
            $("#gu").mouseenter(function () {
                $("#arr1").show()
                $("#arr").show()
            })
            flag = false
        }
        if (flag === false && $(this).scrollTop() < 200) {
            $("#gu").animate({
                right: "22px"
            })
            $("#gu>div").off("mouseenter");
            $("#gu .ding3").stop().animate({
                opacity: "1"
            })

            //再次展开，鼠标放置改变背景色
            $("#gu>div").mouseenter(function () {
                $("#arr").hide()
                var idx = $(this).index()
                if (idx === 6) {
                    $(this).addClass("")
                } else {
                    $(this).addClass("ding11")
                }
            })
            $("#gu>div").mouseleave(function () {
                $(this).removeClass("ding11")
                $("#arr").fadeIn()
            })
            flag = true
        }
    });

    if (flag) {
        //在未缩进前，鼠标放置改变背景色
        $("#gu>div").mouseenter(function () {
            var idx = $(this).index()
            if (idx === 6) {
                $(this).addClass("")
            } else {
                $(this).addClass("ding11")
            }
        })
        $("#gu>div").mouseleave(function () {
            $(this).removeClass("ding11")
        })
        var height = [0, 917, 1396, 1939, 2800,0]
        $("#gu>div").click(function () {
            var idx = $(this).index()
            $("html,body").stop().animate({scrollTop: height[idx]}, 1000)
            $(this).stop().animate({
                "margin-left": "0px",
            })
        })
    }


})
