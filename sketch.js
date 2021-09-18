var trex, treximage;

function preload(){
  treximage=loadAnimation("trex1.png","trex3.png","trex4.png")
groundImage=loadImage("ground2.png")
}

function setup(){
  createCanvas(600,200)
  trex=createSprite(50,150,50,50)
  trex.addAnimation("running",treximage)
 trex.scale=0.5
ground=createSprite(200,180,400,20)
ground.addImage(groundImage)
ground.velocityX=-3

}

function draw(){
  background("white")
  if(keyDown("space")){
trex.velocityY=-3
  }
  trex.velocityY=trex.velocityY+1
  trex.collide(ground)
  if(ground.x<0){
  ground.x=ground.width/2
  groundImage=loadImage("ground2.png")
  
  }
drawSprites()
}


