let tela = document.getElementById("tela");

let ctx = tela.getContext("2d");

ctx.beginPath();

ctx.lineWidth = 2;
ctx.strokeStyle = "red";
ctx.moveTo(10, 10);
ctx.lineTo(100, 150);
ctx.stroke();


ctx.beginPath();

ctx.lineWidth = 2;
ctx.strokeStyle = "blue";
ctx.fillStyle = "green";
ctx.moveTo(40, 10);
ctx.lineTo(100, 80);
ctx.lineTo(40, 70);
ctx.closePath();
ctx.fill();
ctx.stroke();


