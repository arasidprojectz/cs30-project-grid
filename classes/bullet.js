class Bullet {
    constructor(x, y) {
        this.x = x; 
        this.y = y; 
        this.radius = 15;
        this.mousePos;
        this.myHeading;
    }
    
    drawCircle() {
        fill((255,0,0));
        stroke(0);
        strokeWeight(2);
        ellipse(this.x, this.y, this.radius, this.radius);
    }
    
    drawAim() {
        fill(0);
        stroke(0);
        strokeWeight(4);
        line()
    }

     moveCircle(mX, mY) {
         this.mousePos = createVector();
         this.heading = mousePos.heading(mX, mY);

         
     }


} 