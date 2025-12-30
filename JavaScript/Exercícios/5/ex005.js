//Crie uma função que receba um Array de números. A função deve retornar um novo objeto contendo: o maior número, o menor número e a soma de todos os valores. Utilize métodos de Array como push() ou iterações para processar os dados.

let lista = [4, 76, 23, 12, 48]
let analise = {soma: 0, maior: lista[0], menor: lista[0]}

function analisadordelistas() {
    for(let pos in lista) {
                analise.soma += lista[pos]
                if (lista[pos] > analise.maior)
                    analise.maior = lista[pos]
                if(lista[pos] < analise.menor)
                    analise.menor = lista[pos]
    }
} 

analisadordelistas()


console.log(analise)
