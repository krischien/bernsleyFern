let x = 0;
let y = 0;
function setup() {
	createCanvas(600, 600);	
	background(0);
}

function nextPoint(){
	let nextX = 0;
	let nextY = 0;
	let r = random(1);
    console.log(r)
    //1
    if(r < 0.01){
    nextX =  0;
    nextY =  0.16 * y;
	}

    //2
    else if(r < 0.86){
	nextX =  0.85 * x +  0.04 * y;
	nextY = -0.04 * x +  0.85 * y + 1.6;
	}
	//3
	else if(r < 0.93){
	nextX =  0.20 * x + -0.26 * y;
	nextY =  0.23 * x +  0.22 * y + 1.6;
	}	
	//4
	else{
	nextX = -0.15 * x +  0.28 * y;
	nextY =  0.26 * x +  0.24 * y + 0.44;
	}

	x = nextX;
	y = nextY;
}

function drawPoint(){
	stroke(66, 134, 244);
	strokeWeight(2);
	let px = map(x,-2.1820,2.6558,0,this.width);
	let py = map(y,0,9.9983,this.height,0);
	point(px,py);
}

function draw() {
	for (var i = 0; i < 2000; i++) {
			drawPoint();
			nextPoint();
	}
}