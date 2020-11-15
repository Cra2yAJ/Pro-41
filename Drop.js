class Drop{

    constructor(x, y, radius) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.circle(x, y,radius, options);
        this.radius = radius;
        World.add(world, this.body);
        this.drops = [];
      }

      update(postion){
        database.ref('/').update({
            drop : postion
          });
        }
      

      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        circleMode(CENTER);
        ellipse( 0, 0, this.radius);
        this.drops = push(drop)
        pop();
      }
}





