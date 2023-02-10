import React from "react"

export default function numero(props) {
    return(
        <p className='caixaTexto'>
            <p>Valor do StateNum em Numero: {props.num}</p>
            <button onClick={() => {
                props.setNum (props.num+ 10)
            }
            }>Soma 10</button>
        </p>
    )
}