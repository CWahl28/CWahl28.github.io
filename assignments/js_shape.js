const canvas = document.getElementById("jscanvas");
const ctx = canvas.getContext("2d");

ctx.fillStyle = "AliceBlue";
ctx.fillRect(0,0,500,500);

function leaf(x,y){
	ctx.beginPath();
        ctx.arc(x,y,45,0,2*Math.PI);
        ctx.stroke();
        ctx.fillStyle = "#a7ce79";
        ctx.fill();
        ctx.lineWidth = 1;
}

function petal(x,y){
	ctx.beginPath();
	ctx.arc(x,y,35,0,2*Math.PI);
	ctx.stroke();
	ctx.fillStyle = "White";
	ctx.fill();
	ctx.strokeStyle = "Grey";
	ctx.lineWidth = 2;
}

function middle(x,y,r){
	ctx.beginPath();
	ctx.arc(x,y,r,0,2*Math.PI);
	ctx.stroke();
	ctx.fillStyle = "Gold";
	ctx.fill();
	ctx.strokeStyle = "Gamboge";

}

function flower(x,y){
	leaf(x+30,y-50);
        leaf(x+62,y-15);
	petal(x-43,y);
	petal(x-12,y+42);
        petal(x+40,y+30);
	petal(x+42,y-25);
	petal(x-10,y-45);
	middle(x,y,28);
}

flower(250,250);
flower(10,50);
flower(440,300);
flower(100,400);
flower(370,90);
flower(150,420);
