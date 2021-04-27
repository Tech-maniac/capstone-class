const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingshot;

var gameState = "onSling";

var score = 0;


function preload()
{
    bg= loadImage("images/bg.jpg")
}
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
 

    box1 = new Box(100,350,70,70);
    box2 = new Box(200,350,70,70);
    pig1 = new Pig(900, 350);
 

    box3 = new Box(300,350,70,70);
    box4 = new Box(400,350,70,70);
    


    box5 = new Box(500,350,70,70);

}

function draw(){

        background(bg);
    
     
    
    Engine.update(engine);
    //strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();



    box3.display();
    box4.display();
    



    box5.display();
textSize(30);
text(" x : "+mouseX+" y :"+mouseY,mouseX,mouseY);

}


