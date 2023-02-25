import React from 'react'

export default class calcularIMC extends React.Component {
    constructor() {
        super()
        this.calc = this.calculo.bind(this)
    }
    calculo = () => {
        const res = this.props.peso / (this.props.altura * this.props.altura)
        this.props.setResultado(res)
        console.log(res)
    } 
    render() {
        return (
            <div>
                <button onClick={this.calc}>Calcular</button>
            </div>
        )
    }
}