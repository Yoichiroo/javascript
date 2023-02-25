import React from 'react'

export default class userAltura extends React.Component {
    constructor() {
        super()
    }
    render() {
        return(
            <div>
                <label>Altura: </label>
                <input type="text" value={this.props.altura} onChange={(elemento) => this.props.setAltura(elemento.target.value)}></input>
            </div>
        )
    }
}