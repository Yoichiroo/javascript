import React from "react"

export default class Classe extends React.Component {
    
    constructor(props) {
        super(props)
    }
    
    render() {
        return(
            <>
            <div>
                <h2>Primeiro componente de Classe</h2>
                <p>Github: <strong>{this.props.github}</strong></p>
            </div>
            </>
        )
    }
}