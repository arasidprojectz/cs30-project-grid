// class Enemy {
//   constructor(tempX, tempY, tempWidth, tempHeight) {
//     this.x = tempX;
//     this.y = tempY;
//     this.width = tempWidth;
//     this.height = tempHeight;
//     this.collision = false;
//   }
//   display() {
//     rect(this.x, this.y, this.width, this.height);
//   }

//   interect() {
//     this.collision = collideRectCircle(characterSetup.bulletX, characterSetup.y, characterSetup.bulletSize, characterSetup.bulletSize, this.x, this.y, this.width, this.height);
//     if (this.collision === true) {
//       fill(0);
//       rect(this.x, this.y, this.width, this.height);
//     }
//   }
// }    