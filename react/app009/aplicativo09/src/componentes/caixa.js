import React from "react"

export default function caixa(props) {
    return(
        <>
        <h1>Yoichiroo</h1>
        <p>{props.site}</p>
        {/* O props.children irá retornar e colocar em posição todos os elementos filho do componente caixa, podemos especificar em formato de Array qual elemento queremos retornar.*/}
        {props.children}
        </>
    )
}