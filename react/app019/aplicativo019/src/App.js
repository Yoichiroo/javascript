import React, {useState} from "react"

export default function App() {
  
  const [valTela, setValTela] = useState("")
  const [resultado, setResultado] = useState(0)
  const [acumulador, setAcumulador] = useState(0)
  const [operado, setOperado] = useState(false)

  //Funções
  const addDigitoTela = (digito) => {
    if((digito == '+' || digito == '-' || digito == '*' || digito == "/") && operado) {
      console.log("+-*/")
      setOperado(false)
      setValTela(resultado + digito)
      return
    }
    if(operado) {
      setValTela(digito)
      setOperado(false)
      return
    }
    const valorDigitadoTela = valTela + digito 
    setValTela(valorDigitadoTela)
  }

  const limparTela = () => {
    setOperado(false)
    setValTela("")
    setResultado(0)
    setAcumulador(0)
    return
  }

  //Verficação de Operação
  const Operacao = (op) => {
    if(op == "bs") {
      let vTela = valTela
      vTela = vTela.substring(0, (vTela.length - 1))
      setValTela(vTela)
      setOperado(false)
      return
    }
    try {
      const r = eval(valTela)
      setAcumulador(resultado)
      setResultado(resultado)
      setOperado(true)
    }
  }


  //Componentes
  const Tela = (valor, res) => {
    return(
      <div style = {cssTela}>
        <span style = {cssTelaOperacao}>{valor}</span>
        <span style = {cssTelaResultado}>{res}</span>
      </div>
    )
  }
  
  const btn = (label, onClick) => {
    return(
      <button style = {cssBtn} onClick = {onClick}></button>
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

  const cssBtn = {
    fontSize: 30,
    height: 75,
    width: 75,
    padding: 20,
    backgroundColor: "#000",
    color: "#fff",
    borderColor: "#000",
    textAlign: "center",
    outline: "none"
  }


  return(
    <>

    </>
  )
}