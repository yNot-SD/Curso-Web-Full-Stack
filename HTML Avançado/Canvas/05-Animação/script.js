let tela = document.getElementById("tela");

let ctx = tela.getContext("2d");


let circle = {
    x: 100,
    y: 100,
    raio: 50,
    
    inicioRadianus: 0,
    fimRadianus: 0,
    
}

function drawCircle(c) {
    ctx.beginPath();
    ctx.rect(0, 0, 200, 200);
    ctx.fillStyle = "beige";
    ctx.fill();

    ctx.beginPath();
    ctx.strokeStyle = "red";
    ctx.fillStyle = "blue";
    ctx.arc(c.x, c.y, c.raio, c.inicioRadianus, c.fimRadianus);
    
    ctx.fill();
    ctx.stroke();

}

setInterval(function (){

    if (circle.fimRadianus < 2 * Math.PI) {
        circle.fimRadianus += 0.3;
        circle.x += 2;
        
    }
    drawCircle(circle);
}, 100);








