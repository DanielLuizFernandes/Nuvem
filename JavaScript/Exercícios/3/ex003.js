let data = new Date()
let hora = data.getHours()

if(hora >= 0 && hora < 12){
    console.log('Bom Dia!')
} else if (hora >= 12 && hora < 18) {
    console.log('Boa Tarde!')
} else if (hora >= 18 && hora < 24) {
    console.log('Boa Noite!')
} else {
    console.log('ERRO reinicie seu computador')
}