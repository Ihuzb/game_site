function animeat(obj,json,fn){

    if(obj.timer){
        clearInterval(obj.timer);
    }

    obj.timer=setInterval(function(){

        var flag=true;

        for(var k in json){

            var leader=getstyle(obj,k);
            leader=parseInt(leader)||0;
            var stmp=(json[k]-leader)/10;
            stmp=stmp>0? Math.ceil(stmp):Math.floor(stmp);

            leader=leader+stmp;
            obj.style[k]=leader+"px";

            if(leader!=json[k]){
                flag=false;
            }
        }
        if(flag){
            clearInterval(obj.timer);

            if(fn){
                fn()
            }
        }

    },15)
}

function getstyle(obj,attr){
    if(window.getComputedStyle){
        return window.getComputedStyle(obj,null)[attr];
    }else{
        return obj.currentStyle[attr];
    }
}