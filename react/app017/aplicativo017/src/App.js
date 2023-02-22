import React, {useState} from "react"
import AppCSS from "./App.css"
const carros = [
  {categoria:"Elétrico", preco: "70.000,00", modelo: "Chevrolet Bolt EV"},
  {categoria:"Elétrico", preco: "40.000,00", modelo: "Nissan Leaf"},
  {categoria:"Elétrico", preco: "140.000,00", modelo: "Caoa Chery iCar"},
  {categoria:"Esportivo", preco: "110.000,00", modelo: "Golf GTI"},
  {categoria:"Esportivo", preco: "120.500,00", modelo: "Camaro"},
  {categoria:"Esportivo", preco: "350.000,00", modelo: "Koenigsegg Jesko"},
  {categoria:"Esportivo", preco: "380.000,00", modelo: "Bugatti Veyron Super Sport"},
  {categoria:"Utilitário", preco: "125.000,00", modelo: "Hillux"},
  {categoria:"Utilitário", preco: "60.000,00", modelo: "Ranger"},
  {categoria:"Utilitário", preco: "60.000,00", modelo: "Fiat Fiorino"},
  {categoria:"Utilitário", preco: "80.000,00", modelo: "Fiat Strada"},
  {categoria:"SUV", preco: "85.000,00", modelo: "HRV"},
  {categoria:"SUV", preco: "90.000,00", modelo: "T-Cross"},
  {categoria:"SUV", preco: "160.000,00", modelo: "Jeep Renegade"},
]

const tabelaCarros = (cat) => {
  return (
    <table className="Tabela">
      <thead>
        <tr>
          <th>Categoria</th>
          <th>Modelo</th>
          <th>Preço</th>
        </tr>
      </thead>
      <tbody>
        {linhas(cat)}
      </tbody>
    </table>
  )
}

const linhas = (cat) => {
  const li = [] 
  carros.forEach(
    (carro) => {
      if (carro.categoria.toUpperCase() == cat.toUpperCase() || cat.toUpperCase() == "") {
        li.push(
          <tr className="ParImpar">
            <td>{carro.categoria}</td>
            <td>{carro.modelo}</td>
            <td>{carro.preco}</td>
          </tr>
        )
      }
    }
  )
  return li
}

const pesquisarCategoria = (categoria, sCategoria) => {
  return (
    <div>
      <label>Digite uma categoria: </label>
      <input type="text" value = {categoria} onChange = {(elemento) => sCategoria(elemento.target.value)}></input>
    </div>
  )
}

export default function App() {

  const [categoria, setCategoria] = useState("")

  return(
    <>
    {pesquisarCategoria(categoria, setCategoria)}
    <br></br>
    {tabelaCarros(categoria)}
    </>
  )
}