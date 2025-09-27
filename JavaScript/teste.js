const prompt = require('prompt-sync')();

let pessoa = {
    nome : '',
    sexo : '',
    idade: '',
} 

for(let i = 0; i < 5; i++){ pessoa.nome = prompt("Informe o Nome :");

pessoa.idade = prompt("Informe a Idade :");

pessoa.sexo = prompt("Informe o Sexo :");

console.table(pessoa) }