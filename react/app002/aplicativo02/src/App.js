import React, {useState} from 'react'
import Yone from './componentes/img/yone.jpg'
import Sylas from './componentes/img/sylas.jpg'
import { useState } from 'react'

export default function App() {
  return (
    <>
    <h1>Segundo app - Eventos</h1>
    <p>Meus mains: </p>
    <img src = {Yone} alt="Yone Emissário da Luz" style={{width:'1000px', display: "block"}}></img>
    <button>Mudar</button>
    </>
  )
}