class FireSystem {
  constructor(position) {
      this.origin = position.copy();
      this.particles = [];
      this.subsytems = [];
  }

  addParticle() {
    if(this.particles.length < maxParticles){
      this.particles.push(new Particle(this.origin));
  }
}

addSubsystem(subsytem){
  this.subsytems.push(subsytem);
}

run() {
  for (let i = this.particles.length-1; i >= 0; i--) {
      let p = this.particles[i];
      p.update();
      p.display();
      
      if (p.isDead()) {
        this.particles.splice(i, 1);
      }
    }

  applyGravity(g) {
     this.applyForce(g);
  }
  applyForce(force) {
      for (let p of this.particles) {
          p.applyForce(force);
      }
  }

  }
}