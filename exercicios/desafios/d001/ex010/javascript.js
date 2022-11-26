let num = document.getElementById('fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function add() {
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        alert("Tudo ok!")
    } else {
        window.alert("Valor inválido ou já está na lista!")
    }
}

function fin() {

}

function media() {

}

function maior() {
    
}

function menor() {

}

function soma() {

}