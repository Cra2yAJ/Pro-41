const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var umberalla, thunderbolt,thunder1 , thunder2, thunder2, thunder4;
var drops;
var database;

function preload(){
   thunder1 = loadImage("images/thunderbolt/1.png");
   thunder2 = loadImage("images/thunderbolt/2.png");
   thunder3 = loadImage("images/thunderbolt/3.png");
   thunder4 = loadImage("images/thunderbolt/4.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    database = firebase.database();
   umberalla = new Umbrella(600,400,50)
if(frameCount % 50 === 0){
    drops = new Drop({x:random(50,1000),y:random(0,400)});
    
}
}

function draw(){
    background("white");
    umberalla.display();
drops.display();
    

    var rand = Math.round(random(1,4));
    switch(rand) {
      case 1: thunderbolt.addImage(thunder4);
              break;
      case 2: thunderbolt.addImage(thunder2);
              break;
      case 3: thunderbolt.addImage(thunder3);
              break;
      case 4: thunderbolt.addImage(thunder1);
              break;
      default: break;
    }
}   

