
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var world;
radius=40;
var groundObj,leftwall,rightwall,leftwall2,rightwall2;


function setup() {
  createCanvas(1800,700);

  engine = Engine.create();
  world = engine.world;

  var ball_options ={
    isStatic:false,
    restitution:0.3,
    friction:0,
    density:1.2
  }
  
  groundObj = new Ground(width/2,670,width,20);
  leftwall = new Ground(1000,600,20,120);
  rightwall = new Ground(700,600,20,120);

  leftwall2 = new Ground(1350,600,20,120);
  rightwall2 = new Ground(1700,600,20,120);

  ball= Matter.Bodies.circle(250,650,radius/2,ball_options);
  World.add(world,ball);
  Engine.run(engine);
  rectMode(CENTER);

}


function draw() 
{
  rectMode(CENTER);
  background(51);
  Engine.update(engine);
  
  ellipse(ball.position.x,ball.position.y,radius,radius);

  groundObj.display();
  leftwall.display();
  rightwall.display();
  rightwall2.display();
  leftwall2.display();
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    Matter.Body.applyForce(ball,ball.position,{x:50,y:-80});
  }
}