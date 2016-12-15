function Projectile(x, y) {
  this.x = x;
  this.y = y;
  this.r = 8;
  this.toDelete = false;
  
  this.show = function(){
    noStroke();
    fill(15, 0, 255);
    ellipse(this.x, this.y, this.r*2, this.r*2);
  }
  
  this.delete = function(){
    this.toDelete = true;
  }
  
  this.move = function(){
    this.y = this.y - 5;
  }
  
  this.hits = function(enemy){
    var d = dist(this.x, this.y, enemy.x, enemy.y);
    if (d < this.r + enemy.r){
      return true;
    }else{
      return false;
    }
  }
}