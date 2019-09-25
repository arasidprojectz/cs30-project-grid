class Tree {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.width = 50;
    this.height = 100;
    this.respawnTime = 5000;
  }

  draw() {
    fill(0,128,0);
    stroke(0,100,0);
    strokeWeight(4);
    rect(this.x, this.y, this.width, this.height);
  }
}