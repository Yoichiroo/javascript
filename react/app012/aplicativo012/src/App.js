import React from 'react'
import Classe from './componentes/classe'
import Carro from './componentes/carro'

export default function App() {

  return (
    <>
    <h1>Componentes de classe</h1>
    <Classe github = "Yoichiroo" curso = "React"></Classe><hr></hr>
    <Carro fator = {10}></Carro>
    </>
  )
}