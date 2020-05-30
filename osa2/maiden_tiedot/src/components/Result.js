import React from 'react'
import Rows from './Rows'
import Country from './Country'

const Result = ( { countries, searchTerm } ) => {
    const searchTermMatches = countries.filter( country => country.name.toLowerCase().includes( searchTerm ) )
    if ( searchTermMatches.length > 10 ) {
        console.log("more then 10 cases")
        return (
            <div>Too many matches, specify another filter</div>
        )
    } else if ( searchTermMatches.length > 1 ) {
        console.log("less then 10 cases")
        return (
            < Rows countries={ searchTermMatches } />
        )

    } else if ( searchTermMatches.length === 1 ) {
        console.log("only one result: ", searchTermMatches[0])
        return (
            < Country country={ searchTermMatches[0] } />
        )
    } else {
        return (
            <div>No country found with provided search condition</div>
        )
    }
}




export default Result





