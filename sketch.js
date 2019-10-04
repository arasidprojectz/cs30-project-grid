// Al Rasid Mamun
// Sept 9, 2019


let player;
let gameSetup;
let images;
let enemy = [];
let bullets = [];
let coins = [];


function setup() {
  createCanvas(windowWidth, windowHeight);
  player = new Player(width/2, height/2);
  enemy.push(new Enemy(random(width - player.playerX), random(height - player.playerY)));  
  coins.push(new Coin(random(width - player.playerX), random(height - player.playerY)));
  gameSetup = {
    respawnEnemy: 0,
    respawnCoin: 0,
    enemyTime: 6000,
    coinTime: 5000,
    coinScore: 0,
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
  enemyRespawnRandom();
  generateCoins();
  coinsRespawnRandom();
  // removeCoin();
  // fireBullets();
}

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
  } 
}


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
    coins[i].drawText();
    coins[i].removeCoin();
  }
}

// function removeCoin() {
//   if (coins.interact === true) {
//       coins.splice(0, 1);
//   }
// }



// function fireBullets() {
//   for (let i=0; i<bullets.length; i++) {
//     bullets[i].displayBullets();
//     bullets[i].update();
//     bullets[i].toMousePos();
//   }
// }

// function mousePressed() {
//   bullets.push(new Bullet(player.playerX, player.playerY, mouseX, mouseY));  
// }
