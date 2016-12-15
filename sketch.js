var ship;
var enemies = [];
var projectiles = [];

function setup(){
  createCanvas(600, 400);
  ship = new Ship();
  for (var i = 0; i < 6; i++){
    enemies[i] = new Enemy(i*80+80, 60);
  }
}

function draw(){
  background(51);
  ship.show();
  ship.move();
  var edge = false;
  for (var i = 0; i < enemies.length; i++){
    enemies[i].show();
    enemies[i].move();
    if(enemies[i].x > width || enemies[i].x < 0){
      edge = true;
    }
  }
  
  if (edge){
    for (var i = 0; i < enemies.length; i++){
      enemies[i].shiftDown();
    }
  }
  
  for (var i = 0; i < projectiles.length; i++){
    projectiles[i].show();
    projectiles[i].move();
    for (var j = 0; j < enemies.length; j++){
      if (projectiles[i].hits(enemies[j])){
        enemies[j].delete();
        projectiles[i].delete();
      }
    }
  }
  //check to delete projectiles
  for (var i = projectiles.length-1; i >= 0; i--){
    if (projectiles[i].toDelete){
      projectiles.splice(i, 1);
    }
  }
  
  for (var i = enemies.length-1; i >= 0; i--){
    if (enemies[i].toDelete){
      enemies.splice(i, 1);
    }
  }
}

function keyReleased(){
  if(key != ' '){
   ship.setDir(0);
  }
}

function keyPressed(){
  if (key === ' '){
    var projectile = new Projectile(ship.x, height);
    projectiles.push(projectile);
  } 
  
  if (keyCode === RIGHT_ARROW){
    ship.setDir(1);
  } else if (keyCode === LEFT_ARROW){
    ship.setDir(-1);
  }
}