 var bgImg;
var cat,catimg1,cat1img2
var mouse,mousemg1,mouse1img2
function preload() {

    bgImg = loadImage("images/garden.png" );
    cat1img1 = loadAnimation("images/cat1.png");
    cat1img2 = loadAnimation("images/cat2.png","images/cat3.png");
    mouse1img1 = loadAnimation("images/mouse1.png");
    mouse2img2 = loadAnimation("images/mouse2.png","images/mouse3.png");
   cat1Img3 = loadAnimation("images/cat4.png")
   mouse1Img3 = loadAnimation("images/mouse4.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat=createSprite(870,600)
    cat.addAnimation('tom',cat1img1)
    cat.scale=0.2

    mouse=createSprite(200,600)
    mouse.addAnimation('jerry',mouse1img1)
    mouse.scale=0.2

}

function draw() {

    background(bgImg);
  
    if (cat.x - mouse.x < (cat.width - mouse.width)/2){

    cat.addAnimation("catRunning",cat1Img3)
    cat.changeAnimation("catRunning")
    mouse.addAnimation("mouse1",mouse1Img3)
mouse.changeAnimation("mouse1")
cat.scale=0.2
mouse.scale=0.2
cat.velocityX=0
cat.x=300}
    drawSprites();
}


function keyPressed(){

if (keyCode===LEFT_ARROW){
    mouse.addAnimation("mouseTeasing",mouse2img2);
    mouse.changeAnimation("mouseTeasing");
    mouse.frameDelay = 25

    cat.addAnimation("catWalk",cat1img2);
    cat.changeAnimation("catWalk");
    cat.velocityX=-5
} 


}
