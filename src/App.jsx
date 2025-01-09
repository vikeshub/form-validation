import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Form from './component/Form'
import Form2 from './component/Form2'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <Form/>
   {/* <Form2/> */}
   </>
  )
}

export default App
