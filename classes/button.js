class Button {
  constructor(x, y) {
    this.btX = x;
    this.btY = y; 
    this.btW = 350;
    this.btH = 200;
    this.btTitleW = 240;
    this.btTitleH = 60;
  }

  displayNewGameTitle() {
      imageMode(CENTER);
      image(images.newGameTitle, this.x, this.y, this.btTitleW, this.btTitleH);
    }
    
  checkHovered(mX, mY) {
      let distance = int(dist(this.x, this.y, mX, mY));
      if (distance < 50) {
      imageMode(CENTER);
      image(images.btHImg, this.x, this.y, this.btW, this.btH);
      } else {
      imageMode(CENTER);
      image(images.btNHImg, this.x, this.y, this.btW, this.btH);
      }  
    }

  newButtonPressed() {
    let distance = int(dist(this.x, this.y, gameSetup.cursorX, gameSetup.cursorY));
    if (distance < 50) {
      states.gameState = "newGame";
    }   
  }
}