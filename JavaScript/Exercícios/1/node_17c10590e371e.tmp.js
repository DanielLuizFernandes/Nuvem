const prompt = require('prompt-sync')();// O prompt não está funcionado como deveria

let n1 = prompt("Digite um número: ")
let n2 = prompt("Digite mais um número: ")
let res = n1 + n2
let média = res / 2

console.log(`A média entre ${n1} e ${n2} é igual á: ${média}`)