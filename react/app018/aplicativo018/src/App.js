import React, {useState} from "react"
import './App.css'

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
          <td><strong>Abaixo de 18,5</strong></td>
        </tr>
        <tr>
          <td>Peso Normal</td>
          <td><strong>Entre 18,5 e 24,9</strong></td>
        </tr>
        <tr>
          <td>Sobrepeso</td>
          <td><strong>Entre 25 e 29,9</strong></td>
        </tr>
        <tr>
          <td>Obesidade Grau I</td>
          <td><strong>Entre 30 e 34,9</strong></td>
        </tr>
        <tr>
          <td>Obesidade Grau II</td>
          <td><strong>Entre 35 e 39,9</strong></td>
        </tr>
        <tr>
          <td>Obesidade Grau III ou Mórbida</td>
          <td><strong>Maior que 40</strong></td>
        </tr>
      </tbody>
    </table>
  )
}

const userPeso = (peso, sPeso) => {
  return(
    <div>
      <label>Peso: </label>
      <input type="text" value={peso} onChange={(elemento) => sPeso(elemento.target.value)}></input>
    </div>
  )
}

const userAltura = (altura, sAltura) => {
  return(
    <div>
      <label>Altura: </label>
      <input type="text" value={altura} onChange={(elemento) => sAltura(elemento.target.value)}></input>
    </div>
  )
}

const calculoIMC = (peso, altura, setRes) => {
  const calculo = () => {
    setRes(peso / (altura * altura))
  }
  return (
    <div>
      <button onClick={calculo}>Calcular</button>
    </div>
  )
}

const uRes = (resultado) => {
  return (
    <div>
      <p>Resultado: {resultado.toFixed(2)}</p>
    </div>
  )
}

export default function App() {
  
  const [peso, setPeso] = useState(0)
  const [altura, setAltura] = useState(0)
  const [res, setResultado] = useState(0)

  return(
    <>
    {userPeso(peso, setPeso)}
    {userAltura(altura, setAltura)}
    {calculoIMC(peso, altura, setResultado)}
    {uRes(res)}
    {tabelaExibicaoIMC()}
    </>
  )
}
