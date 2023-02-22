import React from "react"

export default class classeBase extends React.Component {
    //Permitindo o Uso de Props
    constructor(props) {
        //Instruções básicas do construtor
        super(props)

        //State
        this.state = {
            github: "Yoichiroo",
            curso: 'React',
            ativo: true,
            nome: this.props.nomeAluno
        }

        this.status = this.props.status

        //Bindagem

        let AD = this.ativarDesativar.bind(this)
    }

    //Função para manipulação de State
    ativarDesativar() {
        this.setState(state => ({ativo: !state.ativo}))
    }

    //Métodos de ciclo de vida dos componentes

    componentDidMount() {
        console.log("O componente foi criado")
    }

    componentDidUpdate() {
        console.log("O componente foi atualizado")
    }

    componentWillUnmount() {
        console.log("O componente foi removido")
    }
    
    render() {
        return(
            <>
            <h1>Componente de Classe</h1>
            {/*Chamada da função com bind */}
            <button onClick={this.AD}>Ativar Desativar</button>
            {/* Chamada da função sem bind */}
            <button onClick={() => this.ativarDesativar}>Ativar Desativar</button>
            </>
        )
    }
}
