const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

function drawFace(x,y){
	ctx.fillStyle = "#f7d19a";
	ctx.beginPath();
	ctx.arc(x,y,15,0,2*Math.PI);
	ctx.fill();
}
function drawRect(x,y) {
    ctx.fillStyle = "#785B31";
    ctx.fillRect(x,y,30,35);
    ctx.fill();
}
function drawHair(x,y){
	ctx.fillStyle = "#b38d56";
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
function eyePupil(x,y){
	ctx.fillStyle= "#4E3410";
	ctx.beginPath();
	ctx.arc(x,y,4,0,2*Math.PI);
	ctx.fill();
}
function eyeWhite(x,y){
        ctx.fillStyle= "White";
        ctx.beginPath();
        ctx.arc(x,y,8,0,2*Math.PI);
        ctx.fill();
}

function eyeball(x,y){
	eyeWhite(x+3,y-3);
	eyePupil(x+5,y-1);
}

function player(x,y){
	drawRect(x-18,y+10);
	drawHair(x-3,y-3);
	drawFace(x,y);
	bodyPart(x-15,y+3,5);
}

player(200,200);
eyeball(200,200);


function completeBox(x,y){
    ctx.fillStyle = "Blue";
    ctx.fillRect(x,y,50,50);
    ctx.fill();
    ctx.strokeRect(x,y,50,50);
    ctx.lineWidth= 5;
    ctx.strokeStyle="Black";
}

function emptySlot(x,y){
    ctx.fillStyle = "Black";
    ctx.fillRect(x,y,50,50);
    ctx.fill();
}

function looseBox(x,y){
    ctx.fillStyle = "Red";
    ctx.fillRect(x,y,50,50);
    ctx.fill();
}

completeBox(130,60);
looseBox(215,200);
emptySlot(210,300);
