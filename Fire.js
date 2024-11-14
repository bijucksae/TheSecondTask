class Fire {
  constructor(position) {
      this.acceleration = createVector(0, 0);
      this.velocity = createVector(random(-1, 1), random(-1, 0));
      this.position = position.copy();
      this.lifespan = 255;
      this.size = particleSize;
      this.color = random(colors);
      this.blur = random(1,5);
  }

  applyForce(force) {
    this.acceleration.add(force);
}

applyGravity(gravity){
    this.acceleration.add(gravity);
  }

  applyFriction(friction) {
    this.velocity.mult(friction);
  }

  update() {
      this.velocity.add(this.acceleration);
      this.position.add(this.velocity);
      this.lifespan -= 2;
      this.acceleration.mult(0);
  }

  display() {
      fill(this.color.levels[0], this.color.levels[1], this.color.levels[2], this.lifespan);
      noStroke();
      ellipse(this.position.x, this.position.y, this.size + this.blur, this.size + this.blur);
  }

  isDead() {
      return this.lifespan < 0;
  }
}