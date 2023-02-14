var bg,bgImg;
var player, naruto,naruto_range;


function preload(){
  bgImg = loadImage("assets/download.jpg");
  naruto = loadImage("assets/narutostding.png")
  naruto_range = loadImage("assets/narutotrnfrming.png")
  
}

function setup() {

createCanvas(windowWidth,windowHeight)  
  

  
 bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20);
 bg.addImage(bgImg)
 bg.scale = 4



player = createSprite(displayWidth-1150,displayHeight-300,50,50);
player.addImage(naruto)
player.scale=0.3
player.debug=true
player.setCollider("rectangle",0,0,300,300);
}

function draw() {
  background(0); 



if(keyDown("UP_ARROW")||touches.lenght>0){
  player.y=player.y-30
}
  
if(keyDown("DOWN_ARROW")||touches.lenght>0){
  player.y=player.y+30
}


 if(keyWentDown("space")){
  player.addImage(naruto_range)
 }
else if(keyWentUp("space")){
  player.addImage(naruto)
 }



drawSprites();

}