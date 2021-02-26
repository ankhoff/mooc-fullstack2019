import React, {useState, useEffect} from 'react'
import FindCountryForm from './components/FindCountryForm'
import Result from './components/Result'
import axios from 'axios'

require('dotenv').config()

function App () {
  const [countries, setCountries] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [searchResult, setSearchResult] = useState([])
  const [weather, setWeather] = useState({})

  const api_key = process.env.REACT_APP_API_KEY
  const baseURL = 'http://api.weatherstack.com/'
  const pack = 'current'

  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        setCountries(response.data)
      })
  }, [])

  useEffect(() => {
    if (searchResult.length === 1) {
      axios
        .get(baseURL + pack + '?access_key=' + api_key + '&query=' + searchResult[0].capital)
        .then(response => {
          setWeather(response.data)
        })
    }
  }, [searchResult])

  const newSearchTerm = (event) => {
    const searchTermMatches = countries.filter(country => country.name.toLowerCase().includes(event.target.value.toLowerCase()))
    setSearchTerm(event.target.value)
    setSearchResult(searchTermMatches);
  }

  return (
    <div>
      <FindCountryForm searchTerm={searchTerm} createNewSearchTerm={newSearchTerm} />
      <Result countries={searchResult} manualSet={newSearchTerm} weather={weather} />
    </div>
  );
}

export default App;
