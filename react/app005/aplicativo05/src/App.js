import React from "react"

export default function App() {

  const carros = ["HRV", "Golf", "Focus", "Cruze", "Argo", "Camaro", "Rover"]

  const listaCarros = carros.map(
    (carro)=> 
        <li>{carro}</li> 
  )

  return (
    <>
    <h1>Listas usando a função Map</h1>
    <ul>{listaCarros}</ul>
    </>
  )
}