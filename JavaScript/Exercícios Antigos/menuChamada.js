const prompt = require('prompt-sync')();
var menu = require("./menu")

function menuOpcoes(){

    let opcaoSelecionada = 0;

    while(opcaoSelecionada != 9){
        opcaoSelecionada = menu.montarMenu();
        console.log(opcaoSelecionada);
        prompt("...");
        if(opcaoSelecionada == 9){
            console.log("Fim do Programa. Desligando...");
        }else if(opcaoSelecionada == 1){
            menu.listarRegistro(opcaoSelecionada);
        }else if(opcaoSelecionada == 2){
            menu.incluirRegistro(opcaoSelecionada);
        }else if(opcaoSelecionada == 3){
            menu.alterarRegistro(opcaoSelecionada);
        }else if(opcaoSelecionada == 4){
            menu.excluirRegistro(opcaoSelecionada);
        }else{ 
            console.log("Opção Invalida");
        };

        prompt ("Pressione a tecla [ENTER]");
        
    };
}

menuOpcoes()