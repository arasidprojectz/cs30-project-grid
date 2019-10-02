// 
// Al Rasid Mamun
// Sept 9, 2019


let player;
let gameSetup;
let images;
let sounds;
let enemy = [];
let bullets = [];


function setup() {
  createCanvas(windowWidth, windowHeight);
  player = new Player(width/2, height/2);
  enemy.push(new Enemy(random(width), random(height)));  
  gameSetup = {
    respawnTime: 0,
    enemyTime: 8000,
    gameScore: 0,
  };

  images = {
    bgImg: loadImage("assets/background.jpg"),
    playerImg: loadImage("assets/gunfighter.png"),
    bulletImg: loadImage("assets/fire-ball.png"),
    enemyImg: loadImage("assets/enemy.png"),
    coinImg: loadImage("assets/coin.png"),
  };  
}


function draw() {
  background(images.bgImg);
  player.displayPlayer();
  player.movePlayer();
  player.drawText();
  generateEnemy(); 
  respawnEnemy();
  // keepGameScore();
  // createCursor();
  // generateCoins();
  fireBullets();
}

function generateEnemy() {
  for (let i=0; i<enemy.length; i++) {
    enemy[i].displayEnemy();
    enemy[i].update();
    enemy[i].bounceEnemy();
    enemy[i].interactWPlayer();
  } 
}

function respawnEnemy() {
  if (millis() > gameSetup.respawnTime + gameSetup.enemyTime) {
    enemy.push(new Enemy(random(width), random(height)));  
    gameSetup.respawnTime = millis();
  }  
}


function fireBullets() {
  for (let i=0; i<bullets.length; i++) {
    bullets[i].displayBullets();
    bullets[i].update();
    bullets[i].shootBullets();
  }
}

function mousePressed() {
  bullets.push(new Bullet(player.x, player.y));  
}

// function generateCoins() {
//   if (millis() > gameSetup.respawnTime + gameSetup.addTime) {
//     coins.push(new Coin(random(width), random(height)));
//     gameSetup.respawnTime = millis();

//   }
//   for (let i=0; i<coins.length; i++) {
//     coins[i].displayCImg();
//     coins[i].coinCollision();
//     coins[i].keepCoinScore();
//   }
// } 

// function createCursor() {
//   stroke("grey");
//   strokeWeight(2);
//   beginShape();
//   vertex(0 + mouseX, 40 + mouseY);
//   vertex(0 + mouseX, -5 + mouseY);
//   vertex(34 + mouseX, 25 + mouseY);
//   vertex(15 + mouseX, 25 + mouseY);
//   vertex(0 + mouseX, 40 + mouseY);
//   endShape();
// }

// function keepGameScore() {
//   let gameScore = "0";
//   fill(0);
//   noStroke(255);
//   textSize(40);
//   textLeading(10); 
//   text("Score:" + gameScore , width, height);
// }