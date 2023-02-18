import React, {useState} from "react"
import Nota from "./componentes/nota"
import Resultado from "./componentes/resultado"

export default function App() {
  
  /*
    const [nota1, setNota1] = useState("")
    const [nota2, setNota2] = useState("")
    const [nota3, setNota3] = useState("")
    const [nota4, setNota4] = useState("")
    <Nota valor = {1} nota = {nota1} setNota = {setNota1}></Nota>
    <Nota valor = {2} nota = {nota2} setNota = {setNota2}></Nota>
    <Nota valor = {3} nota = {nota3} setNota = {setNota3}></Nota>
    <Nota valor = {4} nota = {nota4} setNota = {setNota4}></Nota>
    <Resultado somaNotas = {Number(nota1) + Number(nota2) + Number(nota3) + Number(nota4)}></Resultado> 
  */

  const [notas, setNotas] = useState({"nota1": '0',"nota2": '0',"nota3": '0',"nota4": '0',})

  const manipularSetNotas = (elemento) => {
    if(elemento.target.getAttribute('name') == "nota1") {
      setNotas({"nota1": elemento.target.value, "nota2": notas.nota2, "nota3": notas.nota3})
    } else if (elemento.target.getAttribute('name') == "nota2") {
      setNotas({"nota1": notas.nota1, "nota2": elemento.target.value, "nota3": notas.nota3, "nota4": notas.nota4})
    } else if (elemento.target.getAttribute('name') == "nota3") {
      setNotas({"nota1": notas.nota1, "nota2": notas.nota2, "nota3": elemento.target.value, "nota4": notas.nota4})
    } else {
      setNotas({"nota1": notas.nota1, "nota2": notas.nota2, "nota3": notas.nota3, "nota4": elemento.target.value})
    }
  }

  return(
    <>
    <Nota valor = {1} nome ={"nota1"} nota = {notas.nota1} setNota = {manipularSetNotas}></Nota>
    <Nota valor = {2} nome ={"nota2"} nota = {notas.nota2} setNota = {manipularSetNotas}></Nota>
    <Nota valor = {3} nome ={"nota3"} nota = {notas.nota3} setNota = {manipularSetNotas}></Nota>
    <Nota valor = {4} nome ={"nota4"} nota = {notas.nota4} setNota = {manipularSetNotas}></Nota>
    <Resultado somaNotas = {Number(notas.nota1) + Number(notas.nota2) + Number(notas.nota3) + Number(notas.nota4)}></Resultado> 
    </>
  )
}
