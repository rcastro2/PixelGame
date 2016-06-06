function Enemy(x,y,size){
  this.x = x;
  this.y = y;
  this.size = size;
  this.draw = function(){
    for(r = 0; r < size; r++)
      for(c = 0; c < size; c++)
        if(this.y >=0  && this.y + r < board.length ){
          board[this.y + r][this.x + c] = true;
        }
  }
  this.move = function(){
    this.y++;
    this.draw();
  }
}
