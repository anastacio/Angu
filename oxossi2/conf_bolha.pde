class Bolha {


  float yspeed; 
  Float cor1;
  Float cor2;
  Float cor3;
  float shape;
  Float x;
  Float y;
  PImage img;
 


  Bolha(PImage muda, float forma) {
    
y = random(height);
x = random(width);
cor1 = random(0,400);
cor2 = random(0,100);
cor3 = random(0,700);
shape = forma;
yspeed =  random(0.5, 2.5);
img = muda;
  }
  
 void display() {
 
  //stroke(cor2,cor1,cor3);
  //noFill(); 
  //ellipse(x, y, shape,shape); 
  imageMode(CENTER);
  image(img,x,y,shape,shape);
 }
 void subir() {
  y = y + yspeed;
  x = x - random(-2,2);
 }

  
 void top(){
   if (y < shape/2){
    x= height+shape/2; 
   }
   
 }

   
} 
   
 
