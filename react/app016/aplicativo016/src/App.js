import React, {useState, useEffect} from "react"
import Pag1 from "./componentes/pag001"
import Pag2 from "./componentes/pag002"

export default function App() {
  
  const [pagina, setPagina] = useState(0)

  useEffect(() => {
    const url = window.location.href
    const res = url.split("?")
    setPagina(res[1])
  })

  const linksPaginas = (numPG) => {
    if (numPG == 1) {
      window.open("http://localhost:3000?1", '_blank')
    } else if (numPG == 2) {
      window.open("http://localhost:3000?2", '_blank')
    }
  }

  const retornarPagina = () => {
    if (pagina == 1) {
      return <Pag1></Pag1>
    } else if (pagina == 2) {
      return <Pag2></Pag2>
    } else {
      return <div>
                      <button onClick={linksPaginas(1)}>Página 1</button> 
                      <button onClick={linksPaginas(2)}>Página 2</button>
                  </div>
    }
  }

  return(
    <>
      {retornarPagina()}
    </>
  )
}
