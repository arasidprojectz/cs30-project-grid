class Coin {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.imgSize = 20;
  }
  
  displayCImg() {
    image(images.coinImg, this.x, this.y, this.imgSize, this.imgSize);
  }

  function coinCollision() {

  }
}    