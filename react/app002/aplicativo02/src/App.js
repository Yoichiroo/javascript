import React, {useState} from 'react'
import Main from './componentes/Main'

export default function App() {

  const [mudar, setMudar] = useState(false)

  const cancelar = (obj) => {
    return obj.preventDefault()
  }

  return (
    <>
    <Main mudar = {mudar} setMudar={setMudar}></Main>
    <a href="http://github.com/Yoichiroo" target={"_blank"}  rel="noreferrer" onClick= {(elemento) => cancelar(elemento)} style={{display:"block", color: "black", textDecoration: "none", fontSize: "1.2em", fontWeight:"bold"}}>GitHub</a>
    </>
  )
}