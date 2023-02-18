import React from "react"
import Caixa from "./componentes/caixa"

export default function App() {

  return(
    <>
    <Caixa site="https://github.com/Yoichiroo">
      {/* Não irão aparecer de imediato, já que estamos utilizando um props. */}
      <h1>Lucas Torres</h1>
      <p>Curso de React</p>
    </Caixa>
    </>
  )
}
