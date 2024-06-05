/*function setup(){
    createCanvas(1280,720);
    colorMode(RGB);
    background(204,108,231);

}*/

//Dibujar pentagono
/*function draw(){
    line(640,100,400,250);
    line(400,250,500,500);
    line(500,500,800,500);
    line(800,500,900,250);
    line(900,250,640,100);

    arc(640,360,100,100,TWO_PI,PI,CHORD)

}*/

//Escribir numeros pares del 2 al 10
/*for (let i = 2; i < 12; i=i+2) {
    console.log(i);
    
}*/

//Indicar si el numero dado es par o impar

//var num = prompt("Escriba numero",1);
//alert(EsPrimo(num));
/*EsPar(num);

function EsPar(x){
    
    if(x%2==0){
        return true;
    }
    else{
        return false;
    }
}*/


 //Indica si el numero es primo o no
/*function EsPrimo(x){
    //let esPrimo = true;
    for (let i = 2; i < x; i++) {
        if (x%i==0) {
            //esPrimo = false;
            return false;
            //console.log(i);
        }
        
    }
    //return esPrimo;
    return true;
}

//Escribe los 100 primeros numeros primos usando la funcion del ej anterior
function PrimerosPrimos(x){
    let heAcabado = false;
    let qNumeroVoy = 2;
    let cuantosPrimosLlevo = 0;
    while(!heAcabado){

        if (EsPrimo(qNumeroVoy)) {
            console.log(qNumeroVoy);
            cuantosPrimosLlevo++;
        }
        if (cuantosPrimosLlevo == 100) {
            heAcabado=true;
        }
        qNumeroVoy++;

    }
}
PrimerosPrimos();*/

//prueba de colores
var colores = []
var queColor;
function setup(){
    colorMode(RGB)
    colores.push(color(204,108,231));
    colores.push(color(228, 8, 10));
    colores.push(color(125, 218, 88));
    colores.push(color(239, 195, 202));
    queColor = random(colores);
}


function draw(){
    createCanvas(1280, 720);
    background(200);
    
    fill(queColor);
    rect(0,0,500,500);
    noFill();
}