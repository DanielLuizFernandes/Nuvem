const prompt = require('prompt-sync')();

let calculadora = {

    obterNumeroValido: function( mensagem ){
        let valorNumerico = prompt(mensagem);
        valorNumerico = Number(valorNumerico);
        while(isNaN(valorNumerico)){
            console.log("Numero Invalido.\n   Tente Novamente !!");
            valorNumerico = prompt(mensagem);
            valorNumerico = Number(valorNumerico);
        }
        return valorNumerico;
    },

    obterOperacaoMatematica: function(){
        let valorOperacional = prompt("Informe uma operação [ + - / * ** # ] : ");
        while(valorOperacional != '+' && valorOperacional != '-' && valorOperacional != '/' && valorOperacional != '*' && valorOperacional != '**' && valorOperacional !='#'){
        console.log("Valor Invalido.    Tente Novamente")
        valorOperacional = prompt("Informe uma operação [ + - / * ** # ] : ");
        }  
        return valorOperacional;
    },

    simOuNao: function(){
        let opcaoSelecionada = prompt("Deseja continuar? SIM = S, NÃO = N : ");
        while(opcaoSelecionada.toUpperCase() != "N" && opcaoSelecionada.toUpperCase() != "S"){
            console.clear();
            console.log("Valor Invalido, Tente Novamente")
            opcaoSelecionada = prompt("Deseja continuar? SIM = S, NÃO = N : ");
        }
        return opcaoSelecionada;
    },
}

module.exports = calculadora