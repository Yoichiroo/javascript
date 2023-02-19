import React from 'react'

export default function App() {

  localStorage.setItem("nome", "Lucas") // DEFINIÇÃO
  localStorage.getItem("nome") // OBTENÇÃO
  localStorage.removeItem("nome") // REMOÇÃO

  return(
    <>
    </>
  )
}