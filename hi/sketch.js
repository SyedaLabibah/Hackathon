var ground
var player, speed
var block, blockGroup
var shrek, shrekImg

function preload(){
  shrekImg = loadImage("Images/shrek.png")
}

function setup(){
  createCanvas(displayWidth, displayHeight)

  //gamerules
  speed = 20

  //sprites
  ground = createSprite(displayWidth/2, 785, displayWidth, displayHeight * 0.1)
  ground.shapeColor = "black"

  player = createSprite(displayWidth/2, 0, 50, 120)
  player.addImage(shrekImg)
  player.scale = 0.3

  //groups
  blockGroup = createGroup()
  block = createSprite(mouseX, mouseY, 1, 1)

}

function draw(){
  background("white")

  //movement for players
  Movement()

  //blocks
  DrawWithMouse()
  drawSprites()


}

function Movement(){
  //gravity
  player.velocityY = player.velocityY + 3
  player.collide(ground)
  player.collide(blockGroup)

  //jump
  if(keyDown("w")){
    player.velocityY = -1 * speed
  }
  if(keyWentUp("w")){
    player.velocityY = 0;
  }

  //right
  if(keyDown("d")){
    player.velocityX = speed
  }
  if(keyWentUp("d")){
    player.velocityX = 0;
  }

  //left
  if(keyDown("a")){
    player.velocityX = -1 * speed
  }
  if(keyWentUp("a")){
    player.velocityX = 0;
  }
}

function DrawWithMouse(){
  if(keyDown("q")){
    block = createSprite(mouseX, mouseY, 20, 20)
    blockGroup.add(block)
  }

  block.shapeColor = "black"
  blockGroup.collide(ground)
}
