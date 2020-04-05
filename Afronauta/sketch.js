
let noite;
let noiteb;
let noitef;
let noitel;
var bola = [];

function setup() {
  createCanvas(1080,920,P2D);
  noite = loadImage("noite12.png");
  noitef = loadImage("noiteb5.png");
  noiteb = loadImage("noiteb6.png");
  noitel = loadImage("noitel.png");
  for(let i = 0; i < 2000; i++){
  bola[i] = new Bola();
  //c[i] = new Bola();
  }  
}

function draw() {
  
  applyMatrix();
  imageMode(CENTER);
  image(noiteb,540,460);
  resetMatrix();
  
  for(let i = 0; i < 300; i++){
  applyMatrix();
  bola[i].move(1,1);
  bola[i].kick();
  bola[i].objeto();
  resetMatrix();
  }
 
  
   for(let i = 0; i < 100; i++){
  applyMatrix();
  bola[i].move(1,1);
  bola[i].kick();
  bola[i].objeta();
  resetMatrix();
  }
  applyMatrix();
  imageMode(CENTER);
  image(noite,540,460);
  resetMatrix();
  
  for(let i = 0; i < 80; i++){
  applyMatrix();
  bola[i].move(1,1);
  bola[i].kick();
  bola[i].objeto();
  resetMatrix();
  }


applyMatrix();
  imageMode(CENTER);
  image(noitef,540,460);
  resetMatrix();

}

function mousePressed(){
  
  for(let i = 0; i < 300; i++){
  bola[i].move(-200,-200);
  bola[i].kick();
  bola[i].objeto();
  }
   for(let i = 0; i < 100; i++){
  bola[i].move(-200,-200);
  bola[i].kick();
  bola[i].objeto();
  }
}


function Bola () {
  let x;
  let y;
  let location;
  let velocity;
  let acceleration;
  let  explosao;
  this.x = x;
  this.y = y;
  
    
    location = createVector(random(240,940),random( 240,860));
    velocity = createVector(random (0.1,0.2), random (0.1,0.2));
    acceleration = createVector(random (0.1,0.2), random (0.1,0.2));
    explosao = createVector(random(100,100),random(100,100));
  
  
  this.move = function (x, y){
    let mouse = createVector(mouseX,mouseY);
    mouse.sub(location);
    mouse.setMag(0.1*y);
    acceleration = mouse;
    velocity.add(acceleration);
    location.add(velocity);
    velocity.limit(8*x);
  }
  
  this.kick = function () {
    
    if((location.x > 940) || (location.x<0)){
      velocity.x = velocity.x* -1; 
    }
    if ((location.y > 860) || (location.y<0)){
      velocity.y = velocity.y * -1;
      
    }
  }
    
    this.objeto  = function (){
      
      noStroke();
      fill(random(200,400),random(200,400));
      ellipse(location.x,location.y,random(3,6),random(3,6));
      
    }
    
     this.objeta  = function (){
      
      noStroke();
      fill(2,83,random(180,300));
      ellipse(location.x,location.y,random(3,5),random(3,5));
      
    }
   this.objetu = function (){
      
      noStroke();
      fill(random(150,250),random(200,400));
      ellipse(location.x,location.y,random(3,6),random(3,6));
      
    }
   
   

    }
  

 // for(let i = 0; i < 100; i++){
 // applyMatrix();
 // c[i].move(1,1);
 // c[i].kick();
 // c[i].objetu();
 // resetMatrix();
 // }
 //  for(let i = 0; i < 50; i++){
 // applyMatrix();
 // c[i].move(1,1);
 // c[i].kick();
 // c[i].objeta();
 // resetMatrix();

//}