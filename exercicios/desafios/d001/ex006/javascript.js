
function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var titulo = document.getElementsByTagName('h1')[0]

    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12 ) {
        // BOM DIA
        img.src = 'foto-manha.jpg'
        document.body.style.backgroundColor = '#8A99A6'
        titulo.innerHTML = 'Bom dia!'
    } else if ( hora <= 18 ) {
        //BOA TARDE
        img.src = 'foto-tarde.jpg'
        document.body.style.backgroundColor = '#8C2703'
        titulo.innerHTML = 'Boa tarde!'
    } else {
        //BOA NOITE
        img.src = 'foto-noite.jpg'
        document.body.style.backgroundColor = '#3A2E40'
        titulo.innerHTML = 'Boa noite!'
    }
}