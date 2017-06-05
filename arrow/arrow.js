/**
 * canvas构造一个箭头
 * @return {[type]} [description]
 */
function Arrow(){
	this.x = 0;  // 初始位置x
	this.y = 0;	 // 初始位置y
	this.rotation = 0;
	this.color = '#ffff00';
}
// 画这个箭头
Arrow.prototype.draw = function(context){
	context.save();
	context.translate(this.x, this.y); // 将坐标移动到x,y
	context.rotate(this.rotation); // 旋转的角度
	context.lineWidth = 5; // 设置线宽
	context.fillStyle = this.color; // 设置填充色
	context.beginPath(); // 路径开始
	context.moveTo(-50, -25);
	context.lineTo(0, -25);
	context.lineTo(0,-50);
	context.lineTo(50, 0);
	context.lineTo(0, 50);
	context.lineTo(0, 25);
	context.lineTo(-50, 25);
	context.closePath(); // 闭合路径
	context.stroke(); // 描边
	context.fill(); // 填充
	context.restore();
} 