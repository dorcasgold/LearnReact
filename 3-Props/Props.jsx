const User = (props) => {
  return (
    <section>
      <h1>Name : {props.name}</h1>
      <h2>Age : {props.age}</h2>
      <h3>is Active : {props.isActive}</h3>
      <h4>Hobbies: {props.hobbies}</h4>
    </section>)
}


function Props() {
  return (
    <>
      <User
        name="Dave"
        age={34}
        isActive={true}
        hobbies={["Swimming", "Reading"]}
      />
    </>
  )
}

export default Props
