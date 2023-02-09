import React from "react"
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
      <h1> {"GitHub - " + gitHub()}</h1>
      <p>{"Curso - " + curso()}</p>
    </>
  )
}