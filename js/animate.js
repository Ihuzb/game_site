/**
 * Created by Administrator on 2016/8/28.
 */
//任意对象 任意位置
function animate(obj, target) {
    if (obj.timer) {
        clearInterval(obj.timer);
    }
    obj.timer = setInterval(function () {
        var leader = obj.offsetLeft;
        var step = 20;
        if (leader > target) {
            step = -step;
        }
        //只有距离大于一步的时候，才跑
        var distance = Math.abs(leader - target);
        if (distance > Math.abs(step)) {
            leader = leader + step;
            obj.style.left = leader + "px";
        } else {
            //距离小于一步的话，就不跑
            clearInterval(obj.timer);
            //抱过去
            obj.style.left = target + "px";
        }

    }, 15);
}