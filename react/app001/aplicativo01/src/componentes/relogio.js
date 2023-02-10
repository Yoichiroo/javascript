import React from "react"

export default function relogio() {
    return(
        <p style={{fontSize: '2em', fontWeight: 'bold'}}>{new Date().toLocaleTimeString()}</p>
    )
}