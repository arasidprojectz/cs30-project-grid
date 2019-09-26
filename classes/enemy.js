class Enemy { // Create the Class for Enemy
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.dx = random(2, 4); 
    this.dy = random(2, 4);
    this.imgSize = 50;
    this.bulletInterection = false;
  }

  displayE() { // Display Image of Enemy 
    image(images.enemyImg, this.x, this.y, this.imgSize, this.imgSize);
  }

  update() { // Update x and y with dx and dy
    this.x += this.dx; 
    this.y += this.dy;
  }

  bounceImg() { // Image Bounce of Edge, Don't go off Screen
    if (this.x > width - this.imgSize || this.x < 0) {
      this.dx *= -1;
    } if (this.y > height - this.imgSize || this.y < 0) {
      this.dy *= -1;
    }
  
  }
}
