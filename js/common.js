/**
 * Created by admin on 2016/8/23.
 */


//1.获取标签的内容（兼容所有浏览器）
function getInnerText(element) {
    //能力检测(先判断如果这个能力有这个)
    if(element.innerText) {
        //说明支持innerText
        return element.innerText;
    }else {
        //说明不支持innerText
        return element.textContent;
    }
}

//2.设置内容的方法（兼容性问题）
function setInnerText(element, value) {
    //能力检测
    if(element.innerText) {
        element.innerText = value;
    }else {
        element.textContent = value;
    }
}


//3.获取下一个兄弟元素
function getNextElement(element){
    //能力检测
    if(element.nextElementSibling){
        //如果能进来，说明支持nextElementSibling
        return element.nextElementSibling;
    }
    else{
        //如果执行到这里，说明不支持nextElementSibling
        //IE678
        //找第一个子节点
        var node=element.nextSibling;
        while(node&&node.nodeType!=1){
            node=node.nextSibling;
        }
        return node;
    }
}


//4.获取上一个兄弟元素
function getPreviousElement(element){
    //能力检测
    if(element.previousElementSibling){
        //如果能进来，说明支持previousElementSibling
        return element.previousElementSibling;
    }else{
        var node=element.previousSibling;
        while(node&&node.nodeType!=1){
            //如果执行到这里，说明不支持previousElementSibling
            //IE678
            //找第一个子节点
            node=node.previousSibling;
        }
        return node;
    }
}


//5.获取节点的第一个子元素
function getFirstElement(element){
    //能力检测
    if(element.firstElementChild){
        //如果能进来，说明支持firstElementChild
        return element.firstElementChild;
    }else{
        //如果执行到这里，说明不支持firstElementChild
        //IE678
        //找第一个子节点
        var node=element.firstChild;
        while(node&&node.nodeType!=1){
            node=node.nextSibling;
        }
        return node;
    }
}


//6.获取节点的最后一个子元素
function getLastElement(element){
    //能力检测
    if(element.lastElementChild){
        //如果能进来，说明支持lastElementChild
        element.lastElementChild;
    }else{
        //如果执行到这里，说明不支持lastElementChild
        //IE678
        //找最后一个子节点
        var node=element.lastChild;
        //如果node不存在，或者node是元素的话
        while(node&&node.nodeType!=1){
            node=node.previousSibling;
        }
        return node;
    }
}


//7.封装ID函数
//function $(id){
//    return document.getElementById(id);
//}



//8.封装自己的class类 获取指定ID名下的classname
function getClassName(classname,id){
    //如果浏览器兼容
    if(document.getElementsByClassName){

        if(id){
            var ID=document.getElementById(id);
            return ID.getElementsByClassName(classname);
        }
        //如果不是获取id下的classname
        return document.getElementsByClassName(classname);
    }

    //如果不兼容
    //如果是获取ID下的classname
    if(id){
        var ID=document.getElementById(id);
        var cls=ID.getElementsByTagName("*");
    }else{
        //如果不是获取id下的classname
        var cls=document.getElementsByTagName("*");
    }
    var arr=[];
    for(var i=0;i<cls.length;i++){
        var ary=cls[i].className.split(" ");//分割类名转化为数组
        for(var j=0;j<ary.length;j++){
            if(ary[j]==classname){
                arr.push(cls[i]);//满足类名div
            }
        }
    }
    return arr;
}



//9.获取当前时间
function getDate(date){
    var year=date.getFullYear();
    var month=date.getMonth()+1;
    if(month<10){
        month="0"+month;
    }
    var dat=date.getDate();
    if(dat<10){
        month="0"+dat;
    }
    var hour=date.getHours();
    if(hour<10){
        hour="0"+hour;
    }
    var minute=date.getMinutes();
    if(minute<10){
        minute="0"+minute;
    }
    var second=date.getSeconds();
    if(second<10){
        second="0"+second;
    }
    return year+"-"+month+"-"+dat+" "+hour+":"+
        minute+":"+second;
}


//10.匀速动画 让盒子可移动到目标位置
function animate1(obj,target){

    if(obj.timer){
        clearInterval(obj.timer);
    }
    obj.timer = setInterval(function () {
        var leader = obj.offsetLeft;
        var step = 9;
        //step有方向 如果想要往回跑时，目标位置target<离开距离leader
        if(leader>target){//可是此时与下面else时条件发生冲突
            step=-step;
        }

        if(Math.abs(leader-target)>Math.abs(step)){
            leader = leader + step;
            obj.style.left = leader + "px";
        }
        else{
            clearInterval(obj.timer);
            //同时把盒子抱到目的地
            obj.style.left=target+"px";
        }
    }, 15)
}


//11.缓动动画函数封装
function animate2(obj,json,fn){

    if(obj.timer){
        clearInterval(obj.timer);
    }

    obj.timer=setInterval(function(){

        var flag=true;

        for(var k in json){

            if(k=="opacity"){
                var attr=k;
                var target=json[k]*1000;
                var leader=getStyle(obj,attr)*1000;
                leader=parseInt(leader);
                var step=(target-leader)/10;
                step=step>0?Math.ceil(step):Math.floor(step);
                leader=leader+step;
                obj.style[attr]=leader/1000;
                if(leader!=target){
                    flag=false;
                }
            }
            else if(k=="zIndex"){
                obj.style[k]=json[k];
            }
            else{

                var attr=k;
                var target=json[k];
                var leader=getStyle(obj,attr);
                leader=parseInt(leader)||0;
                var step=(target-leader)/10;
                step=step>0?Math.ceil(step):Math.floor(step);
                leader=leader+step;
                obj.style[attr]=leader+"px";
                if(leader!=target){
                    flag=false;
                }
            }

        }

        if(flag){
            clearInterval(obj.timer);
            //执行完动画后加函数
            if(fn){
                fn();
            }
        }
    },15)


}

//12.获取任意对象属性
function getStyle(obj,attr){
    //能力检测
    //如果支持getComputedStyle，就可以直接
    if(window.getComputedStyle) {
        return window.getComputedStyle(obj, null)[attr];
    }else {
        return obj.currentStyle[attr];
    }
}

//13.获取盒子内容被卷起的高度
function scroll(){
    return {
        top:window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0,
        left:window.pageXOffset ||document.documentElement.scrollLeft ||document.body.scrollLeft ||0,
    }
}

//14.获得网页可视宽高
function client(){
    return{
        width:window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth||0,
        height:window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight||0,
    }
}

//15.获取事件对象
function getEvent(event) {
    return event || window.event;
}

//16.获取pageX，兼容IE678
function getPageX(event){
    if(event.pageX){
        return event.pageX;
    }else{
        return event.clientX+scroll().left;
    }
}

//17.获取pageY，兼容IE678
function getPageY(event){
    if(event.pageY){
        return event.pageY;
    }else{
        return event.clientY+scroll().top;
    }
}


//18.阻止事件冒泡
function stopPropagation(event) {
    if(event.stopPropagation) {
        event.stopPropagation();
    }else {
        event.cancelBubble = true;
    }
}

//19.
function getTarget(event) {
    return event.target || event.srcElement;
}

//20.
//任意对象注册任意事件
function addEvent(element,type,fn){
    if(element.addEventListener){
        element.addEventListener(type,fn,false);
    }else if(element.attachEvent){
        element.attachEvent("on"+type,fn);
    }else{
        element["on"+type]=fn;
    }
}

//21.
//移除任意对象的任意事件
function removeEvent(element,type,fn){
    if(element.removeEventListener){
        element.removeEventListener(type,fn,false);
    }else if(element.detachEvent){
        element.detachEvent("on"+type,fn);
    }else{
        element["on"+type]=null;
    }
}
