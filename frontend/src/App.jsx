import { useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [data , setData] = useState({email : "" , password : "" })
  const [user, setUser] = useState()

  const handleSubmit = () => {
    axios.post("http://localhost:3001/login" , data)
    .then(x => localStorage.setItem("tokeKey" , x.data.token))
    .catch(x => console.log(x))
  }

  const handleInput = (e) => {
    setData({...data , [e.target.name] : e.target.value})
  }

  return (
    <>
    <input type="text" name='email' placeholder='Enter EMail' onChange={handleInput}/>
    <input type="password" name='password' placeholder='Enter password' onChange={handleInput}/>
    <button onClick={handleSubmit}>Login</button>
    </>
  )
}

export default App
