import React from "react"

export default function nota(props) {
    return(
        <div>
            <legend>Informe a nota n°{props.valor}</legend>
            <input type = "number" name = {props.nome} value = {props.nota} onChange = {(elemento) => props.setNota(elemento)}></input>
        </div>
    )
}