import React from 'react'

export default function App() {

  localStorage.setItem("nome", "Lucas")
  localStorage.getItem("nome")
  localStorage.removeItem("nome")

  return(
    <>
    </>
  )
}