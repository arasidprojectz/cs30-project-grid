class Enemy {
  constructor(x, y) {
    this.enemyX = x;
    this.enemyY = y;
    this.enemySize = 25;
    this.bulletDistance;
    this.playerInteract = false;
    this.playerIsCollide = false;
    this.bulletInteract = false;
  }

  // Display a image
  displayEnemy() {
    image(images.enemyImg, this.enemyX, this.enemyY, this.enemySize, this.enemySize);
  }
  
  // Move the enemy toward the player
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

   // Check the tile if the tile is walkable
  collideWithTile() {
    let gridX = floor((this.enemyX)/grid.cellW);
    let gridY = floor(this.enemyY/grid.cellH); 
    console.log(gridX, gridY);
  }
}
