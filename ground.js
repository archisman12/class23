class Ground{
    constructor(x,y,width,height){
        Option={isStatic:true
        }
        this.body=Bodies.rectangle(x,y,width,height,Option)
        this.width=width;
        this.height=height;
    
    World.add(world,this.body)
    }
    display(){
    push ();
    
    rectMode(CENTER)
    fill (225);
    rect(this.body.position.x,this.body.position.y,this.width,this.height);
    
    pop ();
    
    
    
    }
    
    };