import React, {useState} from 'react'
import Main from './componentes/Main'

export default function App() {

  const [mudar, setMudar] = useState(false)

  return (
    <>
    <Main mudar = {mudar} setMudar={setMudar}></Main>
    </>
  )
}