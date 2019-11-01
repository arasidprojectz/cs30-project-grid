// CS30 Project - State Variable
// Al Rasid Mamun
// Oct 10, 2019
// Extra for Experts:


// State Assignment:
// Sounds File
// States - game, player, enemy
// player - bullet - two ablities
// Health bar - player, enemy
// medkit for player health
// Enemy Shoot Bullet to Player - AI
// Day and Night Mode
// Night Enemy - strong, fast
// Map if Possible

let player;
let images;
let sounds;
let gameSetup;
let setScore;
let setTime;
let setBoolean;
let states;
let bulletList;
let enemy = [];
let bullets = [];
let coins = [];

function preload() {
  // Images which are pre-loaded
  images = { 
    introBG: loadImage("assets/images/bg/intro_bg.jpg"),
    gameBG: loadImage("assets/images/bg/game_bg.jpg"),


    buttonH: loadImage("assets/images/button/button_h.png"),
    buttonNH: loadImage("assets/images/button/button_nh.png"),

    cursorImg: loadImage("assets/images/items/cursor.png"),
    targetImg: loadImage("assets/images/items/target.png"),

    playerImg: loadImage("assets/images/players/gunfighter.png"),
    bulletImg: loadImage("assets/images/items/fire_ball.png"),
    boomerangImg: loadImage("assets/images/items/boomerang.png"),
    enemyImg: loadImage("assets/images/enemy/enemy.png"),
    coinImg: loadImage("assets/images/coin/coin.png"),
  }; 

  // Sounds which are pre-loaded
  sounds = { 
    introSound: loadSound("assets/sounds/intro_music.wav"),
    bgSound: loadSound("assets/sounds/background_music.mp3"),
    coinSound: loadSound("assets/sounds/collet_coin.mp3"),
    shootSound: loadSound("assets/sounds/shoot_bullet.mp3"),
    gameOverSound: loadSound("assets/sounds/game_over.mp3"),
  };
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  // Make a new player at center of screen
  player = new Player(width/2, height/2);
  
  // Button and Cursor Values
  gameSetup = {
    cursorX: width/2, 
    cursorY: height/2, 
    cursorSize: 40,
    buttonX: width/2, 
    buttonY: height/2,
    buttonW: 400,
    buttonH: 200,
  };

  // State Values
  states = {
    game: "toStart"
  };

  // Make an array of bullets
  bulletList = new Array();
  bulletList[0] = "fireBall";
  bulletList[1] = "boomerang";

  // Score Values
  setScore = { 
    playerHP: 10,
    coinScore: 0,
    killScore: 0,
  };

  // Time Values
  setTime = { 
    respawnEnemy: 0,
    respawnCoin: 0,
    respawnBullet: 0,
    bulletTime: 400,
    enemyTime: 4000,
    coinTime: 4000
  };

  // Booleans Values
  setBoolean = {
    bulletInteract: false,
    bulletIsCollide: false,
  };
}

// Runs the game, if playing game is equal to true
function draw() {
  imageMode(CORNER);
  if (states.game === "toStart") {
    background(images.introBG);
    makeButton();
    displayCursor();
  }
  
  if (states.game === "guide") {
    background(images.gameBG);
    gameGuide();
  }

  if (states.game === "bulletList") {
    background(images.gameBG);
    makeBulletList();
    displayOptions();
  }
  
  if (states.game === "runGame") {
    background(images.gameBG);
    gameRun();
    displayCursor();
  }

  if (states.game === "gameOver") {
    background(images.gameBG);
    gameStatus();
    displayCursor();

  } 
}

// Mouse Cursor
function mouseMoved() {
  noCursor();
  gameSetup.cursorX = mouseX;
  gameSetup.cursorY = mouseY;
}

function displayCursor() {
  image(images.cursorImg, gameSetup.cursorX, gameSetup.cursorY, gameSetup.cursorSize, gameSetup.cursorSize);
}

// Game States
function gameGuide() { 
  textAlign(CENTER, CENTER);
  fill(255);
  textSize(30);
  text("VIROTTACK", width/2, height/2 - 100);
  text("Move Player Using WASD, Mouse to Aim, Left Mouse Button to Shoot!", width/2, height/2 - 50);
  text("Avoid VIRUS, if player collide with them, player health will decrease by one", width/2, height/2);
  text("PRESS ESC TO EXIT!", width/2, height/2 + 50);
  if (keyIsPressed === true) {
    states.game = "toStart";
  }
}

function gameRun() {
  makePlayer();
  generateEnemy(); 
  generateCoins();
  enemyRespawnRandom();
  coinsRespawnRandom();
  checkBullets();
  removeBullet();
  checkCollided();
  playerHealth();
  drawUpdate();
}

function gameStatus() {
  fill(255);
  textSize(40);
  text("Coin Score: " + setScore.coinScore, width/2, height/2);
  text("Kills Score: " + setScore.killScore, width/2, height/2 + 80);
  text("PRESS SPACE TO RESTART!", width/2, height/2 + 150);
  if (keyIsPressed && keyCode === 32) {
    states.game = "runGame";
    setScore.coinScore = 0;
    setScore.killScore = 0;
    setScore.playerHP = 10;
    enemy = [];
    coins = [];
  } 
}

function makeButton() {
  imageMode(CENTER);
  if (mouseX > width/2 - 180 && mouseX < width/2 + 210 &&
    mouseY > height/2 && mouseY < height/2 + 80) {
    image(images.buttonH, gameSetup.buttonX, gameSetup.buttonY + 20, gameSetup.buttonW, gameSetup.buttonH);
    if (mouseIsPressed) {
      states.game = "bulletList";
    }
  }
  else {
    image(images.buttonNH, gameSetup.buttonX, gameSetup.buttonY + 20, gameSetup.buttonW, gameSetup.buttonH);
  }
    
  if (mouseX > width/2 - 180 && mouseX < width/2 + 210 &&
    mouseY > height/2 + 125 && mouseY < height/2 + 200) {
    image(images.buttonH, gameSetup.buttonX, gameSetup.buttonY + 150, gameSetup.buttonW, gameSetup.buttonH);
    if (mouseIsPressed) {
      states.game = "guide";
    }
  }
  else {
    image(images.buttonNH, gameSetup.buttonX, gameSetup.buttonY + 150, gameSetup.buttonW, gameSetup.buttonH);
  }
}

function makeBulletList() {
  textAlign(CENTER);
  fill(255);
  textSize(30);
  text("Select a Bullet", width/2, height/2 - 100);
  text("PRESS ENTER TO START!", width/2, height/2 + 120);
  if (keyIsPressed && keyCode === 13) {
    states.game = "runGame";
  } 
}

function displayOptions() {
  let bX = width/2; 
  let bY = height/2;
  let bSize = 50; 

  imageMode(CENTER);
  image(images.bulletImg, bX - 100, bY, bSize, bSize);
  image(images.boomerangImg, bX + 100, bY, bSize*1.5, bSize*1.5);
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
    states.game = "gameOver";
  }
}

// Get values from bullet class and use them in bullets array
function checkBullets() {
  for (let i=0; i<bullets.length; i++) {
    bullets[i].displayBullets();
    bullets[i].shootBullets();
    bullets[i].update();  
  }
}

// Make a new bullet, if mouse pressed and push it to array 
function mousePressed() {
  if (states.game === "runGame") {
    if (millis() > setTime.respawnBullet + setTime.bulletTime) {
      bullets.push(new Fire(player.playerX + 50, player.playerY + 50));  
      setTime.respawnBullet = millis();
      sounds.shootSound.setVolume(0.5);
      sounds.shootSound.play();
      sounds.shootSound.playMode("restart");
    }
  }
}

// If bullet length more than one, delete last bullet
function removeBullet() {
  for (let i = 0; i<bullets.length; i++) {
    if (bullets[i].bulletX < 0 || bullets[i].bulletX > width ||
        bullets[i].bulletY < 0 || bullets[i].bulletY > height) {
      bullets.splice(i, 1);
    }
  }
}

// Make a new enemy every three seconds and push it to array 
function generateEnemy() {
  if (millis() > setTime.respawnEnemy + setTime.enemyTime) {
    enemy.push(new Enemy(random(width - player.playerX), random(height - player.playerY), player.playerX, player.playerY));  
    setTime.respawnEnemy = millis();
  }  
}

// Get Values from enemy class and use them in enemy array
function enemyRespawnRandom() {
  for (let i=0; i<enemy.length; i++) {
    enemy[i].displayEnemy();
    enemy[i].updatePosition();
    enemy[i].interactWithPlayer();
  } 
}

// Check if bullet and enemy collide, if true, delete bullet and enemy that collided
function checkCollided() {
  for (let e=0; e<enemy.length; e++) { 
    for (let b=0; b<bullets.length; b++) {
      setBoolean.bulletInteract = collideRectRect(enemy[e].enemyX, enemy[e].enemyY, enemy[e].enemySize, enemy[e].enemySize,
        bullets[b].bulletX, bullets[b].bulletY, bullets[b].radius, bullets[b].radius);
      if (setBoolean.bulletInteract === true && !setBoolean.bulletIsCollide) {
        setBoolean.bulletIsCollide = true;
        bullets.splice(b, 1);
        enemy.splice(e, 1);
        setScore.killScore += 1;
      } 
      if (setBoolean.bulletIsCollide === true && !setBoolean.bulletInteract) {
        setBoolean.bulletIsCollide = false;
      }
    }
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
function drawUpdate() {
  fill(255);
  textSize(40);
  text("Hp: " + setScore.playerHP, width/2 - 200, height - 20);
  text("Coins: " + setScore.coinScore, width/2, height - 20);
  text("Kills: " + setScore.killScore, width/2 + 200, height - 20);
}

