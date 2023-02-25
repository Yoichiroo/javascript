import React from 'react'

export default function userPeso(props) {
    return(
        <div>
            <label>Peso: </label>
            <input type="text" value={props.peso} onChange={(elemento) => props.setPeso(elemento.target.value)}></input>
        </div>
    )
}

