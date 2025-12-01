const prompt = require('prompt-sync')();

let tamanhoDaLista = prompt("Quantos Nomes? : ")
let listaDeNomes = [];

for(index = 0; index < tamanhoDaLista; index++){
    let nomes = prompt("Quais nomes? *Informe um de cada vez* : ");
    listaDeNomes[index] = nomes;
    console.log(nomes);
}
console.log("A Lista de Nomes Era : ", listaDeNomes);

listaDeNomes.sort((a, b) => {
    if (a > b)
        return 1;
    if (a < b)
        return -1;
    return 0;
});

// Criei uma alteração para exemplificar o uso do commit.

console.log(listaDeNomes);