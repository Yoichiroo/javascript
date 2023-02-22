import React, {useState} from 'react'
import Globais from "./componentes/globais"
import Info from "./componentes/info"

export default function App() {
  
  return (
    <>
    <p>{'Github: ' + Globais.github}</p>
    <p>{'Curso: ' + Globais.curso}</p>
    <p>{'Ano: ' + Globais.ano}</p>
    <hr></hr>
    <Info></Info>
    </> 
  )
}