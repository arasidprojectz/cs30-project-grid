class Player { // Created the Class for Player
  constructor(x, y) {
    this.x = x; 
    this.y = y; 
    this.dx = 5;
    this.dy = 5;
    this.playerWidth = 150; 
    this.playerHeight = 200; 
    this.W = 87;
    this.A = 65;
    this.S = 83;
    this.D = 68;
    this.coinInteraction = false; 
  }

  displayPImg() { // Display Image of Player
    imageMode(CORNER);
    image(images.playerImg, this.x, this.y, this.playerWidth, this.playerHeight);
  }

  movePlayer() { // Move function - WASD && Imgae can not go off screen
    if (keyIsPressed && keyCode === this.D && this.x < width - this.playerWidth) {
      this.x += this.dx;
    } 
    if (keyIsPressed && keyCode === this.A && this.x > 0) {
      this.x -= this.dx;
    } 
    if (keyIsPressed && keyCode === this.W && this.y > 0) {
      this.y -= this.dy;
    } 
    if (keyIsPressed && keyCode === this.S && this.y < height - this.playerHeight) {
      this.y += this.dy;
    }
  }
}
