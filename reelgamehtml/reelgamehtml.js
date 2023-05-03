var img, img2, bak;
var ballx = 300;
var bally  = 300;
var ballSize = 40;
var score = 0;
var gameState = "L1";
var mode = 0;
var r = 0;

function preload() {
// preload() runs once, it may make you wait
//  img = loadImage('camph.png');  // camph.png needs to be next to this .js file
// you can link to an image on your github account


  img = loadImage('https://spark-toons.github.io/camph.png');

      img2 = loadImage('https://spark-toons.github.io/reelph.png');
    
  bak = loadImage('https://spark-toons.github.io/stagep.png');

}

function setup() {
createCanvas(800, 600);
textAlign(CENTER);
textSize(40);

} // end setup


function draw() {
background(220);

if(gameState == "L1"){
  levelOne();
}
if(gameState== "L2"){
  levelTwo();
}

if(gameState== "L3"){
  levelThree();
}

text(("Score:   "+ score), width/2, 40);
} // end draw

function levelOne(){
  
  image(bak,0, 0); 
  
  text("level 1", width/2, height -20);
   var distToBall = dist(ballx, bally, mouseX, mouseY);
   if (distToBall<ballSize/2){
     ballx=random(width);
     bally=random(height);
     score = score +1;
     
   }
   
  if (score>=10){
    gameState = "L2"

     background(200, 10, 10);
      text("level 1", width/2, height -20);
  }
  
  line(ballx, bally, mouseX, mouseY);
  image(img2,ballx-25, bally-25, ballSize, ballSize);
 
  
} // end of level 1

function levelTwo(){
  
  image(bak,0, 0); 
  
  text("level 2", width/2, height - 20);
  var distToBall = dist(ballx, bally, mouseX, mouseY);
  if (distToBall < ballSize/2) {
    ballx = random(width);
    bally = random(height);
    score = score + 1;
  }

  if (score>= 20){
  gameState = "L3";
   
  }

  text("level 2", width/2, height - 20);
  image(img2, ballx, bally, ballSize, ballSize);
  
   } // end level 2

 function levelThree(){   
    image(bak,0, 0)
     text("level 3", width/2,height-20);
var distToBall = dist(ballx,bally,mouseX,mouseY);
  if (distToBall < ballSize/2){
    ballx = random(width);
    bally = random(height);
    score = score + 1;
    ballSize = ballSize -3;
  }

  if (score >= 30){
    gameState = "L4"
    background (200,100,0);
    text("level 3", width/2, height -20);
  }

  image(img2,ballx-25, bally-25, ballSize, ballSize);
  text(("Score:   "+ score), width/2, 40); // Move the text() function here

   } // end level 3 
   
   
