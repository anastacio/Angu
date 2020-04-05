let bubbles = [];
let tot = 1;
let r = 20;
let mulher;
let flores = [];

function preload() {
  mulher = loadImage('floresmulher2.png');
  for (let i = 0; i < 2 ; i++) {
    flores[i] = loadImage("flor"+i+".png");
  }
}
function setup() {
  createCanvas(1280,900,P2D);
  for (let i = 0; i < 10000; i++) {
    let x = random(width);
    let y = random(height);
    let r = random(20, 50);
    let b = new Bubble(x, y, r);
    bubbles.push(b);
  }
}

function mouseReleased () {
  
  tot = tot + 3;
  
}

function draw() {
  background(326,311,378);
  noStroke();
  fill(239,230,106);
  ellipse(width/2,height/2, 600,600);
  imageMode(CENTER);
  image(mulher,500,500);
   for( let i = 0; i < tot; i = i + 2){
   // bubbles[i].rollover(mouseX, mouseY);
    bubbles[i].move();
    bubbles[i].show();
    bubbles[i].subir();
  }
}

class Bubble {

  constructor(x, y, r, img) {
   
    this.x = x;
    this.y = y;
    this.r = r;
   
    this.flora = random(flores);
    
   
    // this.brightness = 0;
  
    
  
  }
  
  subir() {
let yspeed;
yspeed =  random(0.5, 2.5);
  this.y = this.y + yspeed;
  this.x = this.x - random(-2,2);
 }

  //rollover(px, py) {
  //  let d = dist(px, py, this.x, this.y);
   // if (d < this.r) {
     // this.brightness = 255;
   // } else {
    //  this.brightness = 0;
   // }
  //}

  move() {
    
    this.x = this.x + random(-2, 2);
    if (this.y < this.r/2){
    this.x = height + this.r/2; 
   }
  }

  show() {
    
    imageMode(CENTER);
    image(this.flora,this.x,this.y, this.r,this.r);
  // stroke(255);
  //  strokeWeight(4);
  // fill(this.brightness, 125);
  //ellipse(this.x, this.y, this.r * 2);
  }
}



