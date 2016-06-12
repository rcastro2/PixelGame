var left = 37, up = 38, right = 39, down = 40;
var board = {"rows":60,"columns":60};
var obstacles = [];

function initBoard(){
  var div;
  board.pixel = new Array(board.row)
  for(var r = 0; r < board.rows; r++){
    board.pixel[r] = new Array(board.columns);
    for(var c = 0; c < board.columns; c++){
      div = document.createElement("DIV")
      board.pixel[r][c] = div
      document.getElementById("game").appendChild(div);
    }
  }
  console.log("%cBoard Initialized",'background:green;color:white');
}
function initObstacles(){
  for(var a = 0; a < 40; a++){
    asize = Math.floor(Math.random()*3)+1;
    ax = Math.floor(Math.random()*(board.columns - asize - 1) + 1);
    ay = Math.floor(Math.random()*board.rows * 4)
    obstacles.push(new Enemy(ax,-ay,asize))
  }
  console.log("%cObstacles Initialized","color:white;background:green");
}
function clearBoard(){
  for(var r = 0; r < board.rows; r++)
    for(var c = 0; c < board.columns; c++)
      if(board.pixel[r][c].style.backgroundColor != "black"){
        board.pixel[r][c].style.backgroundColor = "black";
      }
}
function displayText(msg,x,y){
  for(var i = 0; i < letters["S"].length;i++){
    var offsetx = letters["S"][i].offsetx;
    var offsety = letters["S"][i].offsety;
    board.pixel[offsety][offsetx].style.backgroundColor = "yellow";
  }
}
