import React from "react"
import Dados from './dados'
import Yone from "./imgs/yone.jpg"

export default function corpo() {
    const gh = 'Yoichiroo'
    const tt = '@yoichiroo1'
    const crs = "Informática p/ Internet"
    return(
        <main>
            <h2>Curso de React</h2>
            <p>Jogue LoL, é viciante!</p>
            <p>Mono Yone falando aqui.</p>
            <img src={Yone} alt="Yone Academia de Batalha" width="1000"></img>
            <h1>Yone Academia de Batalha</h1>
            <h2>React é mt bom vsf</h2>
            <Dados 
                github = {gh}  
                twitter = {tt} 
                curso = {crs}
            >
            </Dados>
        </main>
    )
}