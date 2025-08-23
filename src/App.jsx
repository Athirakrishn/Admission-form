import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)
 
  return (
    <>
 <div className="container d-flex justify-content-center" style={{background: "linear-gradient(to right ,rgb(233, 226, 128)),rgb(224, 87, 87)"}}>

    <h1>registration form to apply higher secondary admission for students</h1>

 </div>
    </>
  )
}

export default App
