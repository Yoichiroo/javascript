import React, {useState} from "react"


export default function App() {
  
  const [cor, setCor] = useState(1)

  const vermelho = {color: "red"}
  const verde = {color: "green"}
  const azul = {color: "blue"}
  
  const retornarCor = (c) => {
    if (c === 1) {
      return vermelho
    } else if (c === 2) {
      return verde
    } else if (c === 3) {
      return azul
    }
  }

  const mudarCor = () => {
    setCor(cor+1)
    if (cor > 2) {
      setCor(1)
    }
  }

  setInterval(mudarCor, 1000)

  return (
    <>
    <h1 style={retornarCor(cor)}>Yoichiroo</h1>
    <button onClick={() => mudarCor()}>Mudar Cor</button>
    </>
  )
}
