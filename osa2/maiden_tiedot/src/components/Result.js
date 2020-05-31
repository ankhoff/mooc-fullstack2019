import React from 'react'
import Rows from './Rows'
import Country from './Country'

const Result = ( { countries, manualSet } ) => {
    if ( countries.length > 10 ) {
        console.log( "more then 10 cases" )
        return (
            <div>Too many matches, specify another filter</div>
        )
    } else if ( countries.length > 1 ) {
        console.log( "less then 10 cases" )
        return (
            < Rows countries={ countries } manualSet={ manualSet } />
        )

    } else if ( countries.length === 1 ) {
        console.log( "only one result: ", countries[0] )
        return (
            < Country country={ countries[0] } />
        )
    } else {
        return (
            <div>No country found with provided search condition</div>
        )
    }
}




export default Result





