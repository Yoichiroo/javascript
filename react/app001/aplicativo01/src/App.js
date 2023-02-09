import React from "react"
import Irelia from './componentes/imgs/irelia.jpg'
// const curso = "React.js"

export default function App() {
  const gitHub = () => {
    return("Yoichiroo")
  }

  function curso() {
    return 'React.js'
  }

  return (
    <>
    <header>
      <h1> {"GitHub - " + gitHub()}</h1>
      <p>{"Curso - " + curso()}</p>
    </header>
    <section>
      <img src={Irelia} alt = "Irelia" width = "1000"></img>
      <img src = 'img/yone.jpg' alt='"Yone' width = "1000"></img>
    </section>
    </>
  )
}