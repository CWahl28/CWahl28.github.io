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
	if(keys['ArrowLeft']){
        	player.x -= player.speed;
	}
	if(keys['ArrowRight']){
        	player.x += player.speed;
	}
/*
	 if(keys['']){
	        player.y += player.speed;
	}
        if(keys['']){
                player.y -= player.speed;
        }
        if(keys['']){
                player.x -= player.speed;
        }
        if(keys['']){
                player.x += player.speed;
        }
*/
}

function animate() {
	drawRect(x,y);
	drawPlayer();
	movePlayer();	

    // TODO: Add some code here 
    //  that will change the rectangle's position

	x = x + dx;
	y = y + dy;

    requestAnimationFrame(animate);
	
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

        if(player.x>390){
                player.x=390;
        }
        if(player.x<10){
                player.x=10;
        }
        if(player.y>390){
                player.y=390;
        }
        if(player.y<10){
                player.y=10;
        }
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

