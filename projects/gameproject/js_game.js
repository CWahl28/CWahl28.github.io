const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");


const player = {
	x:200,
	y:200,
	color:"White",
	speed:3
};

const keys= {};

let x = 0;
let y = 0;

function drawPlayer(x,y) {
	ctx.fillStyle = player.color;
	ctx.beginPath();
	ctx.arc(player.x, player.y, 10, 0, 2*Math.PI);
	ctx.fill();
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

function animate(){
	drawPlayer();
	movePlayer();
	
	requestAnimationFrame(animate);
}

function handleKeyPress(e){
	keys[e.key] = true;}

document.addEventListener('keydown', handleKeyPress);
document.addEventListener('keyup',(e) =>{
	keys[e.key] = false;
});

animate();	
