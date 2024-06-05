//Tu código va aquí. Recordad que teneis toda la documentacion en https://p5js.org/es/reference/
var ladrillos = [];

var x = 0;
var y = 0;
var v = 1;

var posXPala = 610;
var posYPala = 700;
var posXBola = 640;
var posYBola = 690;

var velocidadXBola = 2;
var velocidadYBola = -2;

var imgPala;

function setup() {
    createCanvas(1280, 720);
    colorMode(RGB);
    background(220);
    
    for(let j = 0; j<3;j++){
        for (let index = 0; index < 10; index++) {
            rect(x,y,128,10)
            ladrillos.push({x:x,y:y,isBroken:false,vidasLadrillo:v})
            x=x+128;   
        }
        x=0;
        y=y+10;
    }
}

function redibujarLadrillos(){
    ladrillos.forEach(ladrillo => {
        if(!ladrillo.isBroken){
            fill(152,245,249);
            stroke(0,8);
            rect(ladrillo.x,ladrillo.y,128,10)
        }
    });
}

function ComprobarSiChocaLadrillo(){
    ladrillos.forEach(ladrillos =>{
        if(!ladrillos.isBroken){
            if((ladrillos.y == posYBola && posXBola>= ladrillos.x)&& posXBola<=ladrillos.x+128){
                ladrillos.isBroken = true;
                velocidadYBola = velocidadYBola * -1;
            }
        }
    })
}

function preload(){
    imgPala = loadImage('assets/imgPala.png');
}

function draw() {
    background(220); 
    redibujarLadrillos();
    ComprobarSiChocaLadrillo();

    fill(254,153,0);
    noStroke();
    ellipse(posXBola, posYBola, 10, 10)
    noFill();
    if(posXBola<=5 || posXBola >=1275){
        velocidadXBola = velocidadXBola * -1;
    }
    if(posYBola<=5 ){
        velocidadYBola=velocidadYBola*-1;

    }
    if(posYBola ==716){
        location.reload();
    }
    if(posYBola == posYPala && (posXBola >=posXPala && posXBola <= posXPala+60)){
        velocidadYBola = velocidadYBola * -1;
    }
    posXBola = posXBola + velocidadXBola;
    posYBola = posYBola + velocidadYBola;
    fill(204,108,231);
    image(imgPala,posXPala,posYPala,60,10)
    noFill();
    keydown();
}

function keydown(){
    if (keyIsDown(37) && posXPala > 0) {
        posXPala = posXPala-10;
      }
      if(keyIsDown(39) && posXPala < (1280-60)){
        posXPala = posXPala +10;
      }
}