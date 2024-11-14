class Fire {
  constructor(position) {
      this.acceleration = createVector(0, 0);
      this.velocity = createVector(random(-1, 1), random(-1, 0));
      this.position = position.copy();
      this.lifespan = 255;
      this.size = particleSize;
      this.color = random(colors);
  }

  run() {
      this.update();
      this.display();
  }

  applyForce(force) {
      this.acceleration.add(force);
  }

  applyGravity(gravity){
    this.acceleration.add(gravity);
  }

  applyFriction(friction);{
    this.velocity.add(friction);
  }

  update() {
      this.velocity.add(this.acceleration);
      this.position.add(this.velocity);
      this.lifespan -= 2;

      this.acceleration.set(0, 0);
  }

  display() {
      stroke(200, this.lifespan);
      strokeWeight(2);
      fill(127, this.lifespan);
      ellipse(this.position.x, this.position.y, this.w, this.w);
  }

  isDead() {
      return this.lifespan < 0;
  }
}