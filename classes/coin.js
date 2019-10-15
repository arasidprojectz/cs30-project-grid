class Coin {
  constructor(x, y) {
    this.coinX = x;
    this.coinY = y;
    this.coinSize = 20;
    this.coinPoints = 0;
    this.interact = false;
    this.isCollide = false;
  }
  
  // Display a image
  displayCoin() {
    image(images.coinImg, this.coinX, this.coinY, this.coinSize, this.coinSize);
  }

  // Check if player collide with coins, true, add one to coin score
  collisionWithPlayer() {
    this.interact = collideRectRect(this.coinX, this.coinY, this.coinSize, this.coinSize, player.playerX, player.playerY, player.playerWidth, player.playerHeight);
    if (this.interact === true && !this.isCollide) {
      sounds.coinSound.setVolume(0.5);
      sounds.coinSound.play();
      setScore.coinScore += 1;
      this.isCollide = true;
    } 
    if (this.isCollide === true && !this.interact) {
      this.isCollide = false;
    }
  } 
}    