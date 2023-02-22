import React, {useState} from 'react'
import Globais from "./componentes/globais"
import Info from "./componentes/info"

export default function App() {
  
  const [resumo, setResumo] = useState(Globais.resumo)

  const gravarResumo = () => {
    Globais.resumo = resumo
  }

  const verResumo = () => {
    alert(Globais.resumo)
  }

  return (
    <>
    <Info></Info>
    <p>{'Github: ' + Globais.github}</p>
    <p>{'Curso: ' + Globais.curso}</p>
    <p>{'Ano: ' + Globais.ano}</p>
    <hr></hr>
    <input type="text" value = {""} onChange = {""}></input>
    </> 
  )
}