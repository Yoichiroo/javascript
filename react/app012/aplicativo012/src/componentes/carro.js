import React from "react"

export default class Carro extends React.Component {
    
    constructor(props) {
        super(props)
        this.modelo = "Golf"
        this.state = {
            ligado: false, 
            velocidadeAtual: 0
        }
    }
    
    render() {
        return(
            <>
            <div>
                <h2>Meu Carro</h2>
                <p>Modelo: <strong>{this.modelo}</strong></p>
                <p>Ligado: <strong>{this.state.ligado ? "Sim" : "Não"}</strong></p>
                <p>Vel. Atual: <strong>{this.state.velocidadeAtual}</strong></p>
            </div>
            </>
        )
    }
}