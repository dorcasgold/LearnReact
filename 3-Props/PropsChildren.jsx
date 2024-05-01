props children is used to display whatever you include between the opening and closing tags when invoking a component.

  function List() {
  function User({ name, age, children }) {
    return (
      <section>
        <h2>Name: {name}</h2>
        <img alt={name}></img>
        <p>Age: {age}</p>
        {children}
      </section>)
  }
  return (
    <>
      <User
        name="gold"
        age={33}
        img="lk"
      ><p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum repellat reprehenderit laborum tempora esse maxime quis iusto quos consectetur obcaecati ipsa autem quasi, consequatur ut tenetur omnis eveniet adipisci sequi!</p></User>
    </>
  )
}

export default List
