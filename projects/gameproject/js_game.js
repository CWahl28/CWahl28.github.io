const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");


const player = {
	x:350,
	y:100,
	speed:3,
	eyeColor:"#483812",
	bodyColor:"#785B31",
	skinColor:"#f7d19a",
	hairColor:"#b38d56",
	eye2Color:"White",	
};

const hole = {
	x:150,
	y:235,
	color:"Black",
};

const Box = {
	x:350,
	y:275,
	color:"Grey",
};

const keys= {};

let x = 0;
let y = 0;
/*
let goal_min_x = hole.x;
let goal_max_x = hole.x+62;
let goal_min_y = hole.y;
let goal_max_y = hole.y+62;

let box_min_x = Box.x;
let box_max_x = Box.x+60;
let box_min_y = Box.y;
let box_max_y = Box.y+60;

let player_min_x = player.x;
let player_max_x = player.x+30;
let player_min_y = player.y;
let player_max_y = player.y+30;
*/

let score = 0;
let gameRunning = true;

function drawPlayer(x,y) {
        drawRect(player.x-18,player.y+10);
        drawHair(player.x-3,player.y-3);
        drawFace(player.x,player.y);
        bodyPart(player.x-15,player.y+3);
        eyeWhite(player.x+3,player.y-3);
        eyePupil(player.x+5,player.y-1);

function drawFace(x,y){
	ctx.fillStyle = player.skinColor;
	ctx.beginPath();
	ctx.arc(x,y,15,0,2*Math.PI);
	ctx.fill();
	}
function drawRect(x,y) {
	ctx.fillStyle = player.bodyColor;
	ctx.fillRect(x,y,30,35);
	ctx.fill();
	}
function drawHair(x,y){
	ctx.fillStyle = player.hairColor;
        ctx.beginPath();
        ctx.arc(x,y,17,0,2*Math.PI);
        ctx.fill();
	}
function bodyPart(x,y){
	ctx.fillStyle = player.skinColor;
        ctx.beginPath();
        ctx.arc(x,y,5,0,2*Math.PI);
        ctx.fill();
	}
function eyePupil(x,y){
	ctx.fillStyle= player.eyeColor;
	ctx.beginPath();
	ctx.arc(x,y,4,0,2*Math.PI);
	ctx.fill();
	}
function eyeWhite(x,y){
        ctx.fillStyle= player.eye2Color;
        ctx.beginPath();
        ctx.arc(x,y,8,0,2*Math.PI);
        ctx.fill();
	}
}

function movePlayer(){   
	if(keys['ArrowDown']){
		player.y += player.speed;
	}
	if(keys['ArrowUp']){
		player.y -= player.speed;
	}
	if(keys['ArrowLeft']){
        	player.x -= player.speed;
	} 
	if(keys['ArrowRight']){
        	player.x += player.speed;
	}
/*
	if(keys['ArrowDown'] && keys['ShiftLeft']){
                player.y += player.speed += 5;
        }
        if(keys['ArrowUp'] && keys['ShiftLeft']){
                player.y -= player.speed -= 5;
        }
        if(keys['ArrowLeft'] && keys['ShiftLeft']){
                player.x -= player.speed -= 5;
        }
        if(keys['ArrowRight'] && keys['ShiftLeft']){
                player.x += player.speed += 5;
        }
*/
}

function addBox(x,y){
	ctx.fillRect(x,y,60,60);
	ctx.fill();
	ctx.fillStyle = Box.color;
}

function newHole(x,y){
	ctx.fillRect(x,y,62,62);
	ctx.fill();
	ctx.fillStyle= hole.color;
}


function boxMove(){
	if(player_max_x<box_min_x){
                ctx.translate(Box.x+5,Box.y);
        }
        if(player_min_x<box_max_x){
                ctx.translate(Box.x-5,Box.y);
        }
        if(player_max_y>box_min_y){
                ctx.translate(Box.x,Box.y-5);
        }
        if(player_min_y<box_max_y){
                ctx.translate(Box.x,Box.y+5);
        }
}

function boxComplete(){
	if(box_min_x < goal_max_x
	&& box_max_x > goal_min_x
	&& box_min_y < goal_max_y
	&& box_max_y > goal_min_y
		){
	gameRunning = false;
	}
}

function colorFix(x,y){
	ctx.fillRect(x,y,1,1);
	ctx.fill();
	ctx.fillStyle = Box.color;
}

function animate(){
	if(gameRunning){
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	addBox(Box.x,Box.y);
	newHole(hole.x,hole.y);
	drawPlayer(player.x,player.y);
	movePlayer();
//	boxMove();
//	boxComplete();
	score++;
	colorFix(2,2);
	}
requestAnimationFrame(animate);
}

function handleKeyPress(e){
	keys[e.key] = true;}

document.addEventListener('keydown', handleKeyPress);
document.addEventListener('keyup',(e) =>{
	keys[e.key] = false;
});

animate();	
