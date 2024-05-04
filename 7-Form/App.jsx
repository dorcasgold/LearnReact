import { useState } from 'react'
import './App.css'

function App() {
  const [user, setUser] = useState('')

  const handleChange = (event) => {
    setUser(event.target.value)
  }
  const handleSubmit = () => {
    event.preventDefault();
    alert(`You submitted ${user}`)
    setUser("")
  }
  return (
    <>
      <h1>Form</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={user} onChange={handleChange} />
        <button>Submit</button>
      </form>
    </>
  )
}

export default App
