import React, { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([{ name: 'Arto Hellas', phone: '040-123456' }])
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')

  const addNewPerson = (event) => {
    event.preventDefault()

    if (persons.some(record => record.name === newName)) {
      alert(`${newName} is already added to phonebook`)
      setNewName('')
      return
    }

    const person = {
      name: newName,
      phone: newPhone
    }

    setPersons(persons.concat(person))
    setNewName('')
    setNewPhone('')
    
  }

  const createNewName = (event) => {

    setNewName(event.target.value)
  }

  const createNewPhone = (event) => {

    setNewPhone(event.target.value)
  }

  const Person = ({ name, phone }) => <div>{name} {phone}</div>

  const Rows = () => persons.map(person => <Person key={person.name} name={person.name} phone={person.phone} />)

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input value={newName} onChange={createNewName} />
        </div>
        <div>
          phone: <input value={newPhone} onChange={createNewPhone} />
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