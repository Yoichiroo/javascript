import React from "react"
import Dados from './dados'
import Yone from "./imgs/yone.jpg"

export default function corpo() {
    // const gh = 'github.com/Yoichiroo'
    // const crs = "Informática p/ Internet"
    const gh = () => {
        return 'github.com/Yoichiroo'
    }
    
    const tt = '@yoichiroo1'
    
    const crs = () => {
        return "Informática p/Internet"
    }

    const soma = (valor, valor2) => {
        return valor + valor2
    }

    const textoDestaque = {
        color: "#00f",
        fontSize: "2em",
        fontFamily: 'Poppins'
    }

    return(
        <main>
            <h2>Curso de React</h2>
            <p>Jogue LoL, é viciante!</p>
            <p className="texto">Mono Yone falando aqui.</p>
            <img src={Yone} alt="Yone Academia de Batalha" width="1000"></img>
            <h1 style ={textoDestaque}>Yone Academia de Batalha</h1>
            <h2>React é mt bom!</h2>
            <Dados 
            //O atributo está carregando uma função.
                github = {gh}  
                twitter = {tt} 
                curso = {crs}
                soma = {soma}
            >
            </Dados>
        </main>
    )
}