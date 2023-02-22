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

}

export default function App() {

  const [categoria, setCategoria] = useState("")

  return(
    <>
    {tabelaCarros(categoria)}
    </>
  )
}