      var hero = {
        x:30,
        y:30,
        blocks:[],
        vertical:0,
        horizontal:0,
        moveTo:function(x,y){
          this.x=x;
          this.y=y;
        },
        draw:function(obj){
          this.blocks =  [{"x":this.x,"y":this.y-1},
                          {"x":this.x-1,"y":this.y},
                          {"x":this.x,"y":this.y},
                          {"x":this.x+1,"y":this.y}
                         ]
          for(i=0;i<this.blocks.length;i++){
            board[this.blocks[i].y][this.blocks[i].x].style.backgroundColor = "white";
          }

        },
        processKeys:function(key,status){
          if(status == "down"){
            if( key == left || key == right)
              this.horizontal = key;
            if( key == up || key == down )
              this.vertical = key;
          }else if(status == "up"){
            if( key == left || key == right)
              this.horizontal = 0;
            if( key == up || key == down)
              this.vertical = 0;
          }
        },
        move:function(){
          if(this.horizontal == left && this.x - 1 > 0)
            this.x--;
          else if(this.horizontal == right  && this.x + 1 < size - 1)
            this.x++;

          if(this.vertical == up && this.y - 1 > 0)
            this.y--;
          else if(this.vertical == down && this.y < size - 1)
              this.y++;
          this.draw();
        }
      }
