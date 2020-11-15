
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
roof=new Roof(400,200,350,30)

bob1=new Bob(400,450,50)

bob2=new Bob(347,450,50) 

bob3=new Bob(295,450,50)

bob4=new Bob (452,450,50)

bob5=new Bob(505,450,50)

rope1=new Rope(bob1.body,roof.body,{x:0,y:0})

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(200);
  
roof.display();

bob1.display();

bob2.display();

bob3.display();

bob4.display();

bob5.display();

rope1.display();

  drawSprites();
 



}



