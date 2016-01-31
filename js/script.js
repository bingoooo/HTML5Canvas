'use strict';

var frame = 0;
var posX = 250;
var posY = 250;
var mouseX;
var mouseY;
var vx;
var vy;
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

function circle(radius, originX, originY){
	ctx.lineWidth = 5;
	ctx.strokeStyle = "red";
	ctx.beginPath();
	ctx.arc(originX, originY, radius, 0, 2 * Math.PI, false);
	ctx.fillStyle = "blue";
	ctx.stroke();
	
}

function AnimateCircle(){
	//if (frame < 580){
		canvas.addEventListener('mousemove', function(event){
			mouseX = event.clientX;
			mouseY = event.clientY;
		});
		vx = (mouseX - posX);
		vy = (mouseY - posY);
		if (mouseX != posX) {
			if (vx < 0){
				posX -= 1;
			} else {
				posX += 1;
			}
		}
		if (mouseY != posY){
			if (vy < 0){
				posY -= 1;
			} else {
				posY += 1;
			}
		}
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		circle(5, posX, posY);
		//frame ++;
	//} else {
	//	frame = 0;
	//}
		window.requestAnimationFrame(AnimateCircle);
}

window.onload = function(){
	window.requestAnimationFrame(AnimateCircle);
	//window.setInterval(AnimateCircle, 10);
	//window.setTimeout(window.requestAnimationFrame(AnimateCircle), 10);
}