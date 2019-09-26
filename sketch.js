// 
// Al Rasid Mamun
// Sept 9, 2019


let player;
let enemy;
let gameSetup;
let images;
let sounds;
let collision;
let coins = [];
let bullets = [];


function setup() {
  createCanvas(windowWidth, windowHeight);
  player = new Player(width/2, height/2);
  enemy = new Enemy(random(width), random(height));
  gameSetup = {
    respawnTime: 0,
    addTime: 10000,
    gameScore: 0,
  };

  images = {
    bgImg: loadImage("assets/background.jpg"),
    playerImg: loadImage("assets/gunfighter.png"),
    bulletImg: loadImage("assets/fire-ball.png"),
    enemyImg: loadImage("assets/enemy.png"),
    coinImg: loadImage("assets/coin.png"),
  };  

  collision = {
    enemyInteractionWPlayer: false,
    bulletInteractionWEnemy: false,
    coinInteractionWPlayer: false,
  }
}


function draw() {
  imageMode(CORNER);
  background(images.bgImg);

  imageMode(CENTER);
  player.displayPImg();
  player.movePlayer();
  
  enemy.displayE();
  enemy.update();
  enemy.bounceImg();
  
  // keepGameScore();
  createCursor();
  // generateCoins();
  fireBullets();
  
}

function fireBullets() {
  for (let i=0; i<bullets.length; i++) {
    bullets[i].displayBImg();
    bullets[i].toMousePos();
  }
}

function mousePressed() {
  bullets.push(new Bullet(player.x, player.y, mouseX, mouseY));  
}

// function generateCoins() {
//   if (millis() > gameSetup.respawnTime + gameSetup.addTime) {
//     coins.push(new Coin(random(width), random(height)));
//     gameSetup.respawnTime = millis();

//   }
//   for (let i=0; i<coins.length; i++) {
//     coins[i].displayCImg();
//   }
// } 

function createCursor() {
  stroke("grey");
  strokeWeight(6);
  beginShape();
  vertex(0 + mouseX, 40 + mouseY);
  vertex(0 + mouseX, -5 + mouseY);
  vertex(34 + mouseX, 25 + mouseY);
  vertex(15 + mouseX, 25 + mouseY);
  vertex(0 + mouseX, 40 + mouseY);
  endShape();
}


// function keepGameScore() {
//   let gameScore = "0";
//   fill(0);
//   noStroke(255);
//   textSize(40);
//   textLeading(10); 
//   text("Score:" + gameScore , width, height);
// }