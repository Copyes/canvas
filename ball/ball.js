/**
 * 一个圆的东西，用来表示球，后面的一些列的运动都是用这个球来搞
 */

function Ball(radius, color){
	if(!radius){
		radius = 40;
	}
	if(!color){
		color = '#fff';
	}

	this.radius = radius;
	this.x = 0;   // 圆心横坐标
	this.y = 0;   // 圆心纵坐标
	this.vx = 0; // x轴方向的速度
	this.vy = 0; // y轴方向的速度
	this.scaleX = 1;
	this.scaleY = 1;
	this.mass = 1; // 质量
	this.rotation = 0;  // 旋转角度
	this.color = utils.parseColor(color);
	this.lineWidth = 1; // 外圈宽度
}

/**
 * [draw description]  画球
 * @return {[type]} [description]
 */
Ball.prototype.draw = function(context){
	context.save();
	context.translate(this.x, this.y);
	context.rotate(this.rotation);
	context.scale(this.scaleX, this.scaleY);
	context.lineWidth = this.lineWidth; // 画笔的宽度
	context.strokeStyle = this.color; // 填充的颜色
	context.fillStyle = this.color;  // 画笔的颜色
	context.beginPath();
	context.arc(0, 0, this.radius , 0, Math.PI * 2, false); // 画圆，  圆心坐标，半径，画的圆周  context.arc(x,y,r,sAngle,eAngle,counterclockwise);
	context.closePath();
	context.fill();
	context.stroke();
	context.restore();
}