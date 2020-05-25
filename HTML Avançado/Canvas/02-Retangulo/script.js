let tela = document.getElementById("tela");

let ctx = tela.getContext("2d");

//ctx.fillStyle = "blue";
//ctx.fillRect(10, 10, 50, 100);

//ctx.strokeStyle = "red";
//ctx.strokeRect(10, 10, 50, 100);

ctx.rect(10, 10, 50, 100);
ctx.fillStyle = "blue";
ctx.lineWidth = 2;
ctx.strokeStyle = "red";
ctx.fill();
ctx.stroke();

ctx.clearRect(15, 15, 20, 20);





