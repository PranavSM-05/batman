class Drop{
    constructor(x,y){
        var options = {
            'friction' : 0.1
        }
        this.body = Bodies.circle(x,y,10,options);
        World.add(world,this.body);
    }
    display(){
        if(this.body.position.y > height){
            Matter.Body.setPosition(this.body,{x:random(0,400),y:random(0,400)})
        }
        push();
        translate(this.body.position.x, this.body.position.y);
        fill("blue");
        ellipseMode(CENTER);
        ellipse(0,0,10);
        pop();
    }
}