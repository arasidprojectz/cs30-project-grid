class Button {
  constructor(x, y) {
    this.btX = x;
    this.btY = y; 
    this.btW = 350;
    this.btH = 200;
    this.buttonTitleW = 240;
    this.buttonTitleH = 60;
  }

  displayNewGameTitle() {
      imageMode(CENTER);
      image(images.newGameTitle, this.x, this.y, this.buttonTitleW, this.buttonTitleH);
    }
    
    checkHovered(mX, mY) {
        let distance = int(dist(this.x, this.y, mX, mY));
        if (distance < 50) {
        imageMode(CENTER);
        image(images.buttonHImg, this.x, this.y, this.buttonW, this.buttonH);
        } else {
        imageMode(CENTER);
        image(images.buttonNHImg, this.x, this.y, this.buttonW, this.buttonH);
        }  
    }

  newButtonPressed() {
    let distance = int(dist(this.x, this.y, gameSetup.cursorX, gameSetup.cursorY));
    if (distance < 50) {
      gameSetup.gameState = "newGame";
    }  
  }
}