import modificador from './modificador.js'

let ingredientes = ['mel', 'água', 'sal', 'mostarda']

let resultadoCapitalizado = modificador.capitalizar(ingredientes)
let resultadoOrdenacao = modificador.ordenar(resultadoCapitalizado)
let resultadoCaixaAlta = modificador.caixaAlta(ingredientes)

console.log(resultadoCapitalizado)
console.log(resultadoOrdenacao)
console.log(resultadoCaixaAlta)