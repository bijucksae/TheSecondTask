let systems = [];
let gravity;
let friction;
let maxParticles = 100; 
let particleSize = 5;
let colors = []; 

function setup() {
  createCanvas(720, 400);
  gravity = createVector(0, 0.05); 
  friction = createVector(0, -0.01);
  
  for (let i = 0; i < 5; i++) {
    colors.push(color(random(150, 200), random(150, 230), random(250, 255), random(150, 200)));
  }
}

function draw() {
  background(0, 50);

  let mousePos = createVector(mouseX, mouseY);
  let newSystem = new ParticleSystem(mousePos);
  systems.push(newSystem); 

  for (let i = 0; i < systems.length; i++) {
    systems[i].addParticle(); 
    systems[i].applyGravity(gravity);
    systems[i].applyFriction(friction); 
    systems[i].run(); 
  }

  if (systems.length > 10) {
    systems.splice(0, 1);
  }
}
