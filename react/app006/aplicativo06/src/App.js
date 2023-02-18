import React, {useState} from "react"

export default function App() {
  
  const [nome, setNome] = useState("")
  const [carro, setCarro] = useState("")


  return (
    <>
    <h1>Formulário com React</h1>
    <label for="uNome">Digite seu Nome:</label>
    <input type = "text" name = "uNome" id = "uNome"  placeholder= "João da Silva" value = {nome} onChange = {(elemento) => setNome(elemento.target.value)} ></input>
    <p>Nome digitado: {nome}</p>
    <label>Selecione um carro</label>
    <select values = {carro}>
      <option value = "HRV">HRV</option>
      <option value = "Golf">Golf</option>
      <option value = "Cruze">Cruze</option>
      <option value = "Argo">Argo</option>
    </select>
    </>
  )
}
