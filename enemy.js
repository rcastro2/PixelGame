function Enemy(x,y,size){
  this.x = x;
  this.y = y;
  this.size = size;
  this.blocks = [];
  this.draw = function(){
    this.blocks = [];
    for(r = 0; r < size; r++)
      for(c = 0; c < size; c++)
        if(this.y >=0  && this.y + r < board.length ){
          this.blocks.push({"x":this.x + c,"y":this.y + r});
          board[this.y + r][this.x + c] = true;
        }
  }
  this.move = function(){
    this.y++;
    this.draw();
  }
}
