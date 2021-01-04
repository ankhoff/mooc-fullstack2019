import React from 'react'

const Icon = ( { src } ) => <div><img src={ src } alt="icon" height="100" /></div>

const Weather = ( { country, weather } ) => {

    return (
        <div>
            <h2>Weather in { country.capital }</h2>
            <div><b>Temperature:</b> { weather.current.temperature } Celcius</div>
            <div><Icon src={ weather.current.weather_icons[0] } /></div>
            <div><b>Wind:</b> { weather.current.wind_speed } mph direction { weather.current.wind_dir }</div>


        </div>

    )
}

export default Weather