import React, {useState} from "react"
import Nota from "./componentes/nota"
import Resultado from "./componentes/resultado"

export default function App() {
  
  const [nota1, setNota1] = useState(0)
  const [nota2, setNota2] = useState(0)
  const [nota3, setNota3] = useState(0)
  const [nota4, setNota4] = useState(0)
  
  return(
    <>
    <Nota valor = "1"></Nota>
    <Nota valor = "2"></Nota>
    <Nota valor = "3"></Nota>
    <Nota valor = "4"></Nota>
    <Resultado></Resultado>
    </>
  )
}
