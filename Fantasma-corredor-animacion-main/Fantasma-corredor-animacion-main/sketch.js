function preload() {
ghost_running=loadAnimation("ghost1.png","ghost2.png","ghost3.png");
}

function setup(){
ghost=createSprite(200,180,20,50);
ghost.addAnimation ("running",ghost_running);
}

function draw(){
  background("black");
  drawSprites();
}