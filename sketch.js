var iss;
var issImg;
var bathing,brushing,eating;
var gymming;
var moving,sleeping;
var mkey;

function preload(){
  issImg = loadImage("iss.png");
  bathingImg = loadAnimation("bath1.png","bath2.png");
  brushingImg = loadAnimation("brush.png");
  drinkingImg = loadAnimation("drink1.png","drink2.png");
  eatingImg = loadAnimation("eat1.png","eat2.png");
  gymmingImg = loadAnimation("gym1.png","gym2.png","gym11.png","gym12.png");
  movingImg = loadAnimation("move.png","move1.png");
  sleepingImg = loadAnimation("sleep.png");
}
function setup() {
  createCanvas(800,400);

  iss=createSprite(400, 200);
  iss.addImage(issImg);
  iss.scale = 0.3;

  astronaut = createSprite(300,230);
  astronaut.addAnimation("sleeping",sleepingImg);
  astronaut.scale = 0.09;
}

function draw() {
  background(255,255,255); 
  
  if(keyDown(UP_ARROW)){
    astronaut.addAnimation("brushing",brushingImg);
    astronaut.changeAnimation("brushing");
    astronaut.x = 100;
  }

  if(keyDown(RIGHT_ARROW)){
    astronaut.addAnimation("bathing",bathingImg);
    astronaut.changeAnimation("bathing");
    astronaut.x = 700;
  }

  if(keyDown(LEFT_ARROW)){
    astronaut.addAnimation("eating",eatingImg);
    astronaut.changeAnimation("eating");
    astronaut.x = 400;
  }

  if(keyDown(DOWN_ARROW)){
    astronaut.addAnimation("gymming",gymmingImg);
    astronaut.changeAnimation("gymming");
    astronaut.x = 400;
  }

  if(keyPress(mkey)){
    astronaut.addAnimation("moving",movingImg);
    astronaut.changeAnimation("moving");
    astronaut.x = 400;
  }

  drawSprites();
fill("black");
textSize(30);
text("instrutions : ");
textSize(30);
text("Brushing : Up Arrow ");
  
}
