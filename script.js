// p5 file

// open the console window of any browser to see console.log() messages,
// like print() messages in Processing
console.log("this is a js comment");

//void setup() {
//  size(800,250);
//  background(250,250,250);
//}

function setup() {
  var myCanvas = createCanvas(800, 250);
  myCanvas.parent('mySketch');
  background(255);

}

function draw() {
  // set the variables for drawing the quad and remove stroke
  noStroke();
  //set color mode to HSB
  colorMode(HSB, 321, 83, 84);

  var b = 90 + 20 * sin(frameCount * 0.005),
    s = 90 + 50 * cos(frameCount * 0.005),
    frameRate = 0.05,
    h = random(170, 190);

  //change the color of the shape if the mouse is pressed
  if (mouseIsPressed) {
    fill(h, s, b);
  } else {
    fill(50, s, b);
  }

  var x1 = 30 + 50 * sin(frameCount * frameRate);
  var y1 = 30 + 50 * cos(frameCount * frameRate);
  var x2 = 35 + 50 * sin(frameCount * frameRate);
  var y2 = 35 + 50 * cos(frameCount * frameRate);
  var y4 = 30 + 50 * cos(frameCount * frameRate);
  var x4 = 30 + 50 * sin(frameCount * frameRate);

  //draw the quad following the movement of the mouse
  quad(mouseX + x1, mouseY + y1, mouseX + x2, mouseY + y2, mouseX + 50, mouseY + 50, mouseX + x4, mouseY + y4);
  //draw ellipses following the mouse
  ellipse(mouseX + x1, mouseY + y1, 4, 4);

}
