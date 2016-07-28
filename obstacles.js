var obstacles = {
  board:null,
  items:[],
  size:5,
  set:function(board){
    this.board = board;
    for(var a = 0; a < 40; a++){
      console.log(this.size);
      this.items.push(new Enemy(this.size));
    }
    console.log("%c" + this.items.length + " Obstacles Initialized","color:white;background:green");
  },
  increase:function(){
    this.items.push(new Enemy(this.size));
  }

}
