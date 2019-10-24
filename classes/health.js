class Health {
  constructor(x, y, hHP, hMax) {
    this.x = x;
    this.y = y;
    this.hHP = hHP;
    this.hMax = hMax;
    this.rectWidth = 200;
    this.rectHeight = 50;
  }

  checkColor() {
    if (this.hHp < 25)
    {
      fill(255, 0, 0);
    }  
    else if (this.hHp < 50)
    {
      fill(255, 200, 0);
    }
    else
    {
      fill(0, 255, 0);
    }
  }

  drawBar() {
    stroke(0);
    noFill();
    rect(this.x, this.y, this.rectWidth, this.rectHeight);
  }
}

class PlayerHealth extends Health {
  constructor(x, y) {
    super(x, y, 100, 100);
    this.drawRectW = (this.hHP/this.hMax) * this.rectWidth;
  }  

  drawBar() {

  }

  checkHealth() {
    
  }
}