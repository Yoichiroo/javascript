import React from "react"
import Topo from "./componentes/header"
import Corpo from "./componentes/corpo"
import Dados from './componentes/dados'
// const curso = "React.js"

export default function App() {
  return (
    <>
    <Topo></Topo>
    <Corpo></Corpo>
    <Dados github = 'Yoichiroo'  twitter = '@yoichiroo1' curso = 'Informática p/ Internet'></Dados>
    </>
  )
}