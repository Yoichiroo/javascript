import React from "react"

export default function numero(props) {
    return(
        <p>
            <p>Valor do StateNum em App: {props.num}</p>
            <button onClick={() => {
                props.setNum (props.num+ 10)
            }
            }>Soma 10</button>
        </p>
    )
}