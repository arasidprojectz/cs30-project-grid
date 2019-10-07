class Enemy {
  constructor(x, y) {
    this.enemyX = x;
    this.enemyY = y;
    this.enemySize = 50;
    this.enemyDx = random(3, 5); 
    this.enemyDy = random(3, 5);
    this.bulletDistance;
    this.playerInteract = false;
    this.playerIsCollide = false;
    this.bulletInteract = false;
  }

  displayEnemy() {
    image(images.enemyImg, this.enemyX, this.enemyY, this.enemySize, this.enemySize);
  }

  update() { // keep adding x through dx and y thorugh dy
    this.enemyX += this.enemyDx; 
    this.enemyY += this.enemyDy;
  }

  bounceEnemy() { // Image Bounce of Edge, Don't go off Screen
    if (this.enemyX > width - this.enemySize || this.enemyX < 0) {
      this.enemyDx *= -1;
    } if (this.enemyY > height - this.enemySize || this.enemyY < 0) {
      this.enemyDy *= -1;
    }
  }

  interactWithPlayer() {
    this.playerInteract = collideRectRect(this.enemyX, this.enemyY, this.enemySize, this.enemySize, player.playerX, player.playerY, player.playerWidth, player.playerHeight);
    if (this.playerInteract === true && !this.playerIsCollide) {
      setScore.playerHP -= 1;
      this.playerIsCollide = true;
    } 
    if (!this.playerInteract && this.playerIsCollide === true) {
      this.playerIsCollide = false;
    }
  }  
}
