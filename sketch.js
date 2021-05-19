
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball,box,box,box1,box2;
function preload()
{
  
}

function setup() {
  createCanvas(800, 700)
  
  
  
  engine = Engine.create();
  world = engine.world;

  ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
  
	
  
box1=createSprite(510,645,20,90)
box2=createSprite(570,680,110,20)
box3=createSprite(620,645,20,90)

boxA = new Ground(510,645,20,90)
boxB = new Ground(570,680,110,20)
boxC = new Ground(620,645,20,90)

	//Create the Bodies Here.

    ball= new Ball (110,490,40,40);
    ground = new Ground(600,height,1200,20)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  ball.display()
  ground.display()
  drawSprites();
 
}
function keyPressed() {
if(keyCode === UP_ARROW){

Matter.Body.applyForce(ball.body,ball.body.position,{x:55,y:-60});

}

}
