import React, {useState} from "react"
export default function App() {

  const [log, setLog] = useState(false)

  const mensagemLogIn = () => {
    return 'Usuário logado'
  }

  const mensagemLogOff = () => {
    return 'Por favor, logar no sistema.'
  }

  const comprimento = () => {
    const hora = new Date().getHours()
    if (hora >= 0 && hora < 12) {
      return <p>Bom dia!</p>
    } else if (hora >= 13 && hora < 18) {
      return <p>Boa tarde!</p>
    } else {
      return <p>Boa noite!</p>
    }
  }

  return (
    <>
    <h1>Renderização Condicional</h1>
    {comprimento()}
    <p>{log ? mensagemLogIn() : mensagemLogOff() }</p>
    <button onClick={() => setLog(!log)}>{log ? "LogOff" : "LogIn"}</button>
    </>
  )
}
