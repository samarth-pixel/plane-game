var spaceship1, spaceship2, spaceship3, spaceship4, spaceship5, spaceship6;
var bg, bgImage;
var coin, coinImage;
var cloud,cloud2, cloudImage;
var cloudGroup, coinGroup, fuelGroup;
var coinImage;
var fuelImage;
var life, life2, life3, lifeImage;
var gameover, gameoverImage;
var spaceship1Image, spaceship2Image, spaceship3Image, spaceship4Image, spaceship5Image, spaceship6Image, spaceshipImage;
var score;
var gamestate = "play";


function preload() {
  bgImage = loadImage("./images/bg.png");
  coinImage = loadImage("./images/coin.png");
  cloudImage = loadImage("./images/cloud.png");
  fuelImage = loadImage("./images/fuel-min.png");
  gameoverImage = loadImage("./images/gameover.png");
  lifeImage = loadImage("./images/life.png");
  spaceshipImage = loadAnimation("./images/spaceship1.png", "./images/spaceship2.png", "./images/spaceship3.png", "./images/spaceship4.png", "./images/spaceship5.png", "./images/spaceship6.png");

}

function setup() {
  
  spaceship = createSprite(100,windowWidth/2 - 200,100,100);
  spaceship.addAnimation("animation",spaceshipImage);
  spaceship.scale = 0.4;

  life = createSprite(windowHeight,windowWidth/2 - 600,50,50);
  life.addImage(lifeImage);
  life.scale = 0.2;
  
  life2 = createSprite(windowHeight + 100,windowWidth/2 - 600,50,50);
  life2.addImage(lifeImage);
  life2.scale = 0.2;

  life3 = createSprite(windowHeight + 200,windowWidth/2 - 600,50,50);
  life3.addImage(lifeImage);
  life3.scale = 0.2;


  //bg = createSprite(windowWidth/2,windowHeight/2,windowWidth, windowHeight);
  //bg.addImage(bgImage);
  

  gameover = createSprite(200,200);
  gameover.addImage(gameoverImage);

  

  cloudGroup = new Group();
  coinGroup = new Group();
  fuelGroup = new Group();

  score = 0;
}

function draw() {
  createCanvas(1400,1400);
  background(bgImage);
    drawSprites();
     
    if (gamestate == "play") {
      gameover.visible = false;
      if (keyDown == "RIGHT_ARROW") {
        spaceship.x += 5;
      }
    } 
    
  //bg.velocityX = 5;
  //if (bg.x < 0) {
    //bg.x = bg.width/2;
  //}
 
  //bg.scale = 2;
  //bg.depth = 1;
  //spaceship.depth = bg.depth + 1;
  //life.depth = bg.depth+1;
  //life2.depth = bg.depth+1;
  //life3.depth = bg.depth+1;

  }
function mousePressed() {
  spaceship.velocityY = 4;
}

function obstacles() {
  if (frameCount % 60 === 0) {
    cloud = new Cloud(random(100,400), random(100,400), 50,50);
    cloud2 = new Cloud(random(100,400), random(100,400), 50,50);
    cloudGroup.add(cloud);
    cloudGroup.add(cloud2);

  }
  if (frameCount % 40 === 0) {
    coin = new Coin(random(100,400), random(100,400), 50,50);
    coinGroup.add(coin);
  }


}



  


