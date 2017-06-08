#### 《Re: 从零开始的canvas》

这是一个学习的专栏，用于从头开始的学习的canvas。

-	[x] 1、基本的夹角计算，正弦，余弦公式等。产出是一个跟着鼠标转的箭头
-	[x] 2、基本的波形运动,线性运动，脉冲运动

		总结：
			-  平滑运动
			   value = center + Math.sin(angle)*range;
			   angle += speed;

-	[x] 3、基本的圆周运动，椭圆运动

		总结：
			-  正圆运动
			   x_position = centerX + Math.sin(angle)*radius;
			   y_position = centerY + Math.cos(angle)*radius;
			   angle += speed;

			-  椭圆运动
			   x_position = centerX + Math.cos(angle)*radiusX;
			   y_position = centerY + Math.sin(angle)*radiusY;
			   angle += speed;

-	[x] 4、基本的速度与加速度运动


		总结：

			-  已知某一方向速度求x,y方向的速度
			   
			   var vx = Math.cos(angle * Math.PI / 180) * speed;
			   var vy = Math.sin(angle * Math.PI / 180) * speed;	

