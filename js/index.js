/**
 * Created by Administrator on 2016/8/27.
 */
window.onload = function () {
    //新手引导精灵图
    var menu = document.getElementById("menu");
    var icons = menu.getElementsByTagName("i");
    for (var i = 0; i < icons.length; i++) {
        var icon = icons[i];
        var temp = -38 * i + -5;
        icon.style.backgroundPosition = "-1181px " + temp + "px";
    }
}
$(function () {
    //视频
    $(".top .media .dj").click(function () {
        $(this).siblings(".bf").css("display", "block");
    });
    $(".top .media .bf span").click(function () {
        $(this).parent().css("display", "none");
    });
    //首页导航轮播图
    $(".dhlb .lblist").children().mouseenter(function () {
        var idx = $(this).index();
        $(this).attr("class", "on").siblings().attr("class", "");
        var imgWidth = $(".dhlb").width();
        var targrt = -idx * imgWidth;
        $(".dhlb .photo").stop().animate({"left": targrt + "px"}, 300, "swing");
    });

    //新手引导精灵图
    /*for (var i = 0; i < 6; i++) {
        var temp = -38 * i + -5;
        $(".menu ul li i").eq(i).addClass({
            "style": 'background: url("../images/index_images/jlt.png") no-repeat -1180px -5px'
        })
        console.log(i);
         console.log($(".menu ul li i"));
    }*/


    //头部白色导航栏
    $(".txli2").mouseenter(function () {
        $(this).children("img").show();
    });
    $(".txli2").mouseleave(function () {
        $(this).children("img").hide();
    });
    //  显示腾讯游戏下面的盒子
    $(".txli3").mouseenter(function () {
        $(this).children("h3").css("color", "#ff4e00")
        $(this).children(".xl").css("backgroundPosition", "-170px -134px");
        $(this).children("div").show()
    });
    //   离开 腾讯游戏那个盒子
    $(".txli3").mouseleave(function () {
        $(this).children("h3").css("color", "")
        $(this).children(".xl").css("backgroundPosition", "-150px -134px");
        $(this).children("div").hide()
    });
    //  腾讯游戏排行里面的 照片变大
    $(".rank_bom_li1").mouseenter(function () {
        $(this).children().eq(1).children().eq(1).stop().show()
        $(this).css("height", "82px")
    });
    //   腾讯游戏排行里面的 照片还原
    $(".rank_bom_li1").mouseleave(function () {
        $(this).children().eq(1).children().eq(1).stop().hide()
        $(this).css("height", "10px")
    });
    $(".new_game .new_left .menu li").mouseenter(function () {
        $(this).children("a").children("span").css("color", "#EFBD52")
    });
    $(".new_game .new_left .menu li").mouseleave(function () {
        $(this).children("a").children("span").css("color", "#dcc490")
    });

    //活动中心Tab栏切换
    $(".Tab_new ul li").mouseenter(function(){
        var idx = $(this).index();
        $(this).addClass("on").siblings().removeClass("on");
        console.log(idx);
        $(".Tab_new_Blist").children().eq(idx).addClass("Tab_new_gl").siblings().removeClass("Tab_new_gl");
    }) ;


});

