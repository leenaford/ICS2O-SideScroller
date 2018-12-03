// Daniel Shiffman
// https://www.kadenze.com/courses/the-nature-of-code
// http://natureofcode.com/
// Session 2: Array of Particles, multiple forces

var man;

function setup() {
  createCanvas(400, 400);
	man = new Person();
}


var x;
x=-100;
function draw() {
  background(51);
	
	if (mouseIsPressed) {
		var force = createVector(-0.1,0);
		man.applyForce(force);
	}
	
	translate(-man.pos.x+50, 0);
	
	
													 
	man.update();
	man.display();
	
	fill(200, 400, 200);
	rect(250, 350, 100, 100);
	
	}

