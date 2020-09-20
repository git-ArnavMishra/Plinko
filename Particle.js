class Particle {
    constructor(x,y,d,r,g,b) {
      var options = {
        isStatic:false,
          restitution:0.001,
          friction:8,
          density:1,
          gravity:20
          
          
      }
      this.body = Bodies.circle(x, y,d/2,options);
      this.color = color(random(0,255), random(0,255), random(0,255));
     this.width = d;
     this.height = d;
     this.r = r;
     this.g = g;
     this.b = b;
      
      World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        //this.body = Bodies.circle(x,y, this.r,options);
       
        //World.add(world, this.body);
      //  var angle = this.body.angle;
        //push();
      //  translate(pos.x, pos.y);
        //rotate(angle);
        ellipseMode(CENTER);
        fill(random(0,255), random(0,255), random(0,255));
          ellipse(pos.x, pos.y,this.width);
        //pop();
        
      }
   
 
  };