const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

const player = {
	x:300,
	y:300,
	color:"Blue",
	speed:3
};

const keys= {};

let x = Math.random()*50;
let y = Math.random()*50;
let dx = 3;
let dy = 4;
let score = 0;
let gameRunning = true;

//define functions
function drawRect(x,y) {
    //console.log("drawing rect");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "Red";
    ctx.fillRect(x,y,50,50);
    ctx.fill();
}

function drawPlayer(x,y) {
	ctx.fillStyle = player.color;
	ctx.beginPath();
	ctx.arc(player.x,player.y,20,0,2*Math.PI);
	ctx.fill();
}

function movePlayer(){   
	if(keys['ArrowDown']){
		player.y += player.speed;
	}
	if(keys['ArrowUp']){
		player.y -= player.speed;
	}
//jones method to block from going off walls
	if(keys['ArrowLeft'] && player.x>20){
       	player.x -= player.speed;
	}
	if(keys['ArrowRight'] && player.x<380){
        	player.x += player.speed;
	}
        if(keys['ArrowUp'] && player.y<20){
        player.y += player.speed;
        }
        if(keys['ArrowDown'] && player.y>380){
                player.y -= player.speed;
        }

}

function drawScore(){
	ctx.font="15px Ariel";
	ctx.fillText("Score= "+score,5,15);
}

function checkCollision(){
	//this is AABB method

	//helper variable time, not nessasrary but helpful
	let player_min_x = player.x-20;
	let player_max_x = player.x+20;
	let player_min_y = player.y-20;
	let player_max_y = player.y+20;

        let box_min_x = x;
        let box_max_x = x+50;
        let box_min_y = y;
        let box_max_y = y+50;

	if(box_min_x < player_max_x
	&& box_max_x > player_min_x
	&& box_min_y < player_max_y
	&& box_max_y > player_min_y
		){
	
	gameRunning=False;
	}
}

function moveBox(){
        x = x + dx;
        y = y + dy;

        if(x>350){
                dx = dx*-1;
        }
        if(x<0){
                dx = dx*-1;
        }
        if(y>350){
                dy = dy*-1;
        }
        if(y<0){
                dy = dy*-1;
        }
}

function animate() {
if(gameRunning){
	drawRect(x,y);
	moveBox();
	drawPlayer();
	movePlayer();	
	//score += 1;
	score++;	
	drawScore();	
	checkCollision();
	
//c c++
}		
requestAnimationFrame(animate);
}

function handleKeyPress(e){
	keys[e.key] = true;	
}

document.addEventListener('keydown', handleKeyPress);

document.addEventListener('keyup',(e) =>{
	keys[e.key] = false;
});

//call our function
animate();

