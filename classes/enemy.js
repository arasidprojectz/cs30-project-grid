class Enemy {
  constructor(x, y) {
    this.enemyX = x;
    this.enemyY = y;
    this.enemyDx = random(2, 4); 
    this.enemyDy = random(2, 4);
    this.enemySize = 50;
    this.interact = false;
    this.isCollide = false;
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

  interactWPlayer() {
    console.log()
    this.interact = collideRectRect(this.enemyX, this.enemyY, this.enemySize, this.enemySize, player.playerX, player.playerY, player.playerWidth, player.playerHeight);
    if (this.interact === true && !this.isCollide) {
      player.playerHp -= 1;
      this.isCollide = true;
    } 
    if (!this.interact && this.isCollide === true) {
      this.isCollide = false;
    }
  }  
}
