let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");

function calcular(){
    console.log("Calculando...")

    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;

    let qdtTotal = carnePP(duracao) * adultos + (carnePP(duracao)/2 * criancas);
    let qdtTotalBebida = bebidaPP(duracao)/2 * adultos + (carnePP(duracao)/2 * criancas);
    let qdtTotalCerveja = cervejaPP(duracao) * adultos;
    
    resultado.innerHTML = `<p>${qdtTotal / 1000}kg de Carne</p>`
    resultado.innerHTML += `<p>${Math.ceil(qdtTotalCerveja / 355)} latas de cervejas</p>`
    resultado.innerHTML += `<p>${Math.ceil(qdtTotalBebida/1000)} garrafas de 1L de bebidas</p>`
}

function carnePP(duracao){
    if (duracao >= 6) {
        return 600;
    }else{
        return 400;
    }

}

function cervejaPP(duracao){
    if (duracao >= 6) {
        return 2000;
    }else{
        return 1200;
    }

}

function bebidaPP(duracao){
    if (duracao >= 6) {
        return 1500;
    }else{
        return 1000;
    }

}



