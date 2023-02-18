import React from "react"

export default function App() {

  const carros = [
    {categoria: "Esporte", preco: "110.000,00", modelo: "Golf GTI"},
    {categoria: "Esporte", preco: "120.000,00", modelo: "Camaro"},
    {categoria: "SUV", preco: "85.000,00", modelo: "HRV"},
    {categoria: "SUV", preco: "83,000.00", modelo: "T-Cross"},
    {categoria: "Utilitário", preco: "120.000,00", modelo: "Hillux"},
    {categoria: "Utilitário", preco: "90.000,00", modelo: "Ranger"},
  ]

  const listaCarros = carros.map(
    (carro, indice) => 
        <li key={indice}> {carro.modelo} - <strong>{carro.categoria}</strong> - R$ {carro.preco}</li> 
  )

  return (
    <>
    <h1>Listas usando a função Map</h1>
    <ul>{listaCarros}</ul>
    </>
  )
}