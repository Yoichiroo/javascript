import React, {useState} from "react"
import Corpo from "./componentes/corpo"
import './App.css'


// const curso = "React.js"

export default function App() {
  
  const [num, setNum] = useState(10)
  let n1 = 50

  const n100 = () => {
    n1 = 100
    console.log(n1)
  }

  return (
    <>
    <Corpo></Corpo>
    <p>Valor do SateNum: {n1}</p>
    <button onClick={() => n100()}>100</button>
    </>
  )
}