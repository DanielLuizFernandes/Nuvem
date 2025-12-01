const prompt = require('prompt-sync')();
 
let tamanhoDaLista = prompt("Quantos Valores ? ")
let listaDeValores = [];
    listaDeValores.length = tamanhoDaLista
    
for(index = 0; index < tamanhoDaLista; index++){
    let valorInformado = prompt("Quais valores? *Informe um de cada vez* : ")
    valorInformado = Number(valorInformado)
    listaDeValores[index] = valorInformado
    console.log(valorInformado)
};
let idxSeguinte = 1;
let menorValor;

console.log(listaDeValores);
function ordenacaoNumerica(){
    let sinalDeTroca = false;
    for(idx = 0; idx < listaDeValores.length - 1; idx++ ){
        idxSeguinte = idx + 1;
        if(listaDeValores[idx] > listaDeValores[idxSeguinte]){
            menorValor = listaDeValores[idxSeguinte]
            listaDeValores[idxSeguinte] = listaDeValores[idx]
            listaDeValores[idx] = menorValor
            sinalDeTroca = true;
        }
    }
    console.log(listaDeValores,sinalDeTroca);

    return sinalDeTroca
}


while(ordenacaoNumerica(listaDeValores) == true){}