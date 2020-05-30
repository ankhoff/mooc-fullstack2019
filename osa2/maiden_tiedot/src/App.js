import React, { useState, useEffect } from 'react'
import FindCountryForm from './components/FindCountryForm'
import Result from './components/Result'
import axios from 'axios'


function App () {
  const [countries, setCountries] = useState( [] )
  const [searchTerm, setSearchTerm] = useState( '' )

  const eventHandler = (response) => {
    console.log('response.data: ', response.data)
    setCountries(response.data)
  }

  useEffect( () => {
    axios
    .get('https://restcountries.eu/rest/v2/all')
    .then(eventHandler)
  }, [] )

  const createNewSearchTerm = ( event ) => {
    console.log( 'searchTerm: ', event.target.value )
    setSearchTerm( event.target.value )
  }

  return (
    <div>
      <FindCountryForm searchTerm={ searchTerm } createNewSearchTerm={ createNewSearchTerm } />
      <Result countries = {countries} searchTerm = {searchTerm} />
    </div>
  );
}

export default App;
