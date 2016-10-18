/**
 * Created by Administrator on 2016/8/29.
 */
$(function () {
    $("#guojia>.guoming>.ming>ul>li").click(function () {
        var idx = $(this).index()
        $(this).attr("class", "two two" + idx).siblings().attr("class", "two")
        $("#guojia>.guotu>.tu-xiu>ul>li").eq(idx).fadeIn(100).siblings().hide()
        $("#guojia>.guofoot>div").eq(idx).attr("style", "display: block").siblings().attr("style", "")
    })
})
