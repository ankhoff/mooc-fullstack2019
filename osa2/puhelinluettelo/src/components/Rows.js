import React from 'react'
import Person from './Person'

const Rows = ({ persons, newFilter }) => persons.filter(person => person.name.includes(newFilter)).map(person => <Person key={person.name} name={person.name} number={person.number} />)

export default Rows