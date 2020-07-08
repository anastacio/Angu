

PImage buzios;

void setup(){

size(1280,720, P2D);

buzios = loadImage("buzios.jpg");
background(0);
}

void draw(){
 background(0);
  for(int i = 0; i < 15000; i++){
  //image(buzios, 0, 0);
  float x = random(width);
  float y = random(height);
  color c = buzios.get(int(x),int(y));
  noStroke();
  fill(c,220);
  ellipse(x,y,12,12);
  
}


}
