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
			-   正圆运动
			    x_position = centerX + Math.sin(angle)*radius;
			    y_position = centerY + Math.cos(angle)*radius;
			    angle += speed;

			-   椭圆运动
			    x_position = centerX + Math.cos(angle)*radiusX;
			    y_position = centerY + Math.sin(angle)*radiusY;
			    angle += speed;

-	[x] 4、基本的速度与加速度运动

		总结：
			-   已知某一方向速度求x,y方向的速度
			    var vx = Math.cos(angle * Math.PI / 180) * speed;
			    var vy = Math.sin(angle * Math.PI / 180) * speed;

			-   加速度运动相关加速度计算，以及简单的碰撞检测
	 		    ax = Math.cos(angle * Math.PI / 180) * a;
	 		    ay = Math.sin(angle * Math.PI / 180) * a;	
				ball.y + ball.radius > canvas.height

			-	任意方向速度
				vx = speed * Math.cos(angle);
				vy = speed * Math.sin(angle);

			-	任意方向加速度
				ax = force * Math.cos(angle);
				ay = force * Math.xin(angle);

			-	改变速度
				vx += ax;
				vx += ay;

			-	改变位置
				object.x += vx;
				object.y += vy;

-	[x] 5、基本的碰撞检测相关
		
		总结： 	
			-	1.重现一个超出边界的物体
			    if(object.x - object.width/2 > right || 
			        object.x + object.width/2 < left ||
			        object.y - object.height/2 > bottom ||
			        object.y + object.height/2 < top){
			          //重新设置对象的位置和速度
			    }

			-   2. 边界环绕
			   	if(object.x - object.width/2 > right){
			        object.x = left - object.width/2;
			    }else if(object.x + object.width/2 < left){
			        object.x = object.width/2 + right；
			    }
			    if(object.y - object.height/2 > bottom){
			        object.y = top - object.height/2;
			    }else if(object.y + object.height/2 < top){
			        object.y = object.height/2 + bottom；
			    }      

			-   3.摩擦力
			    speed = Math.sqrt(vx * vx + vy * vy);
			    angle = Math.atan2(vy, vx);
			    if(speed > f){
			      	speed -= f;
			    }else{
			      	speed = 0;
			    }

			    vx = Math.cos(angle)*speed;
			    vy = Math.sin(angle)*speed;

			    4.摩擦力(野路子)
			      	vx *= f;
			        vy *= f;
