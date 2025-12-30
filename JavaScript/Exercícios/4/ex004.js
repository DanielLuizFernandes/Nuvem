const prompt = require('prompt-sync')();

let n1 = Number(prompt("Digite um número: "))

for(let c = 1; c <= 10; c++) {
    console.log(`${n1} x ${c} = ${n1*c}`)
}