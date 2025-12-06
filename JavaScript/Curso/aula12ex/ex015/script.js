function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 13) {
                //Criança
                img.setAttribute('src', 'CriançaM.png')
            } else if (idade < 21){
                //Jovem
                img.setAttribute('src', 'JovemM.png')
            } else if (idade < 50){
                //Adulto
                img.setAttribute('src', 'AdultoM.png')
            } else {
                //idoso
                img.setAttribute('src', 'IdosoM.png')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 13) {
                //Criança
                img.setAttribute('src', 'CriançaF.png')
            } else if (idade < 21){
                //Jovem
                img.setAttribute('src', 'JovemF.png')
            } else if (idade < 50){
                //Adulto
                img.setAttribute('src', 'AdultaF.png')
            } else {
                //idoso
                img.setAttribute('src', 'IdosoF.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}