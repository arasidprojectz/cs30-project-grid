// CS30 Project - State Assignment
// Al Rasid Mamun
// Oct 10, 2019
// Extra for Experts:


// State Assignment:
// States - game, player, enemy
// Health bar - player, enemy
// Enemy Shoot Bullet to Player
// Day and Night Mode
// Night Enemy - strong, fast
// player - bullet - two ablities
// medkit for player health
// Map if Possible

let player;
let images;
let sounds;
let setScore;
let setTime;
// let state;
let setBoolean;
let enemy = [];
let bullets = [];
let coins = [];

function preload() {
  // An object that contains images which are pre-loaded
  images = { 
    bgImg: loadImage("assets/images/background.jpg"),
    playerImg: loadImage("assets/images/gunfighter.png"),
    bulletImg: loadImage("assets/images/fire-ball.png"),
    enemyImg: loadImage("assets/images/enemy.png"),
    coinImg: loadImage("assets/images/coin.png"),
    plusImg: loadImgae("assets/images/green-plus.png")
  }; 

  // An object that contains sounds which are pre-loaded
  sounds = { 
    coinSound: loadSound("assets/sounds/collet-coin.mp3"),
    shootSound: loadSound("assets/sounds/shoot-bullet.mp3"),
    laughSound: loadSound("assets/sounds/laugh.mp3"),
    gameOverSound: loadSound("assets/sounds/game-over.mp3"),

  };
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  // Make a new player at center of screen
  player = new Player(width/2, height/2);
  // Make a new enemy randomly and push it to array 
  enemy.push(new Enemy(random(width - player.playerX), random(height - player.playerY)));
  // Make a new coin randomly and it push to array
  coins.push(new Coin(random(width - player.playerX), random(height - player.playerY)));
  // An object that contains States Values
  // state = {
  //   gameState = "menu",
  // };
  // An object that contains Scores Values
  setScore = { 
    playerHP: 15,
    coinScore: 0,
    killScore: 0,
  };

  // An object that contains Time Values
  setTime = { 
    respawnEnemy: 0,
    respawnCoin: 0,
    enemyTime: 3000,
    coinTime: 6000,
  };

  // An object that contains Booleans Values
  setBoolean = {
    playGame: false,
    bulletInteract: false,
    bulletIsCollide: false,
    zeroHealth: false,
  };
}

// Runs the game, if playing game is equal to true
function draw() {
  background(images.bgImg);
  if (setBoolean.playGame === true) {
    modeGame();
    fill(255, 0, 0);
    noStroke(255);
    textSize(40);
    textLeading(10); 
    textAlign(CENTER, CENTER);
  }  
  else { 
    modeMenu();
  }
}

// Game States
// Instruction will show up, if or keep track of highest Score
function modeMenu() { 
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
  // Key - Enter
  if (keyCode === 13) { 
    setBoolean.playGame = true;
  }
  // key - Esc
  if (keyCode === 32) {
    sounds.laughSound.play();
    setBoolean.playGame = false;
    setScore.coinScore = 0; 
    setScore.killScore = 0;
    modeMenu();
  }
}

// Get values from player class and use them in player
function makePlayer() {
  player.displayPlayer();
  player.movePlayer();
  player.angleOfBullets(mouseX, mouseY);
}

// If player health less than or equal to zero, game over
function playerHealth() {
  if (setScore.playerHP <= 0) {
    sounds.gameOverSound.play();
    setBoolean.playGame  = false;
  }
}

// Get values from bullet class and use them in bullets array
function checkBullets() {
  for (let i=0; i<bullets.length; i++) {
    bullets[i].displayBullets();
    bullets[i].shootBullets();
    bullets[i].update();
    // Check if bullet and enemy collide, if true, delete bullet and enemy that collided
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

// Make a new bullet, if mouse pressed and push it to array 
function mousePressed() {
  sounds.shootSound.play();
  bullets.push(new Bullet(player.playerX + 50, player.playerY + 50));  
}

// If bullet length more than one, delete last bullet
function removeBullet() {
  if (bullets.length > 1) {
    bullets.splice(0, 1);
  }
}

// Make a new enemy every three seconds and push it to array 
function generateEnemy() {
  if (millis() > setTime.respawnEnemy + setTime.enemyTime) {
    enemy.push(new Enemy(random(width - player.playerX), random(height - player.playerY)));  
    setTime.respawnEnemy = millis();
  }  
}

// Get Values from enemy class and use them in enemy array
function enemyRespawnRandom() {
  for (let i=0; i<enemy.length; i++) {
    enemy[i].displayEnemy();
    enemy[i].update();
    enemy[i].bounceEnemy();
    enemy[i].interactWithPlayer();
  } 
}

// Make a new coins every six seconds and push it to array 
function generateCoins() {
  if (millis() > setTime.respawnCoin + setTime.coinTime) {
    coins.push(new Coin(random(width - player.playerX), random(height - player.playerY)));
    setTime.respawnCoin = millis();
  }
} 


// Get Values from coin class and use them in coin array
function coinsRespawnRandom() {
  for (let i=0; i<coins.length; i++) {
    coins[i].displayCoin();
    coins[i].collisionWithPlayer();
    if (coins[i].isCollide === true) {
      coins.splice(i, 1);
    }
  }
}

// Text that shows player health and keep tracks
function drawPlayerHP() {
  fill(255);
  noStroke(255);
  textSize(40);
  textLeading(10); 
  text("Hp: " + setScore.playerHP, width/2 - 200, height - 20);
}

// Text that shows coin score and keep tracks
function drawCoinsScore() {
  fill(255);
  noStroke(255);
  textSize(40);
  textLeading(10); 
  text("Coins: " + setScore.coinScore, width/2, height - 20);
}

// Text that shows kill score and keep tracks
function drawKillScore() {
  fill(255);
  noStroke(255);
  textSize(40);
  textLeading(10); 
  text("Kills: " + setScore.killScore, width/2 + 200, height - 20);
}



