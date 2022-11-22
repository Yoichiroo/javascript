function contador() {
    let inicio = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        // alert("Preencha todos os dados!")
        res.innerHTML = 'Impossível contar!'
    } else {
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        
        if (p <= 0) {
            alert('Passo inválido! Considerando PASSO 1')
            p = 1
        }

        if (i < f) {
            // CONTAGEM PROGRESSIVA!
            for (let c = i; c <= f; c += p) {
                res.innerHTML += `${c}. `
            }
        } else if (i > f) {
            // CONTAGEM REGRESSIVA!
            for (let c = i; c >= f; c -= p) {
                res.innerHTML += `${c}. `
            }
        }
        res.innerHTML += 'FIM!'
    }
}
