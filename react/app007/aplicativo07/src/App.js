import React, {useState} from "react"

export default function App() {

  const [form, setForm] = useState('')

  return (
    <>
    <h1>Formulário com React</h1>
    <label for="uNome">Nome</label>
    <input type="text" name = "uNome" value={} onChange={}></input>
    <label for="uCurso">Curso</label>
    <input type="text" name = "uCurso" value={} onChange={}></input>
    <label for="uAno">Ano</label>
    <input type="text" name = "uAno" value={} onChange={}></input>
    </>
  )
}