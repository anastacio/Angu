let a = 0.0;
let velo = 0;
let acelera = 0.0001;  
let r= 100;
let textura2;
let meninos;
let textura;
let t;

let b;

function setup() {
  t = t + 100;
  let z = 200 + noise(t);
  createCanvas(1070, 860,P2D);
  background(160,222,200);
  noStroke();
  meninos = loadImage("meninos_peixe.png");
 textura = loadImage("textura.png");
textura2 = loadImage("textura2.png");
  b = new bola();
  b = new bola();
}

// function mousePressed() {
//  if (mouseX > 0 && mouseX < 1080 && mouseY > 0 && mouseY < 820) {
//    var fs = fullscreen();
 //   fullscreen(!fs);
 // }
// }







function draw() {
 applyMatrix();
 b.run();
 b.display();

 resetMatrix();
 imageMode(CENTER);
 image(meninos,540,460); 
}
 


class bola {
  contructor(){
  let textura;
  let textura2;
  let r= 100;
  let t = 0;
  let a = 0.0;
let velo = 0;
let acelera = 0.0001;

  }

  
   run(){
  


 r = map(mouseX, 0,mouseY,0,130);
     
  //n = map(mouseX, 0,mouseY,10,200);
  //m = map(mouseX, 0,mouseY,10,200);
  a+= velo;
  velo += acelera;

  acelera = map(mouseX, height,width,-0.001,0.001);
  t = t + 0.01;
   }
  
  display(){
     
  let z = noise(t);
  let w = noise(t);
  let y = r* sin(a);
  let x = r* cos(a);
  translate(500,500);
  z = map(x,0,1,100,313);

     
imageMode(CENTER);
image(textura,x,y);
   
     rotate(a);
 fill(220,210,z,150);
 ellipse(x,y,100*w,100*w);

 
  rotate(a+10);
 
 fill(200,240,213,150);
 ellipse(x,y,160,160);
  
 imageMode(CENTER);
 image(textura2,x,y);
 
  rotate(a+5);
  
 fill(100,210,213,150);
 ellipse(x,y,160*w,160*w);
 
imageMode(CENTER);
 image(textura2,x,y);
 
  rotate(a+1);
 fill(200,150,z,150);
 ellipse(x,y,160,160);

  }
}
 
function windowResized() { 
  resizeCanvas(windowWidth, windowHeight); 
  
   
    
}