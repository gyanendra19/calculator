import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CalcBody from './components/CalcBody'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-full h-screen flex justify-center items-center bg-white max-[640px]:w-11/12'>
      <div className='w-3/12 h-16 flex items-center justify-center text-3xl bg-blue-400 absolute top-2 left-84 max-sm:w-10/12'>CALCULATOR</div>
      <CalcBody />
    </div>
  )
}

export default App
