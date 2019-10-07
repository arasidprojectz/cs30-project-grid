class Bullet {
  constructor(pX, pY) {
    this.bulletX = pX; 
    this.bulletY = pY; 
    this.bulletDX = 0;
    this.bulletDY = 0;
    this.radius = 15;   
    this.angle = 0;
  }
    
  displayBullets() {
    image(images.bulletImg, this.bulletX, this.bulletY, this.radius, this.radius);
  }

  update() {
    this.bulletX += this.bulletDX;
    this.bulletY += this.bulletDY;
  }

  shootBullets() {
    this.angle = player.aimAngle;
    this.bulletDX = player.bulletDistance * cos(this.angle)*5;
    this.bulletDY = player.bulletDistance * sin(this.angle)*5;
  }
} 


