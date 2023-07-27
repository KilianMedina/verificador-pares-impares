import React, {useState} from "react"

const App = () => {
  const [numero, setNumero] = useState('')
  const [resultado, setResultado] = useState('')

  const numeroAction = (event) => {
    setNumero(event.target.value)
  }

  const verificarNumero = () => {
    const numeroParseado = parseInt(numero)
    if (isNaN(numeroParseado)) {
      setResultado('Ingresar un numero valido')
    } else {
      setResultado(numeroParseado % 2 === 0 ? `El numero ${numeroParseado} es par` : `El numero ${numeroParseado} es impar`)
    }
  }

  return (
    <div>
      <h1>Verificador de numeros pares o impares</h1>
      <input
        type="number"
        placeholder="Ingresa un numero"
        value={numero}
        onChange={numeroAction}
      />
      <button
        onClick={verificarNumero}
      >
        Verificar
      </button>
      <p>{resultado}</p>
    </div>
  )
}

export default App
