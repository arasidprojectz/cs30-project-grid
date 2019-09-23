// 
// Al Rasid Mamun
// Sept 9, 2019

let gameSetup;
let player;
let bullets = [];
let tree = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  player = new Player(width/2, height/2);
  gameSetup = {
  };

}


function draw() {
  background(225);
  fireBullets();
  player.drawPlayer();
  player.movePlayer();
}

function fireBullets() {
  for (let i=0; i<bullets.length; i++) {
    bullets[i].drawCircle(player.x, player.y);
    bullets[i].moveCircle();
  }
}

function mousePressed() {
  bullets.push(new Bullet());
}

function respawnTree() {
  for (let i=0; i<bullets.length; i++) {
    bullets[i].draw();
  }
} 

