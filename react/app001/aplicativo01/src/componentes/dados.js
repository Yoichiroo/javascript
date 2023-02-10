import React from "react"

export default function dados(props) {
    //Este componente está preparado para utilizar atributos que serão passados para o mesmo.
    return(
        <section>
            <p><strong>GitHub:</strong> {props.github}</p>
            <p><strong>Twitter:</strong> {props.twitter}</p>
            <p><strong>Curso:</strong> {props.curso}</p>
        </section>
    )
}