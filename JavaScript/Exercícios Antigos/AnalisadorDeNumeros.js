const prompt = require('prompt-sync')();

let funcoesDeListaNumerica = {

obtendoALista: function(){
    
    let tamanhoDaLista = prompt("Quantos valores? : ");
    tamanhoDaLista = Number(tamanhoDaLista);
    let listaDeValores = [];
    
    for(index = 0; index < tamanhoDaLista; index++){
        let valores = prompt("Quais valores? *Informe um de cada vez* : ");
        valores = Number(valores);
        listaDeValores[index] = valores;
        console.log(valores);
    }
    console.log("A Lista de Valores Era : ", listaDeValores);
    return listaDeValores;
},

ordenacaoNumerica: function(pListaDeValores){
    let sinalDeTroca = false;
    let menorValor;
    for(idx = 0; idx < pListaDeValores.length; idx++ ){
        idxSeguinte = idx + 1;
        if(pListaDeValores[idx] > pListaDeValores[idxSeguinte]){
            menorValor = pListaDeValores[idxSeguinte]
            pListaDeValores[idxSeguinte] = pListaDeValores[idx]
            pListaDeValores[idx] = menorValor;
            sinalDeTroca = true;
        }
    }
    if(sinalDeTroca == true){
        ordenacaoNumerica(pListaDeValores)
    }
    return pListaDeValores
},

contadorDeImparesEPares: function(listaDeValores){
    let impares = 0;
    let pares = 0;
    for(idx = 0; idx < listaDeValores.length; idx++ ){     
        if(listaDeValores[idx] % 2 > 0){
            impares++;
        }else{
            pares++;
        }
    }
    let paresEImpares = [pares,impares];
    return paresEImpares
},

Soma: function(listaDeValores){
    let somaDosValores = 0;
    for(idx = 0; idx < listaDeValores.length; idx++){ 
        somaDosValores = somaDosValores + listaDeValores[idx];
    }
    return somaDosValores;
}

}

module.exports = funcoesDeListaNumerica;
