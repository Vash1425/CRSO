var car,img,wall;
var speed,weight;

function setup() {
  createCanvas(600,400);
  speed = random(55,90);
  weight = random(400,1500);
  car  = createSprite(50,200,50,50);
  car.velocityX = speed;

wall= createSprite(500,200,60,height/2);
wall.shapeColor = color(80,80,80);
}
  function draw() {
  background(25,0,255); 
  if(wall.x-car.x < car.width+wall.width/2){
car.velocityX = 0;

var deformation = 0.5* weight*speed*speed/22509
if(deformation<100){
  car.shapeColor= color(0,255,0);
  text('good', 300,220);
  text('Rating = A',300,100)
}
if(deformation<180 && deformation>100){
car.shapeColor= color(255,255,0);
text('average', 300,220);
text('Rating = B',300,100)
  } 
  if(deformation>180){
car.shapeColor = color(255,0,0);
text('lethal', 300,220);
text('Rating = C',300,100)
  }
}
  drawSprites();
  
}