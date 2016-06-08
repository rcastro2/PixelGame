      var hero = {
        x:0,
        y:0,
        blocks:[],
        vertical:0,
        horizontal:0,
        moveTo:function(x,y){
          this.x=x;
          this.y=y;
        },
        draw:function(obj){
          this.blocks = [{"x":this.x,"y":this.y-1},
                    {"x":this.x-1,"y":this.y},
                    {"x":this.x,"y":this.y},
                    {"x":this.x+1,"y":this.y}
                   ]
          for(i=0;i<this.blocks.length;i++){
            board[this.blocks[i].y][this.blocks[i].x] = true;
          }

        },
        processKeys:function(key,status){
          if(status == "down"){
            if( key == left || key == right)
              hero.horizontal = key;
            if( key == up || key == down )
              hero.vertical = key;
          }else if(status == "up"){
            if( key == left || key == right)
              hero.horizontal = 0;
            if( key == up || key == down)
              hero.vertical = 0;
          }
        },
        move:function(){
          if(hero.horizontal == left && hero.x - 1 > 0)
            hero.x--;
          else if(hero.horizontal == right  && hero.x + 1 < size - 1)
            hero.x++;

          if(hero.vertical == up && hero.y - 1 > 0)
            hero.y--;
          else if(hero.vertical == down && hero.y < size - 1)
              hero.y++;
          this.draw();
        }
      }
