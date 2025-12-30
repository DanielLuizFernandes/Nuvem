const prompt = require('prompt-sync')();

let n1 = Number(prompt("Digite um número: "))
let n2 = Number(prompt("Digite mais um número: "))
let res = n1 + n2
let media = res / 2

console.log(`A média entre ${n1} e ${n2} é igual á: ${media}`)