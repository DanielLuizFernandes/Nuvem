const prompt = require('prompt-sync')();

let menu = {

    montarMenu: function(){ 
        console.clear();
        console.log("1- Listar registros");
        console.log("2- Incluir registro");
        console.log("3- Alterar registro");
        console.log("4- Excluir registro");
        console.log("9- Sair do Programa");

        let memoria = '';

        memoria = prompt ("Informe o Número da Opção [1, 2, 3, 4, 9]: ");

        console.clear();
        return memoria;
    },

    incluirRegistro: function(opt){
        console.clear();
        console.log(opt, "- Incluindo Registro");
    },

    alterarRegistro: function(opt){
        console.clear();
        console.log(opt, "- Alterando Registro");
    },

    listarRegistro: function(opt){
        console.clear();
        console.log(opt, "- Listando Registro");
    },

    excluirRegistro: function(opt){
        console.clear();
        console.log(opt, "- Excluindo Registro");
    }
}

module.exports = menu