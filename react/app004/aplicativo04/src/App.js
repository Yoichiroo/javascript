import React, {useState} from "react"


export default function App() {
  
  const [cor, setCor] = useState(1)

  const vermelho = {color: "red"}
  const verde = {color: "green"}
  const azul = {color: "blue"}
  
  return (
    <>
    <h1 style={vermelho}>Yoichiroo</h1>
    <button onClick=''>Mudar Cor</button>
    </>
  )
}
