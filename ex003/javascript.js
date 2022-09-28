let nome = ["Pedro", "João"]
let idade = ["16"]
show()

function show() {
    pessoas.innerHTML = ""
   if (nome.length == 0) { 
       pessoas.innerHTML += "Não tem ninguém cadastrado nesta lista."
   } else {
    for(let p = 0; p < nome.length; p++) {
        pessoas.innerHTML += `${p} - ${nome[p]} <br>`
    }
   }
}

function adicionar() {
    let n = prompt("Quem você quer adicionar na lista do SUS?")
    if (temnalista(n)) {
        alert(`Você já tem ${n} cadastrado!`)
    } else {
        let i = Number(prompt(`Qual é a idade de ${n}?`))
        nome.push(n)
        idade.push(i)
        alert(`Cadastro de ${n} foi realizado.`)
        show()
    }
    
}

function excluir() {
    let n = prompt("Quem você quer excluir? (Digite o nome)")
    if (temnalista(n)) {
        let pos = nome.indexOf(n)
        nome.splice(pos, 1)
        idade.splice(pos, 1)
        alert(`Acabei de excluir ${n}.`)
        show()
    } else {
        alert(`${n} não foi encontrado.`)
    }
}

function procurar() {
    let n = prompt("Que pessoa você está procurando?")
    if (temnalista(n)) {
        let pos = nome.indexOf(n)
        alert(`${nome[pos]}, ${idade[pos]} anos.`)
    }
}

function temnalista(chave) {
    if (nome.indexOf(chave) == -1) {
        return false
    } else {
        return true
    }
}

