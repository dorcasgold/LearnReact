const InValid = () => {
  return <h1>Invalid Password</h1>
}
const Valid = () => {
  return <h1>Valid Password</h1>
}
const Password = ({ isValid }) => {
  return (
    isValid ? <Valid /> : <InValid />
  )
}

function App() {
  return (
    <Password isValid={false} />
  )
}
export default App
