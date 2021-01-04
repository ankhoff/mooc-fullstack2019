import React from 'react'
import Languages from './Languages'
import Flag from './Flag'
import Weather from './Weather'

const Country = ( { country, weather } ) => {
    return (
        < div >
            <h1>{ country.name }</h1>
            <div>capital { country.capital }</div>
            <div>population { country.population }</div>
            <h3>Spoken languages</h3>
            <Languages languages={ country.languages } />
            <Flag flag={ country.flag } />
            <div>
                <Weather country={ country } weather = {weather} />
            </div>

        </div >
    )
}

export default Country