let pessoa = {
    nome : "Fulano",
    sexo : "M",
    idade: 57,
} 

function avaliarPessoa(pessoaAvaliada){
    console.log("pessoa avaliada : " + pessoaAvaliada.nome);    
   
    if ( !(pessoaAvaliada.sexo == 'M' || pessoaAvaliada.sexo == 'F') ){
        console.log("Campo sexo Invalido");
    };

    if(pessoaAvaliada.sexo == 'M'){
        if (pessoaAvaliada.idade<= 14){
            console.log("é um Menino")
        }else if (pessoaAvaliada.idade > 14 && pessoaAvaliada.idade <= 20){
            console.log("é um Rapaiz")
        }else if (pessoaAvaliada.idade > 20 && pessoaAvaliada.idade <= 60){
            console.log("é um Homem")
        }else if (pessoaAvaliada.idade > 60){
            console.log("é um Senhor")  
        }
    } else {
        if (pessoaAvaliada.idade<= 14){
            console.log("é um Menina")
        }else if (pessoaAvaliada.idade > 14 && pessoaAvaliada.idade <= 20){
            console.log("é um Moça")
        }else if (pessoaAvaliada.idade > 20 && pessoaAvaliada.idade <= 60){
            console.log("é um Mulher")
        }else if (pessoaAvaliada.idade > 60){
            console.log("é um Senhora")
        }
    }

    console.log("idade : " + pessoaAvaliada.idade + "\n");
    
}

console.table(pessoa);

 avaliarPessoa(pessoa);
console.log("[==> testando o meu programa \n"); 

pessoa.nome = "Hugo";
pessoa.sexo = "M";
pessoa.idade = "46";
console.table(pessoa);


avaliarPessoa(pessoa);
 
pessoa.nome = "Valmir";
pessoa.sexo = "M";
pessoa.idade = "71"
avaliarPessoa(pessoa);

pessoa.nome = "Maria";
pessoa.sexo = "F";
pessoa.idade = "67"
avaliarPessoa(pessoa);

pessoa.nome = "Alessandra";
pessoa.sexo = "F";
pessoa.idade = "39"
avaliarPessoa(pessoa);

pessoa.nome = "Isabela";
pessoa.sexo = "F";
pessoa.idade = "16"
avaliarPessoa(pessoa);

pessoa.nome = "Daniel";
pessoa.sexo = "M";
pessoa.idade = "12"
avaliarPessoa(pessoa);

pessoa.nome = "Jackson";
pessoa.sexo = "M";
pessoa.idade = "57"
avaliarPessoa(pessoa);

pessoa.nome = "Fernanda";
pessoa.sexo = "F";
pessoa.idade = "52"
avaliarPessoa(pessoa);
