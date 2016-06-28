function Enemy(x,y,size){
  this.x = x;
  this.y = y;
  this.size = size;
  this.onScreen = false;
  this.dead = false;
  this.blocks = new Array(this.size);
  this.color = "white";
  this.draw = function(){
    pos = 0
    for(var r = 0; r < this.size; r++)
      for(var c = 0; c < this.size; c++)
        if(this.y >=0  && this.y + r < board.rows && this.x >= 0 && this.x + c < board.columns){
          this.blocks[pos++] = {"x":this.x + c,"y":this.y + r};
          board.pixel[this.y + r][this.x + c].style.backgroundColor = this.color;
          this.onScreen = true;
        }else{
          this.onScreen = false;
        }
  }
  this.move = function(){
    this.y++;
    if(this.dead){
      this.recycle();
    }
    this.draw();
  }
  this.recycle = function(){
    this.size = Math.floor(Math.random()*3)+1;
    this.x = Math.floor(Math.random()*(board.rows - this.size - 1) + 1);
    this.y = -Math.floor(Math.random()*board.columns * 4)
    this.dead = false;
  }
}
