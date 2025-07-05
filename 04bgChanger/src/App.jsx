import { useState } from 'react'
import './App.css'

function App() {
  const [color,setColor] = useState("white")



  return ( 
    <div className='w-full h-screen duration-200' style={{backgroundColor: color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 p-2 '>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-2xl
        '><button className='text-white shadow-2xl outline-none px-4 py-1 rounded-2xl' style={{backgroundColor:"red"}} onClick={() => setColor('red')}>Red</button>
        <button className='text-white shadow-2xl outline-none px-4 py-1 rounded-2xl' style={{backgroundColor:"green"}} onClick={() => setColor('green')}>Green</button>
        <button className='text-white shadow-2xl outline-none px-4 py-1 rounded-2xl' style={{backgroundColor:"blue"}} onClick={() => setColor('blue')}>Blue</button>
        <button className='text-gray-500 shadow-2xl outline-none px-4 py-1 rounded-2xl' style={{backgroundColor:"yellow"}} onClick={() => setColor('yellow')}>Yellow</button>
        <button className='text-white shadow-2xl outline-none px-4 py-1 rounded-2xl' style={{backgroundColor:"orange"}} onClick={() => setColor('orange')}>Orange</button>
        <button className='text-white shadow-2xl outline-none px-4 py-1 rounded-2xl' style={{backgroundColor:"olive"}} onClick={() => setColor('olive')}>Olive</button>
        <button className='text-white shadow-2xl outline-none px-4 py-1 rounded-2xl' style={{backgroundColor:"fuchsia"}} onClick={() => setColor('fuchsia')}>Red</button>
        </div>
        </div>
    </div>
  )
}

export default App
