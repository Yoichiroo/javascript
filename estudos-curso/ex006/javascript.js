vetor = []
res.innerHTML = ""
show()


function add() {
    let item = Number(prompt("O que você quer adicionar?"))
    if (temnalista(item)) {
        alert(`Você já tem ${item} na lista!`)
    } else {
        vetor.push(item)
        show()
    }
}   

function remove() {
    let itemremove = Number(prompt("Qual item você quer remover?"))
    if (temnalista(itemremove)) {
        let pos = vetor.indexOf(itemremove)
        vetor.splice(pos, 1)
        alert(`Acabei de remover ${itemremove} da lista.`)
    } else {
        alert(`Não consegui remover ${itemremove} da lista.`)
        add()
    }
    show()
}

function show() {
    if (vetor.length == 0) {
        res.innerHTML += `Não tem valores na sua lista!`
    } else {
        res.innerHTML = ""
        for(let pos = 0; pos < vetor.length; pos++) {
            res.innerHTML += `${pos} - ${vetor[pos]} <br>`
        }
    }
}

function search() {
    let busca = Number(prompt("O que você quer buscar?"))
    if (temnalista(busca)) {
        let pos = vetor.indexOf(busca)
        alert(`${busca} está na posição ${pos} do seu vetor.`)
    } else {
        alert(`Não existe ${busca} na lista!`)
        add()
        return false
    }
}


function temnalista(chave) {
        if (vetor.indexOf(chave) == -1) {
            return false
        } else {
            return true
        }
}

function sort() {
    vetor.sort()
    show()  
}

function maioremenor() {
    let maior = Math.max.apply(null, vetor)
    let menor = Math.min.apply(null, vetor)
    show()
    res.innerHTML = `O maior e menor entre eles é, respectivamente <strong>${maior}</strong> e <strong>${menor}</strong>`
}

function imparepar() {
    let par = 0
    let impar = 0
    for (let pos = 0; pos < vetor.length; pos++) {
        if (vetor[pos] % 2 == 1) {
            res.innerHTML += `${vetor[pos]} é IMPAR.`
            impar++
        } else {
            res.innerHTML += `${vetor[pos]} é PAR.`
            par++
        }
        res.innerHTML = `Existem, neste vetor, <strong>${impar}</strong> números impar(es) e <strong>${par}</strong> números par(es).`
    }
}