import React, {useState} from "react"
import CSS from './App.css'

const tabelaExibicaoIMC = () => {
  return (
    <table className="tabela">
      <thead>
        <tr>
          <th>Classificação</th>
          <th>IMC</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Abaixo do peso</td>
          <td>Abaixo de 18,5</td>
        </tr>
        <tr>
          <td>Peso Normal</td>
          <td>Entre 18,5 e 24,9</td>
        </tr>
        <tr>
          <td>Sobrepeso</td>
          <td>Entre 25 e 29,9</td>
        </tr>
        <tr>
          <td>Obesidade Grau I</td>
          <td>Entre 30 e 34,9</td>
        </tr>
        <tr>
          <td>Obesidade Grau II</td>
          <td>Entre 35 e 39,9</td>
        </tr>
        <tr>
          <td>Obesidade Grau III ou Mórbida</td>
          <td>Maior que 40</td>
        </tr>
      </tbody>
    </table>
  )
}

const userPeso = (peso, sPeso) => {
  return(
    <div>
      <input type="text" value={peso} onChange={(elemento) => sPeso(elemento.target.value)}></input>
    </div>
  )
}

const userAltura = (altura, sAltura) => {
  return(
    <div>
      <input type="text" value={altura} onChange={(elemento) => sAltura(elemento.target.value)}></input>
    </div>
  )
}

export default function App() {
  

  
  return(
    <>
    {tabelaExibicaoIMC()}
    </>
  )
}
