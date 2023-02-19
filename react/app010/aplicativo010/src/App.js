import React, {useEffect, useState} from "react"

export default function App() {
  
  useEffect(
    () => { 
      console.log("Página carregada!")
      document.title = 'Contagem: ' + cont
    }
  )

  const [cont, setCont] = useState(0)

  return(
    <>
      <p>Contagem - {cont}</p>
      <button onClick={() => setCont(cont + 1)}>Contar</button>
    </>
  )
}