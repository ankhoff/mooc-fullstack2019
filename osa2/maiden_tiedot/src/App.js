import React, { useState, useEffect } from 'react'
import FindCountryForm from './components/FindCountryForm'
import Result from './components/Result'
import axios from 'axios'

function App () {
  const [countries, setCountries] = useState( [] )
  const [searchTerm, setSearchTerm] = useState( '' )
  const [searchResult, setSearchResult] = useState( [] )

  const eventHandler = ( response ) => {
    console.log( 'response.data: ', response.data )
    setCountries( response.data )
  }

  useEffect( () => {
    axios
      .get( 'https://restcountries.eu/rest/v2/all' )
      .then( eventHandler )
  }, [] )

  const newSearchTerm = ( event ) => {
    console.log( 'searchTerm: ', event.target.value )
    const searchTermMatches = countries.filter( country => country.name.toLowerCase().includes( event.target.value.toLowerCase() ) )
    setSearchTerm( event.target.value )
    setSearchResult( searchTermMatches );
  }

  return (
    <div>
      <FindCountryForm searchTerm={ searchTerm } createNewSearchTerm={ newSearchTerm } />
      <Result countries={ searchResult } manualSet={ newSearchTerm } />
    </div>
  );
}

export default App;
