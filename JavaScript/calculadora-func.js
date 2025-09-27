const prompt = require('prompt-sync')();

function obterNumeroValido( mensagem ){
    let valorNumerico = prompt(mensagem);
    valorNumerico = Number(valorNumerico);
    while(isNaN(valorNumerico)){
        console.log("Numero Invalido.\n   Tente Novamente !!");
        valorNumerico = prompt(mensagem);
        valorNumerico = Number(valorNumerico);
    }
    return valorNumerico;
}

function obterOperacaoMatematica(){
    let valorOperacional = prompt("Informe uma operação [ + - / * ** # ] : ");
    while(valorOperacional != '+' && valorOperacional != '-' && valorOperacional != '/' && valorOperacional != '*' && valorOperacional != '**' && valorOperacional !='#'){
       console.log("Valor Invalido.    Tente Novamente")
       valorOperacional = prompt("Informe uma operação [ + - / * ** # ] : ");
    }  
    return valorOperacional;
}

function simOuNao(){
    let opcaoSelecionada = prompt("Deseja continuar? SIM = S, NÃO = N : ");
    while(opcaoSelecionada.toUpperCase() != "N" && opcaoSelecionada.toUpperCase() != "S"){
        console.clear();
        console.log("Valor Invalido, Tente Novamente")
        opcaoSelecionada = prompt("Deseja continuar? SIM = S, NÃO = N : ");
    }
    return opcaoSelecionada;
}

let desejaContinuar = "S";

while(desejaContinuar.toUpperCase() == "S" ){

    let valorNumerico1 = obterNumeroValido("Informe um valor Válido para calculo : ");    
    let operacaoMatema = obterOperacaoMatematica();
    let valorNumerico2 = obterNumeroValido("Informe um valor Válido para calculo : ");  
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
    desejaContinuar = simOuNao();

}
