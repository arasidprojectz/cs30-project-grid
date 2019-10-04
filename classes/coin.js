class Coin {
  constructor(x, y) {
    this.coinX = x;
    this.coinY = y;
    this.coinSize = 20;
    this.coinPoints = 0;
    this.interact = false;
    this.isCollide = false;
  }
  
  displayCoin() {
    image(images.coinImg, this.coinX, this.coinY, this.coinSize, this.coinSize);
  }

  collisionWithPlayer() {
    this.interact = collideRectRect(this.coinX, this.coinY, this.coinSize, this.coinSize, player.playerX, player.playerY, player.playerWidth, player.playerHeight);
    if (this.interact === true && !this.isCollide) {
      gameSetup.coinScore += 1;
      this.isCollide = true;
    } 
    if (!this.interact && this.isCollide === true) {
      this.isCollide = false;
    }
  } 

  drawText() {
    fill(255);
    noStroke(255);
    textSize(40);
    textLeading(10); 
    text("Coins: " + gameSetup.coinScore, width/2 - 615, height/2 - 200);
  }
}    