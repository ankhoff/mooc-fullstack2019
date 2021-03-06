import React, { useState, useEffect } from 'react'
import Rows from './components/Rows'
import axios from 'axios'
import FilterForm from './components/FilterForm'
import AddPersonForm from './components/AddPersonForm'

const App = () => {
  const [persons, setPersons] = useState( [] )
  const [newName, setNewName] = useState( '' )
  const [newNumber, setNewNumber] = useState( '' )
  const [newFilter, setNewFilter] = useState( '' )

  const eventHandler = response => {
    console.log('response.data: ', response.data)
    setPersons(response.data)
  }

  useEffect( () => {
    axios
      .get( 'http://localhost:3001/persons' )
      .then( eventHandler )
  }, [] )

  const addNewPerson = ( event ) => {
    event.preventDefault()

    if ( persons.some( record => record.name === newName ) ) {
      alert( `${newName} is already added to phonebook` )
      setNewName( '' )
      return
    }

    const person = {
      name: newName,
      number: newNumber
    }

    setPersons( persons.concat( person ) )
    setNewName( '' )
    setNewNumber( '' )

  }

  const createNewName = ( event ) => {
    setNewName( event.target.value )
  }

  const createNewNumber = ( event ) => {
    setNewNumber( event.target.value )
  }

  const createNewFilter = ( event ) => {
    console.log( event.target.value )
    setNewFilter( event.target.value )
  }

  //const Person = ({ name, phone }) => <div>{name} {phone}</div>

  //const Rows = () => persons.filter(person => person.name.includes(newFilter)).map(person => <Person key={person.name} name={person.name} phone={person.phone} />)

  return (
    <div>
      <h2>Phonebook</h2>
      <FilterForm newFilter={ newFilter } createNewFilter={ createNewFilter } />
      <h2>Add new</h2>
      <AddPersonForm newName={ newName } newNumber={ newNumber } addNewPerson={ addNewPerson } createNewName={ createNewName } createNewNumber={ createNewNumber } />
      <h2>Numbers</h2>
      <Rows persons={ persons } newFilter={ newFilter } />
    </div>

  )

}

export default App