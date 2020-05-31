import React from 'react'
import ResultRow from './ResultRow'

const Rows = ( { countries, manualSet } ) => countries.map( country => <ResultRow key={ country.name } name={ country.name } manualSet={ manualSet } /> )

export default Rows