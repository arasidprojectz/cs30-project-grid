class Bullet {
  constructor() {
    this.x = 0; 
    this.y = 0; 
    this.dx = 0;
    this.dy = 0;
    this.ax = 5;
    this.ay= 5;
    this.radius = 15;
    this.mousePos;
    this.mouseHeading;
    
  }
    
  drawCircle(posX, posY) {
    fill((255,0,0));
    stroke(0);
    strokeWeight(2);
    translate(posX, posY);
    rotate(PI/2);
    ellipse(this.x, this.y, this.radius, this.radius);
  }
    
  drawAim() {
    fill(0);
    stroke(0);
    strokeWeight(4);
  }

  moveCircle() {
    this.dx += this.ax;
    this.dy += this.ay;
    this.x += this.dx;
    this.y += this.dy;
  }


} 