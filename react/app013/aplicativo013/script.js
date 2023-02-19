function carro() {
    let velocidadeMaxima = 200
    console.log("Cor: " + this.cor + " Marca: " + this.marca + " Modelo: " + this.modelo)
}

let detalhes =  {
    cor: "Branco",
    marca: "VW",
    modelo: "Golf"
}

let ligarDetalhesCarro = carro.bind(detalhes)

ligarDetalhesCarro()