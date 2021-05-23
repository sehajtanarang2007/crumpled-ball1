
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ground=new Ground(400,680,800,20)
 dustbin1=new DustBin(600,660,200,20)
 dustbin2=new DustBin(500,620,20,100)
 dustbin3=new DustBin(700,620,20,100)

 paper=new Paper(100,500,20)
 	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display()
  drawSprites();
 dustbin1.display()
 dustbin2.display()
 dustbin3.display()
 paper.display()
}
function keyPressed(){
	if(keyCode==UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85})
	}
}



