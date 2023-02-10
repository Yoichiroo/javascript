import React, {useState} from "react"
import Corpo from "./componentes/corpo"
import './App.css'


// const curso = "React.js"

export default function App() {
  
  const [num, setNum] = useState(10)

  return (
    <>
    <Corpo></Corpo>
    <p>Valor do StateNum: {num}</p>
    <button onClick={() => setNum(num + 10)}>Soma 10</button>
    </>
  )
}