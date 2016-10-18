/**
 * Created by Administrator on 2016/8/27.
 */
$(document).ready(function () {
    var num = 0
    $("#zhiye").mouseenter(function(){
        $("#arr1").show()
    })
    $("#zhiye").mouseleave(function(){
        $("#arr1").hide()
    })
    //职业列表点击右键
    $("#right1").click(function () {
        if (num === ($("#zhiye>ul").children().length) - 1) {
            num = 0
        } else {
            num++
        }
        $("#zhiye>ul").children().eq(num).stop().fadeIn(400).siblings().hide()
        //放置第一张被选中
        window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
        $("#zhiye>.zy>.xuanze").children().eq(num).attr("class", "one one" + num).siblings().attr("class", "one");
        $("#zhiye .jianjie").children().eq(num).show().siblings().hide()
        $("#zhiye #jineng").children().eq(num).show().siblings().hide()
    })
    //职业列表点击左键
    $("#left1").click(function () {
        if (num === 0) {
            num = $("#zhiye>ul").children().length - 1
        } else {
            num--
        }
        $("#zhiye>ul").children().eq(num).stop().fadeIn(400).siblings().hide()
        $("#zhiye>.zy>.xuanze").children().eq(num).attr("class", "one one" + num).siblings().attr("class", "one");
        $("#zhiye .jianjie").children().eq(num).show().siblings().hide()
        $("#zhiye #jineng").children().eq(num).show().siblings().hide()
    })
    //职业名称跟随移动并且图片跟随移动
    $("#zhiye>.zy>.xuanze").children().click(function () {
        var idx = $(this).index()
        $("#zhiye>ul").children().eq(idx).fadeIn(500).siblings().hide()
        $(this).attr("class", "one one" + idx).siblings().attr("class", "one")
        $("#zhiye .jianjie").children().eq(idx).show().siblings().hide()
        $("#zhiye #jineng").children().eq(idx).show().siblings().hide()
        //$("#zhiye #imagee").children().eq(idx).fadeIn()
    })
    //鼠标放置点亮技能 羽扇
    $("#zhiye>.foot1 .shen1-ji>ul").children().mouseenter(function () {
        var idx = $(this).index()
        $(this).attr("class", "shenji shenji" + idx).siblings().attr("class", "shenji")
        $("#zhiye>.foot1 .shen1-jitext>ul").children().eq(idx).show().siblings().hide()
    })
    //鼠标放置点亮技能 神弓
    $("#zhiye>.foot1 .yu1-ji>ul").children().mouseenter(function () {
        var idx = $(this).index()
        $(this).attr("class", "yuji yuji" + idx).siblings().attr("class", "yuji")
        $("#zhiye>.foot1 .yu1-jitext>ul").children().eq(idx).show().siblings().hide()
    })
    //鼠标放置点亮技能 重剑
    $("#zhiye>.foot1 .zhong1-ji>ul").children().mouseenter(function () {
        var idx = $(this).index()
        $(this).attr("class", "zhongji zhongji" + idx).siblings().attr("class", "zhongji")
        $("#zhiye>.foot1 .zhong1-jitext>ul").children().eq(idx).show().siblings().hide()
    })
    //鼠标放置点亮技能 霸刀
    $("#zhiye>.foot1 .ba1-ji>ul").children().mouseenter(function () {
        var idx = $(this).index()
        $(this).addClass("ba ba" + idx).siblings().attr("class", "ba")
        $("#zhiye>.foot1 .ba1-jitext>ul").children().eq(idx).show().siblings().hide()
    })

})





