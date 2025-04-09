const canvas = document.getElementById("jscanvas");
const ctx = canvas.getContext("2d");

//draws cricale
//wrap in function
//2 inputs, x,y
//and draws in that position

function circle(x,y){
	ctx.fillStyle="red";
	ctx.beginPath();
	ctx.arc(x,y,25,0,2*Math.PI);
	ctx.fill();	
}

circle(25,60);
circle(340,120);
circle(50,300);
circle(140,200);
circle(300,70);

//call the funtion multiple times
//to draw circles

