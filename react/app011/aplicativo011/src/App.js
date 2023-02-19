import React, {useState} from 'react'

export default function App() {

  const [nome, setNome] = useState()

  const armazenar = (chave, valor) => {
    localStorage.setItem(chave, valor)
  }

  const consultar = (chave) => {
    alert(localStorage.getItem(chave))
  }

  const apagar = (chave) => {
    localStorage.removeItem(chave)
  }

  return(
    <>
    <h1>LocalStorage</h1>
      <label>Digite um Nome: </label> <br></br>
      <input type="text" value={nome} onChange={(elemento) => setNome(elemento.target.value)}></input> <br></br>
      <button onClick={() => armazenar('LSnome', nome)}>Gravar Nome</button>
      <button onClick={() => consultar("LSnome")}>Consultar Nome</button>
      <button onClick={() => apagar("LSnome")}>Apagar Nome</button>
    </>
  )
}