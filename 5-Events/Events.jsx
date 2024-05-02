const Button = () => {
  const hanleClick = (x, z) => {
    console.log(x + z);
  }
  return (
    <button onClick={() => hanleClick(10, 505)}>Click</button>
  )
}

function App() {
  return (
    <Button />
  )
}
export default App
