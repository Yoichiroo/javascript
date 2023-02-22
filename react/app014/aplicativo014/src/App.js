import React, {useState} from 'react'
import Classe from './componentes/classe'
import Carro from './componentes/carro'

export default function App() {

  const [carro, setCarro] = useState(true)
  const mostrarOcultarCarro = () => {
    setCarro(!carro)
  }

  return (
    <>
    <h1>Componentes de classe</h1>
    <Classe github = "Yoichiroo" curso = "React"></Classe><hr></hr>
    {carro ? <Carro fator = {10}></Carro> : "" }
    <button onClick={() => mostrarOcultarCarro()}>Ocultar</button>
    </>
  )
}