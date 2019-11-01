class Enemy {
  constructor(x, y) {
    this.enemyX = x;
    this.enemyY = y;
    // this.enemyDX = random(3, 5); 
    // this.enemyDY = random(3, 5);
    this.enemySize = 50;
    this.bulletDistance;
    this.playerInteract = false;
    this.playerIsCollide = false;
    this.bulletInteract = false;
  }

  // Display a image
  displayEnemy() {
    image(images.enemyImg, this.enemyX, this.enemyY, this.enemySize, this.enemySize);
  }

  // Update x and y values with dx and dy
  // update() { // keep adding x through dx and y thorugh dy
  //   this.enemyX += this.enemyDX; 
  //   this.enemyY += this.enemyDY;
  // }

  // Image Bounce at Edges, if needed so, doesn't go off screen
  // bounceEnemy() {
  //   if (this.enemyX > width - this.enemySize || this.enemyX < 0) {
  //     this.enemyDX *= -1;
  //   } if (this.enemyY > height - this.enemySize || this.enemyY < 0) {
  //     this.enemyDY *= -1;
  //   }
  // }

  updatePosition() {
    let posX = player.playerX - this.enemyX;
    let posY = player.playerY - this.enemyY;

    if (posX > 25) {
      this.enemyX += 1;
    } 
    else {
      this.enemyX -= 1;
    }
    if (posY > 25) {
      this.enemyY += 1;
    } 
    else {
      this.enemyY -= 1;
    }
  }

  // Check if player collide with enemy, true, player health decrease one
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
