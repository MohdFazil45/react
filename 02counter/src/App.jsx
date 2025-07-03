import { useState } from 'react'
import './App.css'

function App() {
  
  let [counter, setCounter] = useState(1)

  // let counter = 0

  const addValue = () => {
    // counter = counter + 1
    if (counter >= 20) {
      alert('Maximum value reached')
    } else setCounter(counter + 1)
  }

  const removeValue = () => {
    if (counter <= 0 ) {
      alert('Negative value not allowed')
    } else setCounter(counter - 1)
  }

  return (
    <>
      <h1>Counter</h1>
      <h2>Counter value: {counter}</h2>

      <button
        onClick={addValue}
      >Add value</button>
      <br />
      <br />
      <button
        onClick={removeValue}
      >Decrease value</button>
    </>
  )
}

export default App