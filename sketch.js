function preload(){
bg=loadImage('BG.png')
Dragon=loadImage('dragon.png')
Hen=loadImage('hen2.png')
Samurai=loadImage('samurai.png');
Witch=loadImage('witch.png');
}
var bground
function setup(){
 createCanvas(1000,800)
 bground=createSprite(400,400)
 bground.addImage(bg);
 bground.scale= 2
 bground.velocityY=-1

 
}
function draw(){
background('red')
if(bground.y>600){
    bground.y=200}
    




drawSprites()
}