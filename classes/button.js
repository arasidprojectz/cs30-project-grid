class Button {
  constructor(x, y, mX, mY) {
    this.btX = x;
    this.btY = y; 
    this.btW = 350;
    this.btH = 200;
    this.btTitleW = 240;
    this.btTitleH = 60;
    this.mosX = mX;
    this.mosY = mY;
  }

  checkHovered(mX, mY) {
    let distance = int(dist(this.x, this.y, this.mosX, this.mosY));
    if (distance < 50) {
      imageMode(CENTER);
      image(images.buttonH, this.x, this.y, this.btW, this.btH);
    } else {
      imageMode(CENTER);
      image(images.buttonNH, this.x, this.y, this.btW, this.btH);
    }  
  }
  
  // displayNewGameTitle() {
  //     imageMode(CENTER);
  //     image(images.newGameTitle, this.x, this.y, this.btTitleW, this.btTitleH);
  //   }
    
  // newButtonPressed() {
  //   let distance = int(dist(this.x, this.y, gameSetup.cursorX, gameSetup.cursorY));
  //   if (distance < 50) {
  //     states.gameState = "newGame";
  //   }   
  // }
}