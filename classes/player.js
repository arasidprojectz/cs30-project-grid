class Player {
  constructor(x, y) {
    this.playerX = x; 
    this.playerY = y;
    this.playerDX = 2.5;
    this.playerDY = 2.5; 
    this.scaler = 0.08;
    this.playerWidth = images.playerImg.width*this.scaler;
    this.playerHeight = images.playerImg.height * this.scaler;
    this.W = 87;
    this.A = 65;
    this.S = 83;
    this.D = 68;
    this.aimAngle = 0;
    this.bulletDistance = 0;
    this.direction = "";
    this.isWalkable = false;
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
      this.direction = "right";
      if (this.isWalkable === true) {
        this.playerX += this.playerDX;
      }
    } 
    else if (keyIsDown(this.A) && this.playerX > 0) {
      this.direction = "left";
      if (this.isWalkable === true) {
        this.playerX -= this.playerDX;
      }
    } 
    else if (keyIsDown(this.W) && this.playerY > 0) {
      this.direction = "up";
      if (this.isWalkable === true) {
        this.playerY -= this.playerDY;
        this.isWalkable = false; 
      }
    } 
    else if (keyIsDown(this.S) && this.playerY < height - this.playerHeight) {
      this.direction = "down";
      if (this.isWalkable === true) { 
        this.playerY += this.playerDY;
      }
    }
  }

  collideWithTile() {
    if (this.direction === "up") {
      let gridX = floor((this.playerX + this.playerWidth/2)/grid.cellW);
      let gridY = floor(this.playerY/grid.cellH); 
      if (grid.myMap[gridY][gridX] === "." || grid.myMap[gridY][gridX] === "G") {
        this.isWalkable = true;
      }
      else {
        this.isWalkable = false;
      }
    }
    else if (this.direction === "down") {
      let gridX = floor((this.playerX + this.playerWidth/2)/grid.cellW);
      let gridY = floor((this.playerY + this.playerHeight)/grid.cellH); 
      if (grid.myMap[gridY][gridX] === "." || grid.myMap[gridY][gridX] === "G") {
        this.isWalkable = true;
        console.log(gridX, gridY);
      }
      else {
        this.isWalkable = false;
      }
    }
    else if (this.direction === "left") {
      let gridX = floor((this.playerX )/grid.cellW);
      let gridY = floor((this.playerY + this.playerHeight/2)/grid.cellH); 
      if (grid.myMap[gridY][gridX] === "." || grid.myMap[gridY][gridX] === "G") {
        this.isWalkable = true;
      }
      else {
        this.isWalkable = false;
      }
    }
    else if (this.direction === "right") {
      let gridX = floor((this.playerX+this.playerWidth)/grid.cellW);
      let gridY = floor((this.playerY + this.playerHeight/2)/grid.cellH); 
      if (grid.myMap[gridY][gridX] === "." || grid.myMap[gridY][gridX] === "G") {
        this.isWalkable = true;
      }
      else {
        this.isWalkable = false;
      }
    }
  }
}
a