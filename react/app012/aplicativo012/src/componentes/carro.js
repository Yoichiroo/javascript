import React from "react"

export default class Carro extends React.Component {
    
    constructor(props) {
        super(props)
        this.modelo = "Golf"
    }
    
    render() {
        return(
            <>
            <div>
                <h2>Meu Carro</h2>
            </div>
            </>
        )
    }
}