// Al Rasid Mamun
// Sept 9, 2019


let player;
let gameSetup;
let images;
let sounds;
let enemy = [];
let bullets = [];
let coins = [];

function preload() {
  images = {
    bgImg: loadImage("assets/images/background.jpg"),
    playerImg: loadImage("assets/images/gunfighter.png"),
    bulletImg: loadImage("assets/images/fire-ball.png"),
    enemyImg: loadImage("assets/images/enemy.png"),
    coinImg: loadImage("assets/images/coin.png"),
  }; 
  sounds = {
    bgSound: loadSound("assets/sounds/background-music.mp3"),
    coinSound: loadSound("assets/sounds/collet-coin.mp3"),
  };
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  player = new Player(width/2, height/2);
  enemy.push(new Enemy(random(width - player.playerX), random(height - player.playerY)));  
  coins.push(new Coin(random(width - player.playerX), random(height - player.playerY)));
  gameSetup = {
    playGame: false,
    counter: 0, 
    respawnEnemy: 0,
    respawnCoin: 0,
    enemyTime: 6000,
    coinTime: 5000,
    coinScore: 0,
    killScore: 0,
  };
}

function draw() {
  background(images.bgImg);
  if (gameSetup.playGame === true) {
    modeGame();
  }  
  else if (player.playerHp <= 0) {
    gameOver();
  }
  else {
    modeMenu();
  }
}

// Bullets

function fireBullets() {
  for (let i=0; i<bullets.length; i++) {
    bullets[i].displayBullets();
    bullets[i].shootBullets();
    bullets[i].update();
  }
}

function mousePressed() {
  bullets.push(new Bullet(player.playerX, player.playerY, mouseX, mouseY));  
}

// Enemy 

function generateEnemy() {
  if (millis() > gameSetup.respawnEnemy + gameSetup.enemyTime) {
    enemy.push(new Enemy(random(width), random(height)));  
    gameSetup.respawnEnemy = millis();
  }  
}

function enemyRespawnRandom() {
  for (let i=0; i<enemy.length; i++) {
    enemy[i].displayEnemy();
    enemy[i].update();
    enemy[i].bounceEnemy();
    enemy[i].interactWPlayer();
    enemy[i].collisionWithBullets();
    if (enemy[i].bulletIsCollide === true) {
      enemy.splice(i, 1);
    }
  } 
}

// Coins

function generateCoins() {
  if (millis() > gameSetup.respawnCoin + gameSetup.coinTime) {
    coins.push(new Coin(random(width - player.playerX), random(height - player.playerY)));
    gameSetup.respawnCoin = millis();
  }
} 

function coinsRespawnRandom() {
  for (let i=0; i<coins.length; i++) {
    coins[i].displayCoin();
    coins[i].collisionWithPlayer();
    if (coins[i].isCollide === true) {
      coins.splice(i, 1);
    }
  }
}

function drawCoinsScore() {
  fill(255);
  noStroke(255);
  textSize(40);
  textLeading(10); 
  text("Coins: " + gameSetup.coinScore, width/2, height - 20);
}

// Game States 

function modeMenu() { 
  textAlign(CENTER, CENTER);
  fill(255);
  textSize(30);
  strokeWeight(5);
  textLeading(10);
  text("VIROATTACK", width/2, height/2 - 100);
  text("Move Player using WASD, W: Up, S: Down, A: Left, D: Right", width/2, height/2 - 50);
  text("WARNING: Avoid Virus, if player collide with them, therefore player health decrease by One", width/2, height/2);
  text("PRESS ENTER TO START GAME!", width/2, height/2 + 50);
}

function modeGame() {
  player.displayPlayer();
  player.movePlayer();
  player.angleOfBullets(mouseX, mouseY);
  player.drawText();
  generateEnemy(); 
  enemyRespawnRandom();
  generateCoins();
  coinsRespawnRandom();
  timeSurvived();
  drawCoinsScore();
  fireBullets();
}

function timeSurvived() {
  gameSetup.counter++;
  fill(255);
  noStroke(255);
  textSize(40);-
  textLeading(10); 
  text("Survived: " + gameSetup.counter, width/2, height - 20);
}

function gameOver() {
  gameSetup.coinScore = 
  fill(255);
  noStroke(255);
  textSize(40);
  textLeading(10); 
  text("Coins: " + gameSetup.coinScore, width/2, height/2);
}

function keyPressed() {
  if (keyCode === 13) { // Key Enter 
    gameSetup.playGame = true;
  }
}