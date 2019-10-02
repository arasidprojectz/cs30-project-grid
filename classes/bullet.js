class Bullet {
  constructor(pX, pY) {
    this.x = pX; 
    this.y = pY; 
    this.radius = 15;   
    this.angle;
    this.dx;
    this.dy;
  }
    
  displayBullets() {
    image(images.bulletImg, this.x, this.y, this.radius, this.radius);
  }

  update() {
    this.x += this.dx;
    this.y += this.dy;
  }

  shootBullets() {
    this.angle = random(TWO_PI);
    this.dx = cos(this.angle/180*PI)*5;
    this.dy = sin(this.angle/180*PI)*5;
  }


    
  // toMousePos() {
  //   if (this.mY < this.y){
  //     this.y -= this.dy*5;
  //   } 
  //   else if (this.mY > this.y) {
  //     this.y += this.dy*5;
  //   }
  //   if (this.mX < this.x){
  //     this.x -= this.dx*5;
  //   } 
  //   else if (this.mX > this.x){
  //     this.x += this.dx*5;
  //   }
  // }
} 


