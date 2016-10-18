/**
 * Created by Administrator on 2016/8/27.
 */
window.onload = function () {
    //视频
    var media = document.getElementById("media");
    var dj = media.children[0];
    var bf = media.children[1];
    var gb = bf.children[1];
    dj.onclick = function () {
        bf.style.display = "block";
    }
    gb.onclick = function () {
        bf.style.display = "none";
    }


    //首页导航轮播图
    var dhlb = document.getElementById("dhlb");
    var photo = dhlb.children[0];
    //列表
    var list = dhlb.children[1];
    var ulList = list.children;

    var imgWidth = dhlb.offsetWidth;

    for (var i = 0; i < ulList.length; i++) {
        var ulli = ulList[i];
        ulli.index = i;
        ulli.onmouseover = function () {
            for (var j = 0; j < ulList.length; j++) {
                ulList[j].className = "";
            }
            this.className = "on";
            var idx = this.index;
            var target = -idx * imgWidth;
            animate(photo, target)

        };
    }
    ;

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
    //头部白色导航栏
    $(".txli2").mouseenter(function () {
        $(this).children("img").show();
    });
    $(".txli2").mouseleave(function () {
        $(this).children("img").hide();
    });
    //  显示腾讯游戏下面的盒子
    $(".txli3").mouseenter(function(){
        $(this).children("h3").css("color","#ff4e00")
        $(this).children(".xl").css("backgroundPosition","-170px -134px");
        $(this).children("div").show()
    });
    //   离开 腾讯游戏那个盒子
    $(".txli3").mouseleave(function(){
        $(this).children("h3").css("color","")
        $(this).children(".xl").css("backgroundPosition","-150px -134px");
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

    $(".new_game .new_left .menu li").mouseenter(function(){
        $(this).children("a").children("span").css("color","#EFBD52")
    });
    $(".new_game .new_left .menu li").mouseleave(function(){
        $(this).children("a").children("span").css("color","#dcc490")
    });




});

