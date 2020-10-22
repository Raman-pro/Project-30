class Shooter{
    constructor(x,y,r){
        this.body=Bodies.polygon(x,y,6,r,{
            isStatic:false,
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        });
        this.r=r;
        this.image= loadImage('polygon.png')
        World.add(world, this.body);
        this.Visibility=255;
    }
    display(){
        // if(this.body.speed<3){
            var pos =this.body.position;
            rectMode(CENTER);
            fill("brown");
            image(this.image,pos.x, pos.y, this.r, this.r);
        // }
    }
}
