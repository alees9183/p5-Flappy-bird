let img;
let font;
let y = 20
let pipeX;
let pipeGap = 156
let pause = false
let birdX;
let fallspeed = 2
let red = 0
let green = 255
let blue = 0
let sc = 0
const SPACE = 32

function preload() {
  img = loadImage("bird.png")
  font = loadFont("gamefont.ttf")
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER)
  noStroke()
  birdX = width / 5.8;
  pipeX = width;

}

function draw() {
  if (!pause) {
    background(173,216,230)
    textFont(font, height/20);
      textAlign(CENTER, CENTER);
      fill(0)
      text("Saim", width-width/10, height-height/10); 
    fill(red, green, blue)//green
    rect(pipeX, height / 2, width / 10, height); //pipe
    fill(173,216,230);//pipe gap    
    rect(pipeX, pipeGap, width / 9, height / 2);//pipe gap
  fill(0)
    textFont(font, height/10); 
    text("Score   " + sc, width/2, height/7);//score 
    fill(150, 75, 0)
    rect(width/2,height,width,height/10)

    image(img, birdX, y - 10, width / 19, height / 14);//bird img
    pipeX -= width/150 // pipe speed increassed if screen is bigger 
   sc += 1
    fallspeed += 0.05 //fall increasse
    y += fallspeed //falling
       fill(255)
 
    if (keyIsDown(SPACE)) {//jump 
      y -= 10, fallspeed = 2
   
    }
    if (y > height + 1) {
      y = height,
        pause = true
    }
    if (y < 20) {
      y = 20
    }
    if (pipeX < 0) {//pipe reset
      pipeX = width,
      pipeGap = random(height)
    }
    if (y > height-20) {// if ground touched
      textFont(font, height/6);
      textAlign(CENTER, CENTER);
      fill(0)
      text("GAME  OVER", width / 2, height / 2);
      pause = true;//game over
    }
    if ((pipeX + width/13.5) > birdX && (pipeX - width/13.5  < width / 5 && (y < (pipeGap - height / 4) || y > (pipeGap + height / 4)))) {//if pipe touched
      textFont(font, height/6);
      textAlign(CENTER, CENTER);
      fill(0)
      text("GAME  OVER", width / 2, height / 2); //gameover
      pause = true;
    }

    if (mouseIsPressed) {//pipe randomizer
      pipeGap = random(height)


    }
  }
}
    function doubleClicked(){red = random(255),green = random(255),blue = random(255)}// color changer