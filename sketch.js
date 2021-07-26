var a,b;


function setup() {
  createCanvas(800,400);
 a= createSprite(200, 200, 50, 50);
a.shapeColor="red";
b=createSprite(400,200,50,50);
b.shapeColor="white";



}

function draw() {
  background(0); 
  a.x=World.mouseX;
  a.y=World.mouseY;
  
  if(a.x-b.x < a.width/2+b.width/2 && b.x - a.x < a.width/2+b.width/2 && a.y - b.y < a.height/2+b.height/2 && b.y-a.y < a.height/2+b.height/2){
   a.shapeColor="blue";
   b.shapeColor="blue";

  }
  else{
    a.shapeColor="red";
    b.shapeColor="white";
  }
  drawSprites();
}