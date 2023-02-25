import React, {useState} from "react"

export default function App() {
  
  const [valTela, setValTela] = useState("")
  const [resultado, setResultado] = useState(0)
  const [acumulador, setAcumulador] = useState(0)
  const [operacao, setOperacao] = useState(false)

  const Tela = (valor, res) => {
    return(
      <div>
        <span>{valor}</span>
        <span>{res}</span>
      </div>
    )
  }

  //Estilos
  const cssTela = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    width: 260,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: "#444"
  }

  const cssTelaOperacao = {
    fontSize: 25,
    color: "#fff",
    height: 20,
  }

  const cssTelaResultado = {
    fontSize: 50,  
    color: "#fff"
  }

  return(
    <>

    </>
  )
}