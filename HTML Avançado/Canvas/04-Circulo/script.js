let tela = document.getElementById("tela");

let ctx = tela.getContext("2d");

let x = 100;
let y = 100;
let raio = 50;

let inicioRadianus = 0;
let fimRadianus = 2 * Math.PI;

ctx.beginPath();
ctx.fillStyle = "red";
ctx.strokeStyle = "red";

ctx.arc(x, y, raio, inicioRadianus, fimRadianus);
ctx.fill();
ctx.stroke();





