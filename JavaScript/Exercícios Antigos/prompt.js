const prompt = require('prompt-sync')();

let numeroPessoas = '';

let pessoa = {
    nome : "",
    sexo : '',
    idade: 0,
    ordem: 0
};

let pessoas = []
numeroPessoas = prompt ("Informe o Número de Pessoas : ");

for(let i = 0; i < numeroPessoas; i++){    
    console.log("");
    console.log("Informe Pessoa", i + 1 ,":");
    pessoa.ordem = i + 1;
    pessoa.nome = prompt("   Nome : ");
    pessoa.idade = prompt("   Idade : ");
    pessoa.sexo = prompt("   Sexo (M ou F) : ");
    pessoas.push({
        nome : pessoa.nome,
        sexo : pessoa.sexo,
        idade: pessoa.idade,
        ordem: pessoa.ordem,
    });
}

console.table(pessoas);