import React from 'react'
import ResultRow from './ResultRow'

const Rows = ({countries}) => countries.map(country => <ResultRow key={country.name} name ={country.name} />)

export default Rows