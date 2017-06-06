/**
 * 辅助函数，主要是简单的封装下一些工具函数之类的，给后面的学习提供便捷
 * 小伙子起航了。
 */

window.utils = {};


/**
 * [captureMouse description] 获取鼠标的坐标位置
 * @param  {[type]} element canvas画布
 * @return {[type]} mouse   鼠标在画布中的坐标
 */
window.utils.captureMouse = function(element) {
        var mouse = {
                x: 0,
                y: 0
            }
            // 为元素绑定鼠标事件
        element.addEventListener('mousemove', function(event) {
            var x, y;

            // 获取鼠标位于当前屏幕的位置
            if (event.pageX || event.pageY) {
                x = event.pageX;
                y = event.pageY;
            } else {
                x = event.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
                y = event.clientY + document.body.scrollTop + document.documentElement.scrollTop;
            }

            //当前鼠标的位置减去画布的偏移量就是当前鼠标在画布上面的位置
            x -= element.offsetLeft;
            y -= element.offsetTop;

            mouse.x = x;
            mouse.y = y;

        }, false);

        return mouse;
    }
    /**
     * 获取触摸点的位置坐标
     * @param  {[type]} element 画布
     * @return {[type]} touch   触摸点的相关信息       
     */
window.utils.captureTouch = function(element) {

    var touch = {
        x: null,
        y: null,
        isPressed: false,
        event: null
    }

    var bodyScrollTop = document.body.scrollTop;
    var bdoyScrollLeft = document.body.scrollLeft;
    var elementScrollTop = document.documentElement.scrollTop;
    var elementScrollLeft = document.documentElement.scrollLeft;
    var offsetLeft = element.offsetLeft;
    var offsetTop = element.offsetTop;


    // 绑定touchstart事件
    element.addEventListener('touchstart', function(event) {

        touch.isPressed = true;
        touch.event = event;
    }, false);

    // 绑定touchend事件
    element.addEventListener('touchend', function(event) {

        touch.isPressed = false;
        touch.event = event;
        touch.x = null;
        touch.y = null;
    }, false);

    // 绑定touchmove事件
    element.addEventListener('touchmove', function(event) {
        var x, y,
            touchEvent = event.touches[0]; // 单指触摸

        if (touchEvent.pageX || touchEvent.pageY) {
            x = touchEvent.pageX;
            y = touchEvent.pageY;
        } else {
            x = touchEvent.clientX + bdoyScrollLeft + elementScrollLeft;
            y = touchEvent.clientY + bodyScrollTop + elementScrollTop;
        }
        // 减去画布的偏移量 得到在画布上面的坐标
        x -= offsetLeft;
        y -= offsetTop;

        touch.x = x;
        touch.y = y;
        touch.event = event;

    }, false);

    return touch;
}
/**
 * 格式化颜色
 * @param  {[type]} color    [description]
 * @param  {[type]} toNumber [description]
 * @return {[type]}          [description]
 */
window.utils.parseColor = function (color, toNumber) {
  if (toNumber === true) {
    if (typeof color === 'number') {
      return (color | 0); //chop off decimal
    }
    if (typeof color === 'string' && color[0] === '#') {
      color = color.slice(1);
    }
    return window.parseInt(color, 16);
  } else {
    if (typeof color === 'number') {
      color = '#' + ('00000' + (color | 0).toString(16)).substr(-6); //pad
    }
    return color;
  }
};


// 动画循环
if (!window.requestAnimationFrame) {
    window.requestAnimationFrame = (window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(callback) {
        return window.setTimeout(callback, 17 /*~ 1000/60*/ );
    });
}

//动画循环取消
if (!window.cancelAnimationFrame) {
    window.cancelAnimationFrame = (window.cancelRequestAnimationFrame ||
        window.webkitCancelAnimationFrame || window.webkitCancelRequestAnimationFrame ||
        window.mozCancelAnimationFrame || window.mozCancelRequestAnimationFrame ||
        window.msCancelAnimationFrame || window.msCancelRequestAnimationFrame ||
        window.oCancelAnimationFrame || window.oCancelRequestAnimationFrame ||
        window.clearTimeout);
}
