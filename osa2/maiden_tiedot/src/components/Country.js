import React from 'react'
import Languages from './Languages'
import Flag from './Flag'

const Country = ( { country } ) => {
    console.log( country )
    return (
        < div >
            <h1>{ country.name }</h1>
            <div>capital { country.capital }</div>
            <div>population { country.population }</div>
            <h3>languages</h3>
            <Languages languages={ country.languages } />
            <Flag flag={ country.flag } />

        </div >
    )
}

export default Country