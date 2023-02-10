import React from "react";
import Irelia from "./imgs/irelia.jpg"

export default function header(){
    
    return(
        <header className="caixa">
            <img src={Irelia} alt = "Irelia Sentinela" width="800"></img>
            <h1 style={{color:'#f00', fontSize: '2em', fontFamily: 'Poppins'}}>Irelia Sentinela</h1>
        </header>
    )
}