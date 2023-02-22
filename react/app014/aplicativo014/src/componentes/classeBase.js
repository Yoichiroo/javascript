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
    }

    ativarDesativar() {
        this.setState(
            state => ({
                ativo: !state.ativo
            })
            )
    }

}

render() {
    return(
        <>
        <h1>Componente de Classe</h1>
        </>
    )
}