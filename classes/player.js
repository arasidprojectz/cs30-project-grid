class Player {
  constructor(x, y) {
    this.playerX = x; 
    this.playerY = y; 
    this.playerDx = 4;
    this.playerDy = 4;
    this.playerWidth = 100; 
    this.playerHeight = 150; 
    this.W = 87;
    this.A = 65;
    this.S = 83;
    this.D = 68;
    this.aimAngle = 0;
    this.bulletDistance = 0;
    this.interact = false;
  }

  displayPlayer() { // Display Image of Player
    image(images.playerImg, this.playerX, this.playerY, this.playerWidth, this.playerHeight);
  }

  angleOfBullets(mX, mY) {
    this.aimAngle = atan2(this.playerY - mY,this.playerX - mX);
    this.bulletDistance = -10;
  }

  movePlayer() { // Move using WASD && Image can not go off screen
    if (keyIsDown(this.D) && this.playerX < width - this.playerWidth) {
      this.playerX += this.playerDx;
    } 
    if (keyIsDown(this.A) && this.playerX > 0) {
      this.playerX -= this.playerDx;
    } 
    if (keyIsDown(this.W) && this.playerY > 0) {
      this.playerY -= this.playerDy;
    } 
    if (keyIsDown(this.S) && this.playerY < height - this.playerHeight) {
      this.playerY += this.playerDy;
    }
  }

}
