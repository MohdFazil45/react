import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  let myObj = {
    username: "Mohd Fazil",
    age: 20
  }

  let newArr = [1, 2, 3]
  return (
    <>
      <h1 className='bg-green-700 text-red-600 p-1 mb-5 rounded-2xl'>Tailwind test</h1>
      <Card username = "Mohd Fazil"/>
    </>
  )
}

export default App
