// Project Title
// Al Rasid Mamun
// Sept 9, 2019

let gameSetup;
let characterSetup;
let letters;
let enemy; 
let bullets = [];

function setup() {
  createCanvas(windowWidth, windowHeight);

  gameSetup = {
  };

  characterSetup = {
    x: width/2, 
    y: height/2,
    rectWidth: 50,
    rectHeight: 100,
  };

  letters = {
    w: 87,
    a: 65,
    s: 83,
    d: 68,
  };
}


function draw() {
  background(225);
  // enemy.display();
  // enemy.interect();
  // makeCharacter();
  fireBullets();
  console.log(bullets);
}

function fireBullets() {
  for (let i=0; i<bullets.length; i++) {
    bullets[i].drawCircle();
    bullets[i].moveCircle(mouseX, mouseY);
  }

}

function mousePressed() {
  bullets.push(new Bullet(width/2, height/2));
}

