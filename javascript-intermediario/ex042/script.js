/*
var e let são VARIÁVEIS
const é uma CONSTANTE

Podemos atribuir um valor ao var, sempre que quisermos. Caso imprimirmos uma variável que já usamos uma ou 2 vezes, o valor imprimido sempre será o último atributo ao var. Com var, sempre poderemos declarar duas variáveis com o mesmo nome.

Com o let, já não é possível. Não importa o que, sempre irá dar erro caso declararmos duas variáveis com o mesmo no mesmo escopo. O let restringe a variável ao escopo onde ela foi declarada e aos elementos filhos. Caso usemos só o nome da variável, estaremos fazendo uma atribuição à mesma. Com o let, a atribuição - que pode estar dentro de um escopo - é um elemento filho da variável declarada com o let.

O const, nada mais é que, uma variável que não permite a alteração de seu valor. Uma vez atribuída, nunca poderá mudar o seu valor. Por isso a chamamos de constante. Constantes são bastante usadas em Arrow Functions.
*/

const dobro = (n) => {
    return n * 2
}

console.log(dobro(10))
