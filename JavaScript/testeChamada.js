var funcoesDeListaNumerica = require('./AnalisadorDeNumeros');

function chamadaDasFuncoes(){

    let listaDeValores = funcoesDeListaNumerica.obtendoALista();
    listaDeValores = funcoesDeListaNumerica.ordenacaoNumerica(listaDeValores);
    let somaDosValores = funcoesDeListaNumerica.Soma(listaDeValores);
    let paresEImpares = funcoesDeListaNumerica.contadorDeImparesEPares(listaDeValores);
    
    console.log('A Lista De Valores Ficou : ',listaDeValores);
    console.log("O valor total é : ", somaDosValores);
    let mediaDosValores = somaDosValores / listaDeValores.length;
    console.log("A média é : ", mediaDosValores);
    console.log('Pares e Impares : ', paresEImpares);
    console.log("O menor valor é : ",listaDeValores[0]);
    console.log("O maior valor é : ",listaDeValores[listaDeValores.length -1]);
    console.log("Execução Finalizada")
}
    
chamadaDasFuncoes();