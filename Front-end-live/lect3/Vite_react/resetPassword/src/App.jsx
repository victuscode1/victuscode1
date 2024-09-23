import { useState } from 'react'
import ShowHide from './component/showHide'
import './App.css'
import './component/showHide'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
    <h3>Reset Password </h3>
    <ShowHide />
  </div>
  )
}

export default App
