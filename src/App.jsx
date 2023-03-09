import { useState } from 'react'
import './App.css'
import Formulario from './components/Formulario'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Formulario/>
      <Card/>
    </div>
  )
}

export default App
