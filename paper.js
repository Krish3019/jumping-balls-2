class paper {
    constructor(x,y,radius) {
      var options = {
          isStatic: false,
          restitution:0.2,
          friction:0,
          density:1.2

      }
      this.x= x;
      this.y = y;
      this.r = radius;
      this.body = Matter.Bodies.circle(this.x,this.y,this.r/2,options);
      //ellipse(x, y, w, [h])
      this.image = loadImage("Sprites/paper.png");

      World.add(world, this.body);
    }

    display(){
        var pos =this.body.position;
        push()
        translate(pos.x,pos.y)
       // ellipse(0,0,this.r,this.r)
        fill("cyan");
        image(this.image,0,0,this.r,this.r)
        pop()
      }

};