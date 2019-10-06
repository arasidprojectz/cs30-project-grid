class Bullet {
  constructor(pX, pY) {
    this.bulletX = pX; 
    this.bulletY = pY; 
    this.bulletDX = 0;
    this.bulletDY = 0;
    this.radius = 10;   
    this.angle = 0;
  }
    
  displayBullets() {
    image(images.bulletImg, this.bulletX, this.bulletY, this.radius*2, this.radius*2);
  }

  update() {
    this.bulletX += this.bulletDX;
    this.bulletY += this.bulletDY;
  }

  shootBullets() {
    this.angle = player.aimAngle;
    this.bulletDX = player.bulletDistance * cos(this.angle);
    this.bulletDY = player.bulletDistance * sin(this.angle);
  }
} 


