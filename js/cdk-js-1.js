/**
 * Created by admin on 2016/8/27.
 */
window.onload = function () {
    //获取元素
    var cdk_dick = document.getElementById("cdk_dick");
    var cdk_right = document.getElementById("cdk_right");
    var cdk_wrong = document.getElementById("cdk_wrong");
    var cdk_submit = document.getElementById("cdk_submit");
    var cdk_inp1 = document.getElementById("cdk_inp1");
    var datas = [
        "omvq", "ynyn", "mwhn", "nmnw", "gxet", "zqjs", "hvnn", "nhmx", "htzd", "ttdz"
    ];


    //判断未刷新前字符串是否相等
    cdk_submit.onclick = function () {
        think(datas[0]);
    }
    //注册鼠标点击闪亮事件
    cdk_submit.onmousedown = function () {
        this.style.opacity = "0.3";
    }
    cdk_submit.onmouseup = function () {
        this.style.opacity = "1";
    }

    //封装重复的判断函数供调用
    function think(date) {
        if (cdk_inp1.value.toLowerCase() == date.toLowerCase()) {
            cdk_right.style.display = "block";
        } else {
            cdk_wrong.style.display = "block";
        }
    }

    //给a标签注册点击事件
    cdk_dick.onclick = function () {
        //点击换图时清空内容 正确 错误
        cdk_inp1.value = "";
        cdk_wrong.style.display = "none";
        cdk_right.style.display = "none";

        //获得随机数作为索引
        var dex = parseInt(Math.random() * 10);
        getPreviousElement(this).children[0].src = "gift/getimage" + dex + ".jpg";

        //点击提交验证
        cdk_submit.onclick = function () {
            think(datas[dex]);
        }
        //注册鼠标点击闪亮事件
        cdk_submit.onmousedown = function () {
            this.style.opacity = "0.3";
        }
        cdk_submit.onmouseup = function () {
            this.style.opacity = "1";
        }
    }

    //点击回车提交
    document.onkeydown = function (event) {
        event = event || window.event;
        //console.log(event.keyCode);
        //判断按下键是否与回车键的键盘码相等
        if (event.keyCode == 13) {
            cdk_submit.click();
        }
    }

    //鼠标移上下划线出现
    cdk_dick.onmouseover = function () {
        this.style.textDecoration = "underline";
    }
    //鼠标离开下划线消失
    cdk_dick.onmouseout = function () {
        this.style.textDecoration = "none";
    }


    //微信登录
    var cdk_weixin = document.getElementById("cdk_weixin");
    var cdk_close = document.getElementById("cdk_close");
    var inputWei = document.getElementById("inputWei");
    var cdk_outbox =document.getElementById("cdk_outbox");
    //点击微信 背景变色 弹出登录框
    inputWei.onclick = function () {
        cdk_outbox.style.opacity = "0.5";
        cdk_weixin.style.display = "block";
        cdk_outbox.style.display= "block";

    }
    //点击叉号关闭
    cdk_close.onclick = function () {
        cdk_weixin.style.display = "none";
        cdk_outbox.style.opacity = "1";
        cdk_outbox.style.display= "none";
    }
    //最外层box
    cdk_outbox.style.width = "document.body.width";
    cdk_outbox.style.height = "document.body.height";

    //手机登录
    var denglu = document.getElementById("denglu");
    var qqewm = document.getElementById("qqewm");
    var qqshouji = document.getElementById("qqshouji");
    var anmiu = document.getElementById("anmiu");
    var inputShou = document.getElementById("inputShou");

    qqewm.onmouseenter = function () {
        qqshouji.style.display = "block";
        animeat(this, {"margin-left": -40});
    }
    qqewm.onmouseleave = function () {
        qqshouji.style.display = "none";
        animeat(this, {"margin-left": 0});
    }

    anmiu.onclick = function () {
        denglu.style.display = "none";
        cdk_outbox.style.opacity = "1";
        cdk_outbox.style.display= "none";
    }
    inputShou.onclick = function () {
        denglu.style.display = "block";
        cdk_outbox.style.opacity = "0.5";
        cdk_outbox.style.display= "block";

    }
}


