let bubbles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].move();
    bubbles[i].show();
  }
}

function mouseDragged() {
  r = random(10, 50);
  b = new Bubble(mouseX, mouseY, r);
  bubbles.push(b);
}

class Bubble {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
  }
  move() {
    this.x = this.x + random(-4, 4);
    this.y = this.y + random(-4, 4);
  }
  show() {
    strokeWeight(4);
    stroke(255);
    noFill();
    ellipse(this.x, this.y, this.r);
  }
}
