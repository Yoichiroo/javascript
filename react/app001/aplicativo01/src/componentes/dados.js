import React from "react"

export default function dados(props) {
    //Este componente está preparado para utilizar atributos que serão passados para o mesmo.
    return(
        <section>
            <p>GitHub: {props.github}</p>
            <p>Twitter: {props.twitter}</p>
            <p>Curso: {props.curso}</p>
        </section>
    )
}