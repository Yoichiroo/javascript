import React from "react"

export default class resIMC extends React.Component{
    constructor() {
        super()
    }
    render() {
        return (
            <div>
                <p>Resultado: {this.props.res.toFixed(2)}</p>
            </div>
        )
    }
}