const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

const player = {
	x:200,
	y:200,
	color:"Blue",
	speed:3
};

const keys= {};

let x = 0;
let y = 0;
let dx = 4;
let dy = 3;
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
	ctx.arc(player.x, player.y, 20, 0, 2*Math.PI);
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
}

function drawScore(){
	ctx.font="15px Ariel";
	ctx.fillText("Score= "+score,5,15);
}

//function drawEnd(){
//	ctx.font"30px Ariel";
//	ctx.fillText("Congrats! Score= "+score,200,200);}

function animate() {
if(gameRunning){
	drawRect(x,y);
	drawPlayer();
	movePlayer();	
	//score += 1;
	score++;	
	drawScore();	
	
if(score >= 300){
	gameRunning= false;
}
//if(gameRunning=false){
//	drawEnd();}

	//c c++

    // TODO: Add some code here 
    //  that will change the rectangle's position

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
// own method for not going off walls
	if(player.y>380){
                player.y=380;
        }
        if(player.y<20){
                player.y=20;
        }
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

