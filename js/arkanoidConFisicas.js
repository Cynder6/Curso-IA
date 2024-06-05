class Bola{
    constructor(x,y,r){
        this.x=x;
        this.y=y;
        this.r=r;
        this.vx=0;
        this.vy=0;
        this.ay=2;
        ellipse(x,y,r,r);
    }
}
class Ladrillo{
    constructor(x,y,w,h,l){
        this.x=x;
        this.y=y;
        this.w=w;
        this.h=h;
        this.l=l;
        this.iB = false;
        rect(x,y,w,h);
    }
}

function setup(){
    createCanvas(1280, 720);
    background(200);
    var ladrillito = new Ladrillo(200,200,100,50,3);
    console.log(ladrillito);
}