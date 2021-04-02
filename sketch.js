
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    ball1 = new ball(400,300)
	ball2 = new ball(410,290)
	ball3 = new ball(420,310)
	ball4 = new ball(430,280)
	ball5 = new ball(440,320)
	ball6 = new ball(450,270)
	ball7 = new ball(460,330)
	ball8 = new ball(470,260)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  ball6.display();
  ball7.display();
  ball8.display();
  

  drawSprites();
 
}



