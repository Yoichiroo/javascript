import React from "react"

export default class Carro extends React.Component {
    
    constructor(props) {
        super(props)
        this.modelo = "Golf"
        this.state = {
            ligado: false, 
            velocidadeAtual: 0
        }
        this.ldBind = this.ligarDesligar.bind(this)
    }

    ligarDesligar() {
        // NÃO RENDERIZA NA PÁGINA this.state.ligado = true
        //     this.setState(
        //          (state) => ({
        //               ligado: !this.state.ligado
        //          })
        //      )
        this.setState({ligado: !this.state.ligado})
        }

    acelerar() {
        this.setState((state, props) => ({
            velocidadeAtual: state.velocidadeAtual + props.fator
        })
        )
    }

    componentDidMount() {
        console.log("O carro foi renderizado")
    }

    componentDidUpdate() {
        console.log("O carro foi atualizado")
    }

    componentWillUnmount() {
        console.log("O carro foi removido")
    }

    render() {
        return(
            <>
            <div>
                <h2>Meu Carro</h2>
                <p>Modelo: <strong>{this.modelo}</strong></p>
                <p>Ligado: <strong>{this.state.ligado ? "Sim" : "Não"}</strong></p>
                <p>Vel. Atual: <strong>{this.state.velocidadeAtual} Km/h</strong></p>
                <button onClick={this.ldBind}>{this.state.ligado ? "Desligar Carro" : "Ligar Carro"}</button>
                <button onClick={() => this.acelerar()}>Acelerar</button>
            </div>
            </>
        )
    }
}