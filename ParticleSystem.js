class ParticleSystem {
  constructor(position) {
    this.origin = position.copy(); 
    this.particles = [];
    this.subsystems = []; 
  }

  addParticle() {
    if (this.particles.length < maxParticles) {
      this.particles.push(new Particle(this.origin)); 
    }
  }

  addSubsystem(subsystem) {
    this.subsystems.push(subsystem); 
  }

  run() {
    for (let i = this.particles.length - 1; i >= 0; i--) {
      let p = this.particles[i];
      p.update();
      p.display();

      if (p.isDead()) {
        this.particles.splice(i, 1); 
      }
    }

    for (let subsystem of this.subsystems) {
      subsystem.run();
    }
  }

  applyGravity(gravity) {
    for (let p of this.particles) {
      p.applyGravity(gravity);
    }
    for (let subsystem of this.subsystems) {
      subsystem.applyGravity(gravity); 
    }
  }
  applyFriction(friction) {
    for (let p of this.particles) {
      p.applyFriction(friction);
    }
    for (let subsystem of this.subsystems) {
      subsystem.applyFriction(friction); 
    }
  }
}