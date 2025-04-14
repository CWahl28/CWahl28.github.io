const canvas = document.getElementById("jscanvas");
const ctx = canvas.getContext("2d");

ctx.fillStyle = "Blue";
ctx.fillRect(0,0,400,400);

ctx.fillStyle = "White";
ctx.fillRect(0,300,400,100);

function circle(x,y,r){
	ctx.beginPath();
	ctx.arc(x,y,r,0,2*Math.PI);
	ctx.fill();
}
function snowman(x,y){
	circle(x,y,25);
	circle(x,y+50,40);
	circle(x,y+110,55);
}

snowman(200,150);
snowman(75,150);
snowman(325,150);
