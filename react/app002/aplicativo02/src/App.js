import React, {useState} from 'react'
import Yone from './componentes/img/yone.jpg'
import Sylas from './componentes/img/sylas.jpg'

export default function App() {

  const [mudar, setMudar] = useState(true)
  return (
    <>
    <h1>Segundo app - Eventos</h1>
    <p>Meus mains: {mudar? "Yone Mid" : "Sylas Jungle"}</p>
    <img src = {mudar? Yone: Sylas} alt="Yone Emissário da Luz" style={{width:'1000px', display: "block"}}></img>
    <button onClick={() => {setMudar(!mudar)}}>Mudar</button>
    </>
  )
}