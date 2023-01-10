function criarCookie(nome, valor, expira) {
    let dataExpirar = "expires=" + expira 
    document.cookie = nome + "=" + valor + ";" + dataExpirar
}

function lerCookie(nome) {
    let vNome = nome + "="
    let allCookie = document.cookie.split(";")
    for (let indice = 0; indice < allCookie.length; indice++) {
        let cookie = allCookie[indice]
        while(cookie.charAt(0) == ' ') {
            cookie = cookie.substring(1)
        }
        if(cookie.indexOf(vNome) == 0) {
            return cookie.substring(vNome.length, cookie.length)
        }
    }
    return ""
}

function verificarCookie() {
    let username = lerCookie("username")
    if (username != "") {
        alert("Bem vindo novamente, " + username + "!")
    } else {
        username = prompt("Digite seu nome:", "")
        if(username != "" && username != null) {
            criarCookie("username", username, "Tue, 01 Jan 2115 12:00:00 UTC")
        }
    }
}
