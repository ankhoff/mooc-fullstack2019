import React, { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([{ name: 'Arto Hellas' }])
  const [newName, setNewName] = useState('')

  const addNewPerson = (event) => {
    event.preventDefault()

    if (persons.some(record => record.name === newName)) {
      alert(`${newName} is already added to phonebook`)
      setNewName('')
      return
    }

    const person = {
      name: newName
    }

    setPersons(persons.concat(person))
    setNewName('')

  }

  const createNewName = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const Person = ({ name }) => <div>{name}</div>

  const Rows = () => persons.map(person => <Person key={person.name} name={person.name} />)

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input value={newName} onChange={createNewName} />
        </div>
        <div>
          <button type="submit" onClick={addNewPerson}>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {/* <div>debug: {newName}</div> */}
      <Rows />
    </div>

  )

}

export default App