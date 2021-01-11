class Ground{
    constructor(x,y,width,height){
        var options = {
        isStatic: true}
        this.body = Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body)
        
        }
        display(){
            var pos = this.body.position;
            rectMode(CENTER);
            fill("red");
            stroke("black");
            rect(pos.x,pos.y,this.w,this.h);
        }
};