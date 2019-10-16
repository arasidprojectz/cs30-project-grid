// CS30 Project - Interactive Scene
// Al Rasid Mamun
// Oct 10, 2019
// Extra for Experts:
<<<<<<< HEAD


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
=======
//  - Polar Coordinates 
//      - Return angle and distance which bullet travels
//  - Add Music
//      - Collet Coin
//      - Shoot Bullets
//      - Game Over
//      - Laugh
>>>>>>> parent of 946e9a7... State Assignment Ideas


let player;
let images;
let sounds;
let setScore;
let setTime;
let setBoolean;
let states;
let titles;
let buttons;
let enemy = [];
let bullets = [];
let coins = [];

function preload() {
  // Images which are pre-loaded
  images = { 
    introBG: loadImage("assets/images/bg/intro_bg.png"),
    gameTitle: loadImage("assets/images/text/game_title.png"),
    newGameTitle: loadImage("assets/images/text/new_game.png"),
    newGame: loadImage("assets/images/text/new_game.png"),
    buttonH: loadImage("assets/images/button/button_h.png"),
    buttonNH: loadImage("assets/images/button/button_nh.png"),
    bgImg: loadImage("assets/images/bg/background.jpg"),
    playerImg: loadImage("assets/images/players/gunfighter.png"),
    bulletImg: loadImage("assets/images/items/fire-ball.png"),
    enemyImg: loadImage("assets/images/enemy/enemy.png"),
    coinImg: loadImage("assets/images/coin/coin.png"),
    // plusImg: loadImgae("assets/images/green-plus.png")
  }; 

  // Sounds which are pre-loaded
  sounds = { 
    introSound: loadSound("assets/sounds/intro-music.wav"),
    bgSound: loadSound("assets/sounds/background-music.mp3"),
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
<<<<<<< HEAD

  // State Values
  states = {
    gameState: "toStart",
  };

  // Titles Values
  titles = {
    gameTitleX: width/2,
    gameTitleY: height/8,
    gameTitleW: 600,
    gameTitleH: 150, 
  };

  // Button Values
  buttons = {
    btX: width/2,
    btY: height/2, 
    btW: 350,
    btH: 200,
    btTitleW: 240,
    btTitleH: 60,
  };

  // Scores Values
=======
  // Make a new enemy randomly and push it to array 
  enemy.push(new Enemy(random(width - player.playerX), random(height - player.playerY)));
  // Make a new coin randomly and it push to array
  coins.push(new Coin(random(width - player.playerX), random(height - player.playerY)));
  // An object that contains Scores Values
>>>>>>> parent of 946e9a7... State Assignment Ideas
  setScore = { 
    playerHP: 15,
    coinScore: 0,
    killScore: 0,
  };

  // Time Values
  setTime = { 
    respawnEnemy: 0,
    respawnCoin: 0,
    enemyTime: 800,
    coinTime: 4000
  };

  // Booleans Values
  setBoolean = {
    bulletInteract: false,
    bulletIsCollide: false,
    zeroHealth: false,
  };
}

// Runs the game, if playing game is equal to true
function draw() {
<<<<<<< HEAD
  if (states.gameState === "toStart") {
    imageMode(CORNER);
    background(images.introBG);
    displayGTitle();
    makeButton();
    sounds.introSound.play(); 
    sounds.introSound.setVolume(0.5);
    sounds.bgSound.playMode("restart");
=======
  background(images.bgImg);
  if (setBoolean.playGame === true) {
    modeGame();
    fill(255, 0, 0);
    noStroke(255);
    textSize(40);
    textLeading(10); 
    textAlign(CENTER, CENTER);
    text("DO NOT PRESS SPACE", width - 230, height/2 - 350);
  }  
  else { 
    modeMenu();
>>>>>>> parent of 946e9a7... State Assignment Ideas
  }
}

// Game States
function displayGTitle() {
  imageMode(CENTER);
  image(images.gameTitle, titles.gameTitleX, titles.gameTitleY, titles.gameTitleW, titles.gameTitleH);
}

// Get values from button class and use them in button
function makeButton() {
  imageMode(CENTER);
  let d = dist(buttons.btX, buttons.btY, mouseX, mouseY);
  if (d < 50) {
    image(images.buttonH, buttons.btX, buttons.btY, buttons.btW, buttons.btH);
  }
  else {
    image(images.buttonNH, buttons.btX, buttons.btY, buttons.btW, buttons.btH);
  }
  displayNewButton();
}

function displayNewButton() {
  image(images.newGameTitle, buttons.btX, buttons.btY, buttons.btTitleW, buttons.btTitleH);
}



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
  checkCollided();
  playerHealth();
  drawPlayerHP();
  drawCoinsScore();
  drawKillScore();
}

// function keyPressed() {
//   // Key - Enter
//   if (keyCode === 13) { 
//     setBoolean.playGame = true;
//     sounds.bgSound.setVolume(0.5);
//     sounds.bgSound.play();
//     sounds.bgSound.playMode("resetart");
//   }
//   // key - Esc
//   if (keyCode === 32) {
//     sounds.laughSound.play();
//     setBoolean.playGame = false;
//     setScore.coinScore = 0; 
//     setScore.killScore = 0;
//     modeMenu();
//   }
// }

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
  }
}

// Make a new bullet, if mouse pressed and push it to array 
function mousePressed() {
  bullets.push(new Bullet(player.playerX + 50, player.playerY + 50));  
  // sounds.shootSound.setVolume(0.5);
  // sounds.shootSound.play();
  // sounds.shootSound.playMode("restart");
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



