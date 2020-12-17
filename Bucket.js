class Bucket{
    constructor(x,y,width,height){
       var option = {
           isStatic : true
       }
        this.body = Bodies.rectangle(x,y,width,height,option)
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
      //  this.image = loadImage("images/dustbingreen.png");
        World.add(world, this.body);
    }
    display(){
        rectMode (CENTER)
        strokeWeight(0)
        fill (180)
        rect(this.x,this.y,this.width,this.height)
      
    }
}