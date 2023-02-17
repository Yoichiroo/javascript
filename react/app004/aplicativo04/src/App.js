import React, {useState} from "react"


export default function App() {
  
  const [cor, setCor] = useState(1)

  const vermelho = {color: "red"}
  const verde = {color: "green"}
  const azul = {color: "blue"}
  
  const retornarCor = (c) => {
    if (c == 1) {
      return vermelho
    } else if (c == 2) {
      return verde
    } else {
      return azul
    }
  }

  const mudarCor = () => {

  }

  return (
    <>
    <h1 style={retornarCor()}>Yoichiroo</h1>
    <button onClick={() => mudarCor()}>Mudar Cor</button>
    </>
  )
}
