class Player {
    constructor(x, y) {
        this.x = x; 
        this.y = y; 
        this.dx = 5;
        this.dy = 5;
        this.playerWidth = 50; 
        this.playerHeight = 100; 
        this.letterW = 87;
        this.letterA = 65;
        this.letterS = 83;
        this.letterD = 68;
    }

    drawPlayer() {
        fill(0,0,255);
        stroke(0);
        strokeWeight(4);
        rect(this.x, this.y, this.playerWidth, this.playerHeight);
    }

    movePlayer() {
        if (keyIsPressed && keyCode === RIGHT_ARROW || keyIsPressed && keyCode === this.letterD) {
            this.x += this.dx;
        } 
        if (keyIsPressed && keyCode === LEFT_ARROW ||keyIsPressed && keyCode === this.letterA) {
            this.x -= this.dx;
        } 
        if (keyIsPressed && keyCode === UP_ARROW || keyIsPressed && keyCode === this.letterW) {
            this.y -= this.dy;
        } 
        if (keyIsPressed && keyCode === DOWN_ARROW ||keyIsPressed && keyCode === this.letterS) {
            this.y += this.dy;
        }
    }
}
