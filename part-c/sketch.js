function setup() {
  createCanvas(800, 800)
  background(0, 0, 0)
}

function draw() {
  if(keyIsPressed){
    if(key == 'r'){
      fill(255, 0, 0)
    }
    if(key == 'g'){
      fill(0, 255, 0)
    }
    if(key == 'b'){
      fill(0, 0, 255)
    
    }  
    if(key == 'k'){
      fill(0, 0, 0)
    
    }     
    
  }
  if (mouseIsPressed) {
    if(key == 't'){
      triangle(mouseX, mouseY, mouseX + 50,  mouseY + 75, mouseX + 100, mouseY)
    } else{
      ellipse(mouseX, mouseY, 30, 30)
    }
  
  } 
  
}
