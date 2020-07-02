
float cor1, cor2 ;
PImage buzios;

void setup() {
  //fullScreen(1);
size(1280,720);
buzios = loadImage("buzios.jpg");

}

void draw(){

//image(iansa,0,0);
//controla pixel por pixel .. efeito chiado colorido controlado por mouse
loadPixels();
buzios.loadPixels();
//for(int i = 0; i < pixels.length; i++) {
//  pixels[i] = color(mouseX, random(30,300), mouseY);
//}
//controla quadrantes de pixel .. X+Y .. pissibilitando efeito gradiente

for( int x = 0; x < width; x++) {
  for(int y = 0; y < height; y++){
    //float d = dist(x,y, width/2, height/2);
  //pixels[x+y*width] = color(mouseX,random(d),mouseY);
  int loc = x+y*width;
  float r = red(buzios.pixels[loc]);
  float g = green(buzios.pixels[loc]);
  float b = blue(buzios.pixels[loc]);
  float d = dist(mouseX, mouseY,x,y);
  float factor = map(d,0, 200,2,0);
  pixels[loc] = color(r*factor++,g*factor,b*factor);
  
}
}
 updatePixels(); 

}
