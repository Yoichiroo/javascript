import React from "react"
import Github from "./github"

export default function caixa(props) {
    return(
        <>
        <Github></Github>
        <p>{props.site}</p>
        {/* O props.children irá retornar e colocar em posição todos os elementos filho do componente caixa, podemos especificar em formato de Array qual elemento queremos retornar.*/}
        {props.children}
        </>
    )
}