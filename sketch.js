// 
// Al Rasid Mamun
// Sept 9, 2019

let gameSetup;
let timeSetup;
let player;
let bullets = [];
let tree = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  player = new Player(width/2, height/2);
  gameSetup = {
   
  };

  timeSetup = {
    respawnTime: 0,
    addTime: 10000,
  };

}


function draw() {
  background(225);
  player.drawPlayer();
  player.movePlayer();
  // respawnTree();
  fireBullets();
  // console.log(timeSetup.respawnTime);
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
  if (millis() > timeSetup.respawnTime + timeSetup.addTime) {
    timeSetup.respawnTime = millis();
    tree.push(new Tree(random(width), random(height)));
  }

  for (let i=0; i<tree.length; i++) {
    tree[i].draw();
  }
} 

