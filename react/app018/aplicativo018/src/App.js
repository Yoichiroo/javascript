import React, {useState} from "react"
import TabelaIMC from "./componentes/TabelaIMC"
import UserPeso from "./componentes/userPeso"
import UserAltura from "./componentes/userAltura"
import CalculoIMC from "./componentes/calcularIMC"
import ResultadoIMC from "./componentes/resIMC"
import './App.css'

export default function App() {
  
  const [peso, setPeso] = useState(60)
  const [altura, setAltura] = useState(1.73)
  const [res, setResultado] = useState(0)

  return(
    <>
    <UserPeso peso = {peso} setPeso = {setPeso}></UserPeso>
    <UserAltura altura = {altura} setAltura = {setAltura}></UserAltura>
    <CalculoIMC peso = {peso} altura = {altura} setResultado = {setResultado}></CalculoIMC>
    <ResultadoIMC res = {res}></ResultadoIMC>
    <TabelaIMC></TabelaIMC>
    </>
  )
}
