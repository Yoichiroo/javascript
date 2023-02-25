import React from 'react'

export default function userAltura(props) {
    return(
        <div>
            <label>Altura: </label>
            <input type="text" value={props.altura} onChange={(elemento) => props.setAltura(elemento.target.value)}></input>
        </div>
    )
}