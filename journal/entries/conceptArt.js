const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");


function drawFace(x,y){
	ctx.fillStyle = "#f7d19a";
	ctx.beginPath();
	ctx.arc(x,y,15,0,2*Math.PI);
	ctx.fill();

}

function drawRect(x,y) {
    console.log("testing");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#766244";
    ctx.fillRect(x,y,30,35);
    ctx.fill();
}

function drawHood(x,y){
	ctx.fillStyle = "#766244";
        ctx.beginPath();
        ctx.arc(x,y,17,0,2*Math.PI);
        ctx.fill();
}

function bodyPart(x,y,z){
	ctx.fillStyle = "#f7d19a";
        ctx.beginPath();
        ctx.arc(x,y,z,0,2*Math.PI);
        ctx.fill();
}

function player(x,y){
	drawRect(x-18,y+10);
	drawHood(x-5,y);
	drawFace(x,y);
	bodyPart(x-15,y+3,5);
}

player(200,200);
