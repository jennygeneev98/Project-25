const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world,object;

var dustbinIMG,dustbinSprite;

function preload()
{

	dustbinIMG=loadImage("dustbingreen.png")
	//packageIMG=loadImage("package.png")

}

function setup() {
	createCanvas(1200,300);

	engine = Engine.create();
	world = engine.world;

	//groundSprite=createSprite(width/2, height-35, width,10);
	//groundSprite.shapeColor = ("yellow")

	paper1 = new Paper(50,100,50)
	World.add(world, paper1)
	
	dustbinSprite=createSprite(1060,160, 10,10);
	dustbinSprite.addImage(dustbinIMG)
	dustbinSprite.scale=0.6

box1 = new Bucket(930,210,20,100);
	//box2 = new Bucket(1040,250,200,20);
box3 = new Bucket(1150,210,20,100);

	//World.add(world, box1);
	//World.add(world, box2);
	//World.add(world, box3);

	//Create a Ground
	ground = Bodies.rectangle(width/2, height-35, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	


	Engine.run(engine);
  
}


function draw() {
  background(180);
  rectMode(CENTER);
  fill ("yellow")
  rect(ground.position.x,ground.position.y,width,10)
  
  paper1.display();
  box1.display();
 // box2.display();
  box3.display();
  drawSprites();
 // keyPressed();
  
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:550,y:-550});
	}
}

