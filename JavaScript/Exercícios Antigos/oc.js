const prompt = require('prompt-sync')();

let valores = [45, 38, 7, 4, 53, 70, 3, 19,];
let vetorOrdem = [];
let menorValor;
console.log("valores : ", valores);

while(valores.length != 1){
     menorValor = valores[0];
    let idxMenorValor = 0;
    for( i = 0; i < valores.length; i++ ){
        let proximoValor = valores[i+1];
        if(menorValor > proximoValor){
            menorValor = proximoValor;  
            idxMenorValor = i+1;
        } 
    }
    vetorOrdem.push(menorValor);
    valores.splice(idxMenorValor, 1);
    if(valores.length == 1) {
        vetorOrdem.push( valores[0]);
    }
}

console.log("vetorOrdem : ",vetorOrdem);7 