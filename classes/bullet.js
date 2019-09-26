class Bullet {
  constructor(pX, pY, mX, mY) {
    this.x = pX; 
    this.y = pY; 
    this.mX = mX; 
    this.mY = mY;
    this.dx = 5;
    this.dy = 5;
    this.radius = 15;   
  }
    
  displayBImg() {
    image(images.bulletImg, this.x, this.y, this.radius, this.radius);
  }
    
  toMousePos() {
    if (this.mY < this.y){
      this.y -= this.dy*5;
    } 
    else if (this.mY > this.y) {
      this.y += this.dy*5;
    }
    if (this.mX < this.x){
      this.x -= this.dx*5;
    } 
    else if (this.mX > this.x){
      this.x += this.dx*5;
    }
  }
} 


