import React from 'react'
import Yone from './img/yone.jpg'
import Sylas from './img/sylas.jpg'

export default function Main(props) {

    return (
    <>
    <h1>Segundo app - Eventos</h1>
    <p>Meus mains: {props.mudar ? "Yone Mid" : "Sylas Jungle"}</p>
    <img src = {props.mudar ? Yone : Sylas} alt="Yone Emissário da Luz" style={{width:'1000px', display: "block"}}></img>
    <button onClick={() => {props.setMudar(!props.mudar)}}>Mudar</button>
    </>
    )
}