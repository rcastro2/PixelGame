var left = 37, up = 38, right = 39, down = 40;
var size = 60;
var board;
var obstacles = [];

function initBoard(){
  board = new Array(size);
  for(r = 0; r < board.length; r++)
    board[r] = new Array(size);
}
function initObstacles(){
  for(a = 0; a < 60; a++){
    asize = Math.floor(Math.random()*4)+1;
    ax = Math.floor(Math.random()*size - asize)
    ay = Math.floor(Math.random()*size*3 - asize)
    obstacles.push(new Enemy(ax,-ay,asize))
  }
}

function clearBoard(){
  for(r = 0; r < board.length; r++)
    for(c = 0; c < board[r].length; c++)
      board[r][c] = false;
}
function displayBoard(){
  var build = ""
  for(r = 0; r < board.length; r++)
    for(c = 0; c < board[r].length; c++)
      if(board[r][c]){
        build += "<div class='pixel white'></div>"
      }else {
        build += "<div class='pixel black'></div>"
      }
  document.getElementById("game").innerHTML = build;
}
