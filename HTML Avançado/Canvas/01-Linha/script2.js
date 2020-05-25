let tela = document.getElementById("tela");

let context = tela.getContext("2d");
context.moveTo(0, 0);
context.lineWidt = 5;
context.lineTo(100, 100);
context.lineTo(200, 0);
context.strokeStyle = "red";

context.stroke();