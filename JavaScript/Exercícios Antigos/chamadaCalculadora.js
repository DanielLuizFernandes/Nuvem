var calculadora = require("./calculadora")

function fazerOperacaoMatematica(){
    let desejaContinuar = "S";

    while(desejaContinuar.toUpperCase() == "S" ){

        let valorNumerico1 = calculadora.obterNumeroValido("Informe um valor Válido para calculo : ");    
        let operacaoMatema = calculadora.obterOperacaoMatematica();
        let valorNumerico2 = calculadora.obterNumeroValido("Informe um valor Válido para calculo : ");  
        let resultado = undefined;

        if(operacaoMatema == '+'){
            resultado = valorNumerico1 + valorNumerico2;        
        } else if(operacaoMatema = '-'){
            resultado = valorNumerico1 - valorNumerico2;        
        } else if(operacaoMatema == '/'){
            resultado = valorNumerico1 / valorNumerico2;
        } else if(operacaoMatema == '*'){
            resultado = valorNumerico1 * valorNumerico2;
        } else if(operacaoMatema == '**'){
            resultado = valorNumerico1 ** valorNumerico2;
        } else if(operacaoMatema == '#'){
            resultado = Math.sqrt (valorNumerico1);        
        }

        console.clear();
        console.log("Resultado : ",valorNumerico1, " ", operacaoMatema, " ", valorNumerico2, " = ", resultado );
        desejaContinuar = calculadora.simOuNao();

    }
}

fazerOperacaoMatematica()