// CS30 Project - Interactive Scene
// Al Rasid Mamun
// Oct 10, 2019
// Extra for Experts:
//  - Polar Coordinates 
//      - Return angle and distance which bullet travels
//  - Add Music
//      - Collet Coin
//      - Shoot Bullets
//      - Game Over
//      - Laugh

let player;
let images;
let sounds;
let setScore;
let setTime;
let setBoolean;
let enemy = [];
let bullets = [];
let coins = [];

function preload() {
  images = { // An object that contains images which are preLoaded
    bgImg: loadImage("assets/images/background.jpg"),
    playerImg: loadImage("assets/images/gunfighter.png"),
    bulletImg: loadImage("assets/images/fire-ball.png"),
    enemyImg: loadImage("assets/images/enemy.png"),
    coinImg: loadImage("assets/images/coin.png"),
  }; 
  sounds = { // An object that contains sounds which are preLoaded
    coinSound: loadSound("assets/sounds/collet-coin.mp3"),
    shootSound: loadSound("assets/sounds/shoot-bullet.mp3"),
    laughSound: loadSound("assets/sounds/laugh.mp3"),
    gameOverSound: loadSound("assets/sounds/game-over.mp3"),

  };
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  player = new Player(width/2, height/2);
  enemy.push(new Enemy(random(width - player.playerX), random(height - player.playerY)));  
  coins.push(new Coin(random(width - player.playerX), random(height - player.playerY)));
  setScore = { // An object that contains Scores Values
    playerHP: 5,
    coinScore: 0,
    killScore: 0,
  };

  setTime = { // An object that contains Time Values
    respawnEnemy: 0,
    respawnCoin: 0,
    enemyTime: 3000,
    coinTime: 6000,
  };

  setBoolean = { // An object that contains Booleans Values
    playGame: false,
    bulletInteract: false,
    bulletIsCollide: false,
    zeroHealth: false,
  };
}

function draw() {
  background(images.bgImg);
  if (setBoolean.playGame === true) { // Runs the game, if playing game is equal to true
    modeGame();
    fill(255, 0, 0);
    noStroke(255);
    textSize(40);
    textLeading(10); 
    textAlign(CENTER, CENTER);
    text("DO NOT PRESS SPACE", width - 230, height/2 - 350);
  }  
  else { // Instruction will show up or keep track of highest Score
    modeMenu();
  }
}

// Game States 
function modeMenu() { // Text shows up
  textAlign(CENTER, CENTER);
  fill(255);
  textSize(30);
  strokeWeight(5);
  textLeading(10);
  text("VIROATTACK", width/2, height/2 - 100);
  text("Move Player Using WASD, Mouse to Aim, Left Mouse Button to Shoot!", width/2, height/2 - 50);
  text("Avoid VIRUS, if player collide with them, player health will decrease by one", width/2, height/2);
  text("PRESS ENTER TO START GAME!", width/2, height/2 + 50);
  text("Coin Score: " + setScore.coinScore, width/2, height/2 + 100);
  text("Kills Score: " + setScore.killScore, width/2, height/2 + 150);
}

function modeGame() {
  makePlayer();
  generateEnemy(); 
  generateCoins();
  enemyRespawnRandom();
  coinsRespawnRandom();
  checkBullets();
  removeBullet();
  playerHealth();
  drawPlayerHP();
  drawCoinsScore();
  drawKillScore();
}

function keyPressed() {
  if (keyCode === 13) { // Key - Enter 
    setBoolean.playGame = true;
  }
  if (keyCode === 32) { // key - Esc
    sounds.laughSound.play();
    setBoolean.playGame = false;
    setScore.coinScore = 0; 
    setScore.killScore = 0;
    modeMenu();
  }
}

// Use player class to get values of player 
function makePlayer() {
  player.displayPlayer();
  player.movePlayer();
  player.angleOfBullets(mouseX, mouseY);
}

function playerHealth() {
  if (setScore.playerHP <= 0) {
    sounds.gameOverSound.play();
    setBoolean.playGame  = false;
  }
}

// Use bullet class to get values of bullets
function checkBullets() {
  for (let i=0; i<bullets.length; i++) {
    bullets[i].displayBullets();
    bullets[i].shootBullets();
    bullets[i].update();
    for (let e=0; e<enemy.length; e++) {
      setBoolean.bulletInteract = collideRectRect(enemy[e].enemyX, enemy[e].enemyY, enemy[e].enemySize, enemy[e].enemySize,
        bullets[i].bulletX, bullets[i].bulletY, bullets[i].radius, bullets[i].radius);
      if (setBoolean.bulletInteract === true && !setBoolean.bulletIsCollide) {
        setBoolean.bulletIsCollide = true;
        bullets.splice(i, 1);
        enemy.splice(e, 1);
        setScore.killScore += 1;
      } 
      if (setBoolean.bulletIsCollide === true && !setBoolean.bulletInteract) {
        setBoolean.bulletIsCollide = false;
      }
    }  
  }
}

function mousePressed() {
  sounds.shootSound.play();
  bullets.push(new Bullet(player.playerX + 50, player.playerY + 50));  
}

function removeBullet() {
  if (bullets.length > 1) {
    bullets.splice(0, 1);
  }
}

// Use enemy class to get values of enemys
function generateEnemy() {
  if (millis() > setTime.respawnEnemy + setTime.enemyTime) {
    enemy.push(new Enemy(random(width - player.playerX), random(height - player.playerY)));  
    setTime.respawnEnemy = millis();
  }  
}

function enemyRespawnRandom() {
  for (let i=0; i<enemy.length; i++) {
    enemy[i].displayEnemy();
    enemy[i].update();
    enemy[i].bounceEnemy();
    enemy[i].interactWithPlayer();
  } 
}

// Use coin class to get values of coins
function generateCoins() {
  if (millis() > setTime.respawnCoin + setTime.coinTime) {
    coins.push(new Coin(random(width - player.playerX), random(height - player.playerY)));
    setTime.respawnCoin = millis();
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

// Player health dhow up and keep tracks
function drawPlayerHP() {
  fill(255);
  noStroke(255);
  textSize(40);
  textLeading(10); 
  text("Hp: " + setScore.playerHP, width/2 - 200, height - 20);
}

// Coin scores show up and keep Ttracks
function drawCoinsScore() {
  fill(255);
  noStroke(255);
  textSize(40);
  textLeading(10); 
  text("Coins: " + setScore.coinScore, width/2, height - 20);
}

// Kill enemy score show up and keep tracks
function drawKillScore() {
  fill(255);
  noStroke(255);
  textSize(40);
  textLeading(10); 
  text("Kills: " + setScore.killScore, width/2 + 200, height - 20);
}



