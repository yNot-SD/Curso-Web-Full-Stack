let jogador = document.getElementById("jogador");

let xInicial = 0;
let yInicial = 0;

function move(x, y){
    let posX = x + "px";
    let posy = y + "px";
    
    jogador.style.top = posX;
    jogador.style.left = posy;
}

setInterval(function(){
    move(xInicial++, yInicial++);
}, 20)