var hr, mn, sc;
var hrAngle, mnAngle, scAngle;
function setup() {
  createCanvas(800,400);
 angleMode(DEGREES);
}

function draw() {
  background("black");  
  translate(200,200);
  rotate(-90);
  hr = hour();
  mn = minute();
  sc = second();
  
  hrAngle = map(hr % 12, 0, 12, 0, 360);
  mnAngle = map(mn, 0, 60, 0, 360);
  scAngle = map(sc, 0, 60, 0, 360);

  //drawing second hand.
  push();
  rotate(scAngle);
  stroke("blue");
  strokeWeight(7);
  line(0,0,100,0);
  pop();

  //drawing minute hand.
  push();
  rotate(mnAngle);
  stroke("red");
  strokeWeight(7);
  line(0,0,75,0);
  pop();

  //drawing hour hand.
  push();
  rotate(hrAngle);
  stroke("green");
  strokeWeight(7);
  line(0,0,50,0);
  pop();

  //drawing the arc = sc.
  noFill();
  stroke("blue");
  strokeWeight(7);
  arc(0,0, 300, 300, 0, scAngle);

  //drawing the arc = mn.
  stroke("red");
  strokeWeight(7);
  arc(0,0, 280, 280, 0, mnAngle);

  //drawing the arc = hr.
  stroke("green");
  strokeWeight(7);
  arc(0,0, 260, 260, 0, hrAngle);
  drawSprites();
}