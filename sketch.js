var x = 0;
var y = 0;
var speed = 3;

function setup(){
createCanvas(600, 600);
}

function draw(){
	background(0);


		if(mouseX > 200 && mouseY < 400){
			fill(255, 0, 0);
		} else {
			fill(0, 0, 255);
		}
		noStroke();
		rect(250, 250, 100, 100);

		stroke(255);
		strokeWeight(4);
		noFill();


	ellipse(x, 300, 100, 100);

	if(x > width && y > height || x < 0 && y < 0){
		speed = speed * -1
	}

	ellipse(300, y, 100, 100);



y = y + speed
x = x + speed

}
