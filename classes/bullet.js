class Bullet {
  constructor(pX, pY) {
    this.bulletX = pX; 
    this.bulletY = pY; 
    this.bulletDX = 0;
    this.bulletDY = 0;
    this.angle = 0;
  }
  
  // Display a image 
  // displayBullets() {
  //   image(images.bulletImg, this.bulletX, this.bulletY, this.radius*2, this.radius*2);
  // }

  // Update x and y values with dx and dy
  update() {
    this.bulletX += this.bulletDX;
    this.bulletY += this.bulletDY;
  }

  // Use angle given by player, change the values of dx and dy
  shootBullets() {
    this.angle = player.aimAngle;
    this.bulletDX = player.bulletDistance * cos(this.angle)*6;
    this.bulletDY = player.bulletDistance * sin(this.angle)*6;
  }
} 

class Fire extends Bullet {
  constructor(pX, pY) {
    super(pX, pY);
    this.radius = 15;
  }

  displayBullets() {
    image(images.bulletImg, this.bulletX, this.bulletY, this.radius*2, this.radius*2);
  }
} 

class Boomerang extends Bullet {
  constructor(pX, pY) {
    super(pX, pY);
    this.radius = 15;
  }

  displayBullets() {
    image(images.boomerangImg, this.bulletX, this.bulletY, this.radius*2, this.radius*2);
  }
}