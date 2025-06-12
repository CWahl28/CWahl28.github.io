const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");


const player = {
	speed:3,
	x:350,
	y:100,
	eyeColor:"#483812",
	bodyColor:"#785B31",
	skinColor:"#f7d19a",
	hairColor:"#b38d56",
	eye2Color:"White",	
};

const box= {
	move:3,
	goalx:200,
	goaly:300,
};

const keys= {};

let boxx=400;
let boxy=100;
/*
let goal_min_x = goalx;
let goal_max_x = goalx+80;
let goal_min_y = goaly;
let goal_max_y = goaly+80;

let box_min_x = boxx;
let box_max_x = boxx+82;
let box_min_y = boxy;
let box_max_y = boxy+82;
*/
let player_min_x = player.x;
let player_max_x = player.x+30;
let player_min_y = player.y;
let player_max_y = player.y+30;

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
/*
function tree(x,y){
	leaves(x,y+30);
	leaves(x,y+15);
	treeStem(x,y);

	function leaves(x,y){
		ctx.beginPath();
		ctx.moveTo(x+30,y+30);
		ctx.lineTo(x+60,y+30);
		ctx.lineTo(x+45,y+0);
		ctx.closePath();
		ctx.fill();
		ctx.fillStyle="Green";
	}
	function treeStem(x,y){
		ctx.beginPath();
		ctx.fillrect(x,y,20,15);
		ctx.fill();
		ctx.fillStyle="Brown";
	}
}
*/
function movePlayer(){   
        if(keys['ArrowDown'] && player.y<410){
                player.y += player.speed;
        }
        if(keys['ArrowUp'] && player.y>20){
                player.y -= player.speed;
        }
        if(keys['ArrowLeft'] && player.x>20){
                player.x -= player.speed;
        }
        if(keys['ArrowRight'] && player.x<685){
                player.x += player.speed;
        }

}

function newHole(x,y){
	ctx.fillRect(x,y,80,80);
	ctx.fill();
	ctx.fillStyle = "Black";
}

function addBox(x,y){
	ctx.fillRect(x,y,82,82);
	ctx.fill();
	ctx.fillStyle= "Grey";
}

function boxMove(){
let goal_min_x = box.goalx;
let goal_max_x = box.goalx+80;
let goal_min_y = box.goaly;
let goal_max_y = box.goaly+80;

let box_min_x = boxx;
let box_max_x = boxx+82;
let box_min_y = boxy;
let box_max_y = boxy+82;
/*
	if(player_min_x < goal_max_x 
	&& player_min_y > goal_min_y 
	&& player_max_y < goal_max_y
	&& player_max_x > goal_max_x)
*/
	if(goal_min_x < player_max_x
	&& goal_max_x > player_min_x
	&& goal_min_y < player_max_y
	&& goal_max_y > player_min_y)
				{
        	box.goalx = box.goalx-1;
//		ctx.translate(-1,0);
	}
	if(player_min_y<goal_max_y
	&& player_max_x<goal_max_x
	&& player_min_x>goal_min_x
	&& player_max_y>goal_max_y){
		box.goaly = box.goaly-1;
//		ctx.translate(0,-1);
	}
	if(player_min_y>goal_min_y
	&& player_max_y<goal_max_y
	&& player_max_x>goal_min_x
	&& player_min_x>goal_min_x){
		box.goalx = box.goalx+1;
//		ctx.translate(1,0);
	}
	if(player_min_x>goal_min_x
	&& player_max_x<goal_max_x
	&& player_max_y>goal_min_y
	&& player_min_y>goal_min_y){
		box.goaly = box.goaly+1;
//		ctx.translate(0,1);
	}
}

/*
function boxComplete(){
	if(
	){
	gameRunning = false;
	}
}
*/
function drawScore(){
	ctx.font="Bold 20px Courier New";
	ctx.fillText("Score= "+score,10,20);
	ctx.fillStyle= "Black";
}

function animate(){
	if(gameRunning){
	ctx.clearRect(0, 0, canvas.width, canvas.height);
//	tree(100,100);
	addBox(box.goalx,box.goaly);
	newHole(boxx,boxy);
	drawPlayer(player.x,player.y);
	movePlayer();
	boxMove();
//	boxComplete();
	score++;
	drawScore();
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
