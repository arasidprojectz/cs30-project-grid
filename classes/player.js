class Player {
  constructor(x, y) {
    this.playerX = x; 
    this.playerY = y; 
    this.playerDX = 4;
    this.playerDY = 4;
    this.playerWidth = 100; 
    this.playerHeight = 150; 
    this.W = 87;
    this.A = 65;
    this.S = 83;
    this.D = 68;
    this.aimAngle = 0;
    this.bulletDistance = 0;
  }

  // Display image
  displayPlayer() {
    image(images.playerImg, this.playerX, this.playerY, this.playerWidth, this.playerHeight);
  }

  // Calculate Distance from player postion to mouse postion
  angleOfBullets(mY, mX) {
    this.aimAngle = atan2(this.playerY - mY,this.playerX - mX);
    this.bulletDistance = -10;
  }

  // Move using WASD && can not go off screen
  movePlayer() { 
    if (keyIsDown(this.D) && this.playerX < width - this.playerWidth) {
      this.playerX += this.playerDX;
    } 
    if (keyIsDown(this.A) && this.playerX > 0) {
      this.playerX -= this.playerDX;
    } 
    if (keyIsDown(this.W) && this.playerY > 0) {
      this.playerY -= this.playerDY;
    } 
    if (keyIsDown(this.S) && this.playerY < height - this.playerHeight) {
      this.playerY += this.playerDY;
    }
  }

}
