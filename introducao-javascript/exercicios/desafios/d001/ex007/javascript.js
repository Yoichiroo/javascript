function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if (Number(fano.value).length == 0 || Number(fano.value) > ano) {
        window.alert("ERRO! Verifique os dados e tente novamente.")
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                // CRIANÇA
                img.setAttribute('src', 'bebe-m.jpg')
            } else if (idade < 21) {
                // JOVEM
                img.setAttribute('src', 'jovem-m.jpg')
            } else if (idade < 50) {
                // ADULTO
                img.setAttribute('src', 'adulto-m.jpg')
            } else {
                // IDOSO
                img.setAttribute('src', 'idoso-m.jpg')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                // CRIANÇA
                img.setAttribute('src', 'bebe-f.jpg')
            } else if (idade < 21) {
                // JOVEM
                img.setAttribute('src', 'jovem-f.jpg')
            } else if (idade < 50) {
                // ADULTO
                img.setAttribute('src', 'adulto-f.jpg')
            } else {
                // IDOSO
                img.setAttribute('src', 'idoso-f.jpg')
            }    
        }
        res.innerHTML = `Detectamos <strong>${genero}</strong> com <strong>${idade}</strong> anos.`
        res.style.textAlign = 'center'
        res.appendChild(img)
        img.style.width = '250px'
        img.style.borderRadius = '50%'
    }
}