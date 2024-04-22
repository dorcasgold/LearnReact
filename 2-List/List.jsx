
function List() {
  const students = [
    {
      name: "Doe",
      age: "18"
    },
    {
      name: "sam",
      age: "20"
    }
  ]
  return (
    <>
      {students.map((student) => (
        <ul key={Math.random() * 10}>
          <li>{student.name}</li>
          <li>{student.age}</li>
        </ul>
      ))}
    </>
  )
}

export default List
