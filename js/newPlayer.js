/**
 * Created by Administrator on 2016/8/28.
 */

//顶部大banner特效
$(function () {
    $("#box").mouseenter(function () {
        $("#bgBanner").stop().show(700);
    });
    $("#box").mouseleave(function () {
        $("#bgBanner").stop().hide(100);
    });
});


//等级领取
$(function () {
    //注册获取鼠标
    $("#get .img1").click(function () {
        //注册图片
        $("#zc").css("display","block");
        //30级图片
        $("#lev").css("display","none");
        //30级物品隐藏
        $("#gift30").css("display","none");
        //注册物品显示
        $("#gift").css("display","block");
        //30级文字隐藏
        $("#word2").css("display","none");
        //30级文字  定位：绝对
        $("#word2").css("position","absolute");
        //注册文字 显示
        $("#word1").css("display","block");
        //注册文字  定位：相对
        $("#word1").css("position","relative");
    });

    //30获取鼠标
    $("#get .img2").click(function () {
        //30级图片
        $("#lev").css("display","block");
        //30级物品显示
        $("#gift30").css("display","block");
        //注册物品隐藏
        $("#gift").css("display","none");
        //注册图片
        $("#zc").css("display","none");
        //30级文字显示
        $("#word2").css("display","block");
        $("#word2").css("position","relative");
        //注册文字隐藏
        $("#word1").css("display","none");
        $("#word1").css("position","absolute");
    });


});


//登录验证
$(function () {
    $("#dl").click(function () {
        $("#login").css("display","block");
        //$("#w").animate({"opacity":1},100);
        $("#w").css("display","block");

    });
});



//点X 关闭登录验证
$(function () {
    $("#closer").click(function () {
        $("#login").css("display","none");
        $("#w").css("display","none");
    });
});

//悬浮框
$(function () {
    $(".nav>.list").mouseenter(function () {
        $(".nav>.list").stop().animate({"right":20},500);
    });
    $(".nav>.list").mouseleave(function () {
        $(".nav>.list").stop().animate({"right":-90},500);
    });
});


//悬浮框缓动锚链接
$(function ()
{
    //下载锚链接
    $(".list .li1").click(function () {
        $("html,body").stop().animate({scrollTop: $("#down").offset().top}, 1000);
    });
    //领取礼包锚链接
    $(".list .li2").click(function () {
        $("html,body").stop().animate({scrollTop: $("#yi").offset().top}, 1000);
    });
    //兵法锚链接
    $(".list .li3").click(function () {
        $("html,body").stop().animate({scrollTop: $("#er").offset().top}, 1000);
    });
});


//御龙兵法高亮
$(function () {
    $(".selectlist .box .li").mouseenter(function () {
        $(this).stop().animate({"opacity":0},100);
    });

    $(".selectlist .box .li").mouseleave(function () {
        $(this).stop().animate({"opacity":0.9},100);
    });

    $(".selectlist .box a").mouseenter(function () {
        $(this).next().stop().animate({"opacity":0},100);
    });

    $(".selectlist .box a").mouseleave(function () {
        $(this).next().stop().animate({"opacity":0.9},100);
    });

});


//点击关闭兵法
$(function () {
    $(".off").click(function () {
        $(this).parent().fadeOut(500);
        $(".selectlist").fadeIn(500);
    });
    var idx = null;
    $(".selectlist li").click(function () {
        idx = $(this).index();
        $(".in").children().eq(idx).fadeIn(500);
        $(".selectlist").fadeOut(500);
    });
});



