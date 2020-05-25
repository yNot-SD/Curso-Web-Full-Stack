// Não permite que use var/let/const que não foram declaradas
"use strict";

var x = 7;

function imprimir(){
    y = 7
    console.log(y)
}

imprimir();
console.log(x);
console.log(y);
console.log(window)