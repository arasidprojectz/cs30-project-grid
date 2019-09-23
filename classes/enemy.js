class Enemy {
  constructor(tempX, tempY, tempWidth, tempHeight) {
    this.x = tempX;
    this.y = tempY;
    this.width = tempWidth;
    this.height = tempHeight;
    this.collision = false;
  }
  drawEnemy() {
    fill(0, 0, 0);
    stroke(128,128,128);
    strokeWeight(4);  
    rect(this.x, this.y, this.width, this.height);
  }

  moveEnemy() {

  }

  respawn() {

  }  

  shootBullets() {

  }

  interectWithBullet() {
    this.collision = collideRectCircle(characterSetup.bulletX, characterSetup.y, characterSetup.bulletSize, characterSetup.bulletSize, this.x, this.y, this.width, this.height);
    if (this.collision === true) {
      fill(0);
      rect(this.x, this.y, this.width, this.height);
    }
  }
}    