var left = 37, up = 38, right = 39, down = 40;

var obstacles = [];

var board = {
  rows:50,
  columns:60,
  default:"#600",
  background:"#900",
  width:12,
  height:12,
  init: function(){
    //Establish "pixels"
    var game = document.getElementById("game");
    var div, br = document.createElement("BR");
    game.innerHTML = "";
    this.pixel = new Array(this.row)
    for(var r = 0; r < this.rows; r++){
      this.pixel[r] = new Array(this.columns);
      for(var c = 0; c < this.columns; c++){
        div = document.createElement("DIV")
        this.pixel[r][c] = div
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
    rules[0].style.width = this.width + 'px';
    rules[0].style.height = this.height + 'px';

    rules[1].style.width = (this.width * this.columns) + 'px';
    rules[1].style.height = (this.height * this.rows) + 'px';
    console.log("%cBoard Initialized",'background:green;color:white');
  },
  setObstacles:function(){
    for(var a = 0; a < 40; a++){
      asize = Math.floor(Math.random()*3)+1;
      ax = Math.floor(Math.random()*(this.columns - asize - 1) + 1);
      ay = Math.floor(Math.random()*this.rows * 4)
      obstacles.push(new Enemy(ax,-ay,asize))
    }
    console.log("%cObstacles Initialized","color:white;background:green");
  },
  clear:function(){
    for(var r = 0; r < this.rows; r++)
      for(var c = 0; c < this.columns; c++)
        if(this.pixel[r][c].style.background != "radial-gradient(" + this.default + "," + this.background + ")"){
          this.setPixel(r,c,this.default);
        }
  },
  setPixel:function(r,c,color){
    this.pixel[r][c].style.background = "radial-gradient(" + color + ",#A00)";
  },
  displayText:function(msg,x,y,color){
    var letterOffset = 0;
    for(var k = 0; k < msg.length; k++){
      var c = msg.substring(k,k+1);
      for(var i = 0; i < letters[c].length;i++){
        var offsetx = letters[c][i].offsetx;
        var offsety = letters[c][i].offsety;
        if((y + offsety) >=0  && (y + offsety) < this.rows && (x + offsetx + letterOffset) >= 0 && (x + offsetx + letterOffset) < this.columns){
          this.setPixel(y + offsety , x + offsetx + letterOffset, color);
        }
      }
      letterOffset += 4;
    }
  }
}
