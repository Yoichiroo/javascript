import React from "react"

export default function nota(props) {
    return(
        <div>
            <legend>Informe a nota {props.valor}:</legend>
            <input type = "number" value = "" onChange = ""></input>
        </div>
    )
}