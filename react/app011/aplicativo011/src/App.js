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
      <label>Digite um Nome: </label>
      <input type="text" value={nome} onChange={(elemento) => setNome(elemento.target.value)}></input>
    </>
  )
}