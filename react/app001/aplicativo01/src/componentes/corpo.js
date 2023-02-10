import React from "react"
import Dados from './dados'

export default function corpo() {
    const gh = 'Yoichiroo'
    const tt = '@yoichiroo1'
    const crs = "Informática p/ Internet"
    return(
        <main>
            <h2>Curso de React</h2>
            <p>Jogue LoL, é viciante!</p>
            <p>Mono Yone falando aqui.</p>
            <Dados 
                github = {gh}  
                twitter = {tt} 
                curso = {crs}
            >
            </Dados>
        </main>
    )
}