import React from 'react'

export default class userPeso extends React.Component{
    constructor() {
        super()
    }
    render() {
        return(
            <div>
                <label>Peso: </label>
                <input type="text" value={this.props.peso} onChange={(elemento) => this.props.setPeso(elemento.target.value)}></input>
            </div>
        )
    }
}

