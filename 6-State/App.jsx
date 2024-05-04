import { useState } from "react"

const Counter = () => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1)
  }
  const decrement = () => {
    setCount(count - 1)
  }
  return (
    <>
      <h2>{count}</h2>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </>
  )
}

function List() {
  return (
    <Counter />
  )
}
export default List

** update object values in state **
import './List.css'
import { useState } from "react"
function List() {
  const [names, setNames] = useState(["blake", 'kakashi', 'sam'])
  const Add = () => {
    setNames([...names, "Tabs"])
  }
  const Remove = () => {
    setNames(names.filter((n) => n !== "blake"))
  }
  const Update = () => {
    setNames(names.map((n) => (n === "kakashi") ? "kakashi sensei" : n))
  }

  return (
    <>
      {names.map((n) => (
        <p key={Math.random()}>{n}</p>
      ))}
      <button onClick={Add}>Add One</button>
      <button onClick={Remove}>Remove One</button>
      <button onClick={Update}>Update One</button>
    </>
  )
}
export default List

** update array values in state **
  import './List.css'
import { useState } from "react"
function List() {
  const [movies, setMovies] = useState({
    title: "naruto",
    ratings: 5,
  });
  const handleClick = () => {
    setMovies({ ...movies, ratings: 10.5 })
  }
  return (
    <>
      <h1>{movies.title}</h1>
      <h1>ratings: {movies.ratings}</h1>
      <button onClick={handleClick}>change rating</button>
    </>
  )
}
export default List
