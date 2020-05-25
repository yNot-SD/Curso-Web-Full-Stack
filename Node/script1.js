let fs = require('fs');


// writeFile vai sobrescrever e o appendFile concatenar
// NomeDoArquivo, Texto, funçãoC/error
fs.writeFile('teste.txt', 'Hello World', function(error){
    if(error){throw error};

    console.log("Arquivo criado com sucesso!!");
});

// rename renomeia o arquivo
// NomeDoArquivo, NovoNomeArquivo
fs.rename('teste.txt', 'NovoNome.txt', function(error){
    if(error){throw error};
    
    console.log("Arquivo Renomeado com sucesso!!");
});

// readFile lê o arquivo.
// NomeDoArquivo, formato, e adiciona data na function
fs.readFile('NovoNome.txt',"UTF8", function(error, data){
    if(error){throw error};
    
    console.log(data);
    console.log("Arquivo lido com sucesso!!");
});

// unlink apaga
//Só recebe o nome do arquivo
fs.unlink('teste.txt', function(error){
    if(error){throw error};

    console.log("Arquivo apagado com sucesso!!");
});