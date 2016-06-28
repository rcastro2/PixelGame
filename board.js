var left = 37, up = 38, right = 39, down = 40;
var board = {"rows":80,"columns":80,"default":"black","width":10, "height":10};
var obstacles = [];

function initBoard(){
  //Establish "pixels"
  var game = document.getElementById("game");
  var div, br = document.createElement("BR");
  game.innerHTML = "";
  board.pixel = new Array(board.row)
  for(var r = 0; r < board.rows; r++){
    board.pixel[r] = new Array(board.columns);
    for(var c = 0; c < board.columns; c++){
      div = document.createElement("DIV")
      board.pixel[r][c] = div
      game.appendChild(div);
    }
    game.appendChild(br);
  }
  //Adjust "pixel" sizes and game width;
  var rules = [];
  if (document.styleSheets[0].cssRules)
      rules = document.styleSheets[0].cssRules;
  else if (document.styleSheets[0].rules)
      rules = document.styleSheets[0].rules;
  rules[0].style.width = board.width + 'px';
  rules[0].style.height = board.height + 'px';

  rules[1].style.width = (board.width * board.columns) + 'px';
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
      if(board.pixel[r][c].style.backgroundColor != board.default){
        board.pixel[r][c].style.backgroundColor = board.default;
      }
}
function displayText(msg,x,y,color){
  var letterOffset = 0;
  for(var k = 0; k < msg.length; k++){
    var c = msg.substring(k,k+1);
    for(var i = 0; i < letters[c].length;i++){
      var offsetx = letters[c][i].offsetx;
      var offsety = letters[c][i].offsety;
      if((y + offsety) >=0  && (y + offsety) < board.rows && (x + offsetx + letterOffset) >= 0 && (x + offsetx + letterOffset) < board.columns){
        board.pixel[y + offsety][x + offsetx + letterOffset].style.backgroundColor = color;
      }
    }
    letterOffset += 4;
  }

}
