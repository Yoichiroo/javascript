let num = document.getElementById('fnum')
let lista = document.querySelector('select#fnum')
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
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        window.alert("Valor inválido ou já está na lista!")
    }
    num.value = ''
    num.focus()
}

function finalizar() {
    if (valores.length == 0) {
        alert('Adicione valores antes de finalizar!')
    } else {
        let tot = valores.length
        let maior = Math.max.apply(0, valores)
        let menor = Math.min.apply(0, valores)
        let soma = 0
        let media = 0
        for(let pos in valores) {
            soma += valores[pos]
        }
        media += soma / tot
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo temos <strong>${tot}</strong> número(s) cadastrado(s).</p>`
        res.innerHTML += `<p>O maior valor informado foi <strong>${maior}</strong>.</p>`
        res.innerHTML += `<p>O menor valor informado foi <strong>${menor}</strong>.</p>`
        res.innerHTML += `<p>A soma entre os valores é <strong>${soma}</strong>.</p>`
        res.innerHTML += `<p>A média entre eles é <strong>${media}</strong>.</p>`
    }
}