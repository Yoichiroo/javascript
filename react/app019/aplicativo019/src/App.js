import React, {useState} from "react"
import "./App.css"
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
      setAcumulador(r)
      setResultado(r)
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
      <button style = {cssBtn} className="cssBotoes" onClick = {onClick}>{label}</button>
    )
  }

  //Estilos

  const cssContainer = {
    display: "flex",
    margin: "20px auto",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    width: 400,
    border: "1px solid black",
    borderRadius: "30px 30px 0px 0px"
  }

  const cssBotoes = {
    flexDirection: "row",
    flexWrap: "wrap",
    color: "#fff",
  }

  const cssTela = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    width: 360,
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
    width: 100,
    padding: 20,
    backgroundColor: "#000",
    color: "#fff",
    borderColor: "#000",
    textAlign: "center",
    outline: "none",
    transition: ".2s"
  }


  return(
    <>
      <div style={cssContainer}>
        <h3>Calculadora Matemática Simples</h3>
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
          {btn("6", () => addDigitoTela("6"))}
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