import React from 'react'

export default function calcularIMC(props) {
    const calculo = () => {
        props.setResultado(props.peso / (props.altura * props.altura))
    }
    return (
        <div>
            <button onClick={calculo}>Calcular</button>
        </div>
    )
}