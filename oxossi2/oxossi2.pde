Bolha[] b = new Bolha[10000] ;
PImage  axe,folha1;
PImage[]  folha = new PImage[4];
int x;
int i;
int total = 1;





void setup() {
   fullScreen(P2D);
 
 axe = loadImage("oxossi.jpg"); 
 for (int i = 0; i < folha.length; i++){
   folha[i] = loadImage("folha"+i+".png");
 
 }
 
 //folha1 = loadImage("folha1.png"); 
 //folha[1] = loadImage("folha1.png");
// folha[2] = loadImage("folha2.png");
 //folha[3] = loadImage("folha3.png");
 //folha[4] = loadImage("folha4.png");
for ( int i = 0; i < 10000; i++) {
  int index = int(random(0,3));
  b[i] = new Bolha(folha[index], random(15,80));

}
  //<>//
}


void mouseReleased(){
  
  total = total + 5; 

}

void draw() {
background(226,211,178);
imageMode(CENTER);
image(axe,680,600);
  for( int i = 0; i < total; i = i + 2) {
  b[i].display();
  b[i].subir();
  b[i].top();
       
   }


}

   
