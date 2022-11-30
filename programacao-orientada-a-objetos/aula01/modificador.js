function fnCapitalizar(vetor) {
    let modificado = []
    for (let c in vetor) {
        let letraInicial = vetor[c].charAt(0).toUpperCase()
        let restoTexto = vetor[c].slice(1)
        let resultado = letraInicial + restoTexto
        modificado[c] = resultado
    }
    return modificado 
}

function fnOrdenar(vetor) {
    return vetor.sort(function(a, b){
        return a.localeCompare(b)
    })
}

function fnCaixaAlta(vetor) {
    let modificado = []
    for (let c in vetor) {
        modificado[c] = vetor[c].toUpperCase()
    }
    modificado.sort(function(a,b){
        return a.localeCompare(b)
    })
    return modificado
}

export default {
    capitalizar: fnCapitalizar,
    ordenar: fnOrdenar,
    caixaAlta: fnCaixaAlta
}
