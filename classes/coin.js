class Coin {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.imgSize = 20;
    this.coinPoints = 0;
    this.interactionWPlayer = false;

  }
  
  displayCoin() {
    image(images.coinImg, this.x, this.y, this.imgSize, this.imgSize);
  }

  coinCollision() {
    this.interactionWPlayer = collideRectCircle(this.x, this.y, this.imgSize, this.imgSize, player.x, player.y, player.playerWidth, player.playerHeight);
    if (this.interactionWPlayer === true) {
      this.coinPoints += 1;
    }
  }

  keepCoinScore() {
    fill(255);
    noStroke(255);
    textSize(40);
    textLeading(10); 
    text("Coins:" + coinPoints , width/2, height/2);
  }
}    