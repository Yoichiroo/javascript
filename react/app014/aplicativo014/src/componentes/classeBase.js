import React from "react"

export default class classeBase extends React.Component {
    constructor(props) {
        super(props)
        //Instruções básicas do construtor
        this.state = {
            github: "Yoichiroo",
            curso: 'React',
            ativo: true,
            nome: this.props.nomeAluno
        }
        this.status = this.props.status
        let AD = this.ativarDesativar.bind(this)
    }

    ativarDesativar() {
        this.setState(state => ({ativo: !state.ativo}))
    }

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
            </>
        )
    }
}
