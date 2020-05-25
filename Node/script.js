// let a = 68
// let b = 15
// let c = soma(a, b);
// 
// function soma(x, y){
//     return x + y;
// }
// 
// console.log(c);


//window e document só existem no navegador
//Mesmo sendo a mesma linguagem, algumas coisas só rodam no nav, e n no back



// let args = process.argv.slice(2);
// 
// console.log(args);
// 
// let a = Number(args[1]);
// let b = Number(args[2]);
// let c = "";
// 
// if(args[0] == 's'){
//     c = soma(a, b);
// }else if(args[0] == 'm'){
//     c = mult(a, b);
// }else{
//     c = "Opção inválida."
// }
// 
// function soma(x, y){
//     return x + y;
// }
// 
// function mult(x, y){
//     return x * y;
// }
// 
// console.log(c);


let calc = require("./calc");
let args = process.argv.slice(2);

console.log(args);

let a = Number(args[1]);
let b = Number(args[2]);
let c = "";

if(args[0] == 's'){
    c = calc.soma(a, b);
}else if(args[0] == 'm'){
    c = calc.mult(a, b);
}else{
    c = "Opção inválida."
}

console.log(c);


