function setup() {
  createCanvas(400, 400)
  background(0, 0, 0)
}

function draw() {
  if (keyIsPressed) {
    fill(255, 0, 0)
  } else {
    fill(0, 255, 0)
  }
  noStroke();
  ellipse(mouseX, mouseY, 30, 30)
}
