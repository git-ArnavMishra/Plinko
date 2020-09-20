const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var engine, world;
var particles = [];
var plinkos = [];
var divisions = [];
var divisionsHeight = 300;
var ground;
var count = 0;


function setup() {
  var canvas = createCanvas(800,900);
  engine = Engine.create();
  world = engine.world;
  for (var k = 0; k <=width; k = k + 80){
    divisions.push(new Division(k, height - divisionsHeight/2, 10,divisionsHeight));
  }
  
  for (var j = 40; j <=width; j=j+50){

    plinkos.push(new Plinko(j,75,20));
  }
  for (var j = 15; j <=width-10; j=j+50)
  {
    plinkos.push(new Plinko(j,175,20));
  }
  ground =  new Ground(400,890,800, 30);
  
}

function draw() {
  background(0,0,0);
  Engine.update(engine);
  if(frameCount%60===0){
    particles.push(new Particle(random(0, 800), 10,20, random(0,255), random(0,255), random(0,255),random(0,255), random(0,255), random(0,255),random(0,255), random(0,255), random(0,255)));
  }
  for (var j = 0; j < plinkos.length;j++){
    plinkos[j].display();
  }
  for (var k = 0; k < divisions.length;k++){
    divisions[k].display();
  }
  for (var k = 0; k < particles.length;k++){
    particles[k].display();
  }

  
    //count = count +1;
    //var particle = new Plinko(random(width/2-10, width/2+10), 10,20);

    //particle.display();
    //Matter.Body.setStatic(particle.body,false);
    //particles.push(particle);
    //particles[count] = new Particle(random(width/2-10, width/2+10), 10,10);
    //particles[count].display();
    //particles.push(new Particle(random(width/2-10, width/2+10), 10,10));
  //}
  ground.display();

 
  drawSprites();
}