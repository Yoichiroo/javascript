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
      //Cálculo
      const r = eval(valTela)
      setAcumulador(resultado)
      setResultado(resultado)
      setOperado(true)
    } catch {
      setResultado("ERRO")
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

  const cssContainer = {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "column",
    width: 300,
    border: "1px solid black",
  }

  const cssBotoes = {
    flexDirection: "row",
    flexWrap: "wrap",
    color: "#fff"
  }

  const cssTela = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    window: 260,
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
      <div style={cssContainer}>
        <h1>Calculadora Matemática Simples</h1>
        {Tela(valTela, resultado)}
        <div style={cssBotoes}>
          {btn("AC", limparTela)}
          {btn("(", () => addDigitoTela("("))}
          {btn(")", () => addDigitoTela(")"))}
          {btn("/", () => addDigitoTela("/"))}
          {btn("7", () => addDigitoTela("7"))}
          {btn("8", () => addDigitoTela("8"))}
          {btn("9", () => addDigitoTela("9"))}
          {btn("*", () => addDigitoTela("*"))}
          {btn("4", () => addDigitoTela("4"))}
          {btn("5", () => addDigitoTela("5"))}
          {btn("-", () => addDigitoTela("-"))}
          {btn("1", () => addDigitoTela("1"))}
          {btn("2", () => addDigitoTela("2"))}
          {btn("3", () => addDigitoTela("3"))}
          {btn("+", () => addDigitoTela("+"))}
          {btn("0", () => addDigitoTela("0"))}
          {btn(".", () => addDigitoTela("."))}
          {btn("<=", () => Operacao("bs"))}
          {btn("=", () => Operacao("="))}
        </div>
      </div>
    </>
  )
}