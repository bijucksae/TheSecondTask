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

    for(let subsytem of this.subsytems){
      subsytem.run();
    }

  applyGravity(g) {
    for(let p of this.particles){
     this.applyGravity(g);
    }
    for(let subsytem of this.subsytems){
      subsytem.applyGravity(g);
    }
  }
}
  applyFriction(friction){
    for(let p of this.particles){
      p.applyFriction(f);
    }
    for(let subsytem of this.subsytems){
      subsytem.applyFriction(f);
    }
  }
}