function setup() {
  createCanvas(400, 400)
  background(255, 255, 0)
}

function draw() {
  fill(255, 0, 0)
  stroke(0, 0, 0)
  triangle(mouseX, mouseY, mouseX + 30,  mouseY + 90, mouseX + 75, mouseY + 10)
}



