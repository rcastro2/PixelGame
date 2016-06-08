var left = 37, up = 38, right = 39, down = 40;
var size = 60;
var board;
var obstacles = [];


function initBoard(){
  var div;
  board = new Array(size);
  for(r = 0; r < board.length; r++){
    board[r] = new Array(size);
    for(c = 0; c < board[r].length; c++){
      div = document.createElement("DIV")
      board[r][c] = div
      document.getElementById("game").appendChild(div);
    }
  }
}
function initObstacles(){
  for(a = 0; a < 20; a++){
    asize = Math.floor(Math.random()*4)+1;
    ax = Math.floor(Math.random()*size - asize)
    ay = Math.floor(Math.random()*size*3 - asize)
    obstacles.push(new Enemy(ax,-ay,asize))
  }
}

function clearBoard(){
  for(r = 0; r < board.length; r++)
    for(c = 0; c < board[r].length; c++)
      if(board[r][c].style.backgroundColor != "black")
        board[r][c].style.backgroundColor = "black";
}
