import React from 'react'
import Rows from './Rows'
import Country from './Country'

const Result = ( { countries, manualSet, weather } ) => {
    if ( countries.length > 10 ) {
        return (
            <div>Too many matches, specify another filter</div>
        )
    } else if ( countries.length > 1 ) {
        return (
            < Rows countries={ countries } manualSet={ manualSet } />
        )

    } else if ( countries.length === 1 && Object.keys(weather).length !== 0 && weather.constructor === Object ) {
        return (
            < Country country={ countries[0] } weather = {weather} />
        )
    } else {
        return (
            <div>No country found with provided search condition</div>
        )
    }
}




export default Result





