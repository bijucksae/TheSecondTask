let systems = [];
let g; // gravity
let f; // friction
let maxParticles = 100;
let particleSize = 5;
let colors = [];

function setup() {
  createCanvas(720, 400);
  // system = new ParticleSystem(createVector(width / 2, 50));
  g = createVector(0, 0.05);
  f = createVector(0, -0.01);
}

function draw() {
  background(0, 50);

  let mousePos = createVector(mouseX, mouseY);
  let newSystem = new FireSystem(mousePos);
  systems.push(newSystem);

  for (let i = 0; i < systems.length; i++) {
    systems[i].addParticle();
    systems[i].applyGravity(g);
    systems[i].applyFriction(f);
    systems[i].run();
  }

  if(systems.length > 10){
    systems.splice(0, 1);
  }
}