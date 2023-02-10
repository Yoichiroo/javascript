import React from "react"
import Topo from "./componentes/header"
import Corpo from "./componentes/corpo"
import Dados from './componentes/dados'
// const curso = "React.js"

export default function App() {
  const gh = 'Yoichiroo'
  const tt = '@yoichiroo1'
  const crs = "Informática p/ Internet"
  return (
    <>
    <Topo></Topo>
    <Corpo></Corpo>
    <Dados 
      github = {gh}  
      twitter = {tt} 
      curso = {crs}>
    </Dados>
    </>
  )
}