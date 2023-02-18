import React, {useState} from "react"

export default function App() {

  const [form, setForm] = useState({"nome": "", "curso": "", "ano": ""})

  const manipularFormChange = (elemento) => {
    if(elemento.target.getAttribute('name') == "uNome") {
      setForm({"nome": elemento.target.value, "curso": form.curso, "ano": form.ano})
    } else if (elemento.target.getAttribute('name') == "uCurso") {
      setForm({"nome": form.nome, "curso": elemento.target.value, "ano": form.ano})
    } else if (elemento.target.getAttribute('name') == "uAno"){
      setForm({"nome": form.nome, "curso": form.curso, "ano": elemento.target.value})
    }
  }

  return (
    <>
    <h1>Formulário com React</h1>
    <label for="uNome">Nome</label>
    <input type="text" name = "uNome" value = {form.nome} onChange={(elemento) => manipularFormChange(elemento)}></input>
    <label for="uCurso">Curso</label>
    <input type="text" name = "uCurso" value = {form.curso} onChange={(elemento) => manipularFormChange(elemento)}></input>
    <label for="uAno">Ano</label>
    <input type="text" name = "uAno" value = {form.ano} onChange={(elemento) => manipularFormChange(elemento)}></input>
    
    <p>Nome digitado - <strong>{form.nome}</strong></p>
    <p>Curso digitado - <strong>{form.curso}</strong></p>
    <p>Ano digitado - <strong>{form.ano}</strong></p>
    </>
  )
}