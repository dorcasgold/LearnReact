import './List.css'

import { useRef } from 'react'

function App() {
  const inputElement = useRef(null);

  const focusInput = () => {
    inputElement.current.focus();
    inputElement.current.value = 'Hello'
  }
  return (
    <>
      <input type="text" ref={inputElement} />
      <button onClick={() => focusInput()}>Focus</button>
    </>
  )
}

export default App
