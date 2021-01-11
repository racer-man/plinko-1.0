const Engine = Matter.Engine
const World = Matter.World
const Events = Matter.Events
const Bodies = Matter.Bodies  

var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 300;
var score = 0;
var backgroundIMG;
var ground;
 
function preload(){
backgroundIMG = loadImage("bgbg.jpg");
}

function setup() {
  createCanvas(800,800);

 engine = Engine.create();
 world = engine.world;
 ground = new Ground(200,790,2050,20);
 
 for (var k = 0; k <=width; k = k + 80){
   divisions.push(new Divisions(k, height-divisionHeight/2,10, divisionHeight))
 }

 for (var j = 75; j <=width; j=j+50){
   plinkos.push(new Plinko(j,75))}

   for (var j = 50; j <=width-10 ; j=j+50){
    plinkos.push(new Plinko(j,175))
  }

  for (var j = 75; j <=width; j=j+50){
    plinkos.push(new Plinko(j,275))
  }

  for (var j = 50; j <=width-10; j=j+50){
    plinkos.push(new Plinko(j,375))
  }
  
 
}

function draw() {
  strokeWeight(5);
  



  background(backgroundIMG);
 
  Engine.update(engine);
  for (var i = 0; i<divisions.length; i++){
    divisions[i].display();
  }

  for (var i = 0; i<plinkos.length; i++){
    plinkos[i].display();
  }

  if (frameCount% 60 === 0){
    particles.push(new Particle(random(width/2 -30,width/2 +30),10,10))
    score++;
  }

  for (var i = 0; i<particles.length; i++){
    particles[i].display();
  }
  
}