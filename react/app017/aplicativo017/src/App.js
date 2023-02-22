import React, {useState} from "react"

const carros = [
  {categoria:"Esportivo", preco: "110.000,00", modelo: "Golf GTI"},
  {categoria:"Esportivo", preco: "120.500,00", modelo: "Camaro"},
  {categoria:"SUV", preco: "85.000,00", modelo: "HRV"},
  {categoria:"SUV", preco: "90.000,00", modelo: "T-Cross"},
  {categoria:"Utilitário", preco: "125.000,00", modelo: "Hillux"},
  {categoria:"Utilitário", preco: "60.000,00", modelo: "Ranger"}
]

const tabelaCarros = (cat) => {
  return (
    <table className="Tabela">

      <thead>
        <tr>
          <th>Categoria</th>
          <th>Preço</th>
          <th>Modelo</th>
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
          <tr>
            <td>{carro.categoria}</td>
            <td>{carro.preco}</td>
            <td>{carro.modelo}</td>
          </tr>
        )
      }
    }
  )
  return li
}

export default function App() {

  const [categoria, setCategoria] = useState("")

  return(
    <>
    {tabelaCarros(categoria)}
    </>
  )
}