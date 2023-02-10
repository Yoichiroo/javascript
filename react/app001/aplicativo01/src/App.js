import React, {useState} from "react"
import Corpo from "./componentes/corpo"
import './App.css'
import Numero from './componentes/numero'


// const curso = "React.js"

export default function App() {
  
  const [num, setNum] = useState(10)

  return (
    <>
    <Corpo></Corpo>
    <p className="caixaTexto">Valor do StateNum em App: {num}</p>
    <Numero num ={num} setNum = {setNum}></Numero>
    </>
  )
}