var left = 37, up = 38, right = 39, down = 40;

function Board(container,r,c,w,h){
  this.container = container;
  this.rows = r;
  this.columns = c;
  this.default = "#900";
  this.background = "#600";
  this.width = 12;
  this.height = 12;
  this.litPixels = [];
  this.init = function(){
    //Establish "pixels"
    var game = document.getElementById(container);
    var div, br = document.createElement("BR");
    game.innerHTML = "";
    this.pixel = new Array(this.row)
    for(var r = 0; r < this.rows; r++){
      this.pixel[r] = new Array(this.columns);
      for(var c = 0; c < this.columns; c++){
        div = document.createElement("DIV")
        this.pixel[r][c] = div
        this.litPixels.push({"r":r,"c":c});
        game.appendChild(div);
      }
      game.appendChild(br);
    }
    console.log(this.litPixels)
    //Add CSSRule to "pixel" sizes and game size;
    var style = document.styleSheets[0];
    var pixelStyle = "width:" + this.width + "px;height:" + this.height + "px;float:left";
    var boardStyle = "width:" + (this.width * this.columns) + "px;height:" + (this.height * this.rows) + "px;";
    style.addRule("#" + this.container, boardStyle)
    style.addRule("#" + this.container + " div", pixelStyle);
    this.clear();
    console.log("%c" + this.container + " board Initialized",'background:green;color:white');

  }
  this.clear = function(){
    for(var p = 0; p < this.litPixels.length; p++){
      var r = this.litPixels[p].r;
      var c = this.litPixels[p].c;
      this.pixel[r][c].style.background = "radial-gradient(" + this.default + "," + this.background + ")";
    }
    this.litPixels = [];
  }
  this.setPixel = function(r,c,color){
    this.litPixels.push({"r":r,"c":c});
    this.pixel[r][c].style.background = "radial-gradient(" + color + "," + this.background + ")";
  }
  this.displayText = function(msg,x,y,color){
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
