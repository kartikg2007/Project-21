//Creating variables
var bullet,wall;
var speed, weight;
var deformation, damage;
var thickness

function setup() {
  createCanvas(1600,400);

  speed=random(223,321);
  weight = random(30,52);

  thickness = random(22, 83)

  bullet = createSprite(50,200,100,175);
  bullet.shapeColor = "yellow"

  wall = createSprite(1200,200,thickness,200);
  wall.shapeColor= color(230,230,230);

  
}

function draw() {
  background("blue"); 
  

  bullet.velocityX = speed;

  //hasCollided();
  if(hasCollided(bullet, wall)){

    bullet.velocityX=0;

    damage = (0.5*weight*speed*speed)/(thickness*thickness*thickness)
  }
    if(damage>10){
      wall.shapeColor=color(255,0,0);
    }

    if(damage<10){
      wall.shapeColor=color(0,255,0);
    }
  

  
  //if(weight=32&&speed=223&&thickness=70&&damage=3.68){
  //    bullet.shapeColor = color(0,255,0);
  //}

  //if(weight=32&&speed=223&&thickness=40&&damage=12.43){
  //  bullet.shapeColor = color(255,0,0);
  //}



  drawSprites();
}



function hasCollided(b, w){
  bulletRightEdge=b.x + b.width;
    wallLeftEdge = w.x;

    if(bulletRightEdge>=wallLeftEdge){
      return true;
    }

    return false;
}


  

