import React from "react";
import Irelia from "./imgs/irelia.jpg"

export default function header(){
    
    return(
        <header>
            <img src={Irelia} alt = "Irelia Sentinela" width="1000"></img>
            <h1 style={{color:'#f00', fontSize: '2em', fontFamily: 'Poppins'}}>Irelia Sentinela</h1>
        </header>
    )
}