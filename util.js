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
window.utils.captureMouse = function(element){
	var mouse = {
		x: 0,
		y: 0
	}
	// 为元素绑定鼠标事件
	element.addEventListener('mousemove', function(event){
		var x,y;

		// 获取鼠标位于当前屏幕的位置
		if(event.pageX || event.pageY){
			x = event.pageX;
			y = event.pageY; 
		}else{
			x = event.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
			y = event.clientY + document.body.scrollTop + document.documentElement.scrollTop;
		}

		//当前鼠标的位置减去画布的偏移量就是当前鼠标在画布上面的位置
		x -= element.offsetLeft;
		y -= element.offsetTop;

		mouse.x = x;
		mouse.y = y;

	},false);

	return mouse;
}

window.utils.captureTouch = function(event){

}