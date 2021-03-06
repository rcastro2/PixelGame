function Enemy(size){
  this.size = Math.floor(Math.random()*size)+3;
  this.x = Math.floor(Math.random()*(board.columns - this.size) + 1);;
  this.y = -Math.floor(Math.random()*board.rows * 4);

  this.onScreen = false;
  this.dead = false;
  this.blocks = new Array(this.size);
  this.color = "#CCC";
  this.draw = function(){
    pos = 0
    for(var r = 0; r < this.size; r++)
      for(var c = 0; c < this.size; c++)
        if(this.y >=0  && this.y + r < board.rows && this.x >= 0 && this.x + c < board.columns){
          this.blocks[pos++] = {"x":this.x + c,"y":this.y + r};
          board.setPixel(this.y + r,this.x + c, this.color);
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
    this.x = Math.floor(Math.random()*(board.rows - this.size) + 1);
    this.y = -Math.floor(Math.random()*board.columns * 4)
    this.dead = false;
  }
}
