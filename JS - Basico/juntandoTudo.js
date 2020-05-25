var nomes = ["Igor", "Joaquim", "Kleber"];
var notasA = [5.0, 7.5, 10];
var notasB = [6.0, 8.0, 8.0];

function media(n1, n2){
    return(n1 + n2)/2;
}

function passou(media){

    if(media > 7){
        return "Aprovado";
    } else {
        return "Reprovado";
    }
}

for (var index in nomes){

    var nota1 = notasA[index];
    var nota1 = notasA[index];

    var m = media(nota1, nota2);

    console.log(nomes[index] +
        " - " +
        nota1 +
        " - " +
        nota2 +
        " - " +
        passou(m));
}