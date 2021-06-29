import { useState, useEffect } from "react";
import WeatherSearchResults from "./WeatherSearchResults/WeatherSearchResults";

export default function WeatherSearch() {

    const weatherSearch = {
    key: process.env.REACT_APP_OPENWEATHER_API_KEY,
    api: 'https://api.openweathermap.org/data/2.5/weather?q=',
    apikey: '&appid=',
    units: '&units=imperial'
    }

    navigator.geolocation.getCurrentPosition(function(position) {

        console.log("Lat is :", position.coords.latitude)
        console.log("Long is :", position.coords.longitude)
    })

    // fetch(`https://geocode.xyz/${position.coords.latitude},${position.coords.longitude}?json=1`)
    // .then(res => res.json())
    // .then(result => {
    //     setWeather(result.postal)
    // })
    // .catch(console.error)

    // https://geocode.xyz/38.9218304,-104.78551039999999?json=1



    const [weather, setWeather] = useState([]);
    const [searchString, setSearchString] = useState('80918');
    const [lastSearch, setLastSearch] = useState('');

    function handleChange(event) {
    setSearchString(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        getWeather(searchString)
    }

    useEffect(() => {
        getWeather();
    }, []);

    async function getWeather() {
        const url = `${weatherSearch.api}${searchString},us${weatherSearch.units}${weatherSearch.apikey}${weatherSearch.key}`

        await fetch(url)
        .then(res => res.json())
        .then(result => {
            setWeather(result)
        })
        .catch(console.error);
    }
    return (
        <div className="weather-container">
            <div className="weather-header">
                <h1>Weather Depot</h1>
            </div>

            <div className="weather-form">
                <form onSubmit={handleSubmit} className="search-form">
                    <input 
                        placeholder="Search" 
                        type="text" 
                        name="searchString" 
                        required onChange={handleChange} 
                        value={searchString} 
                    />
                    <button type="submit">Search</button>
                </form>
            </div>

            <WeatherSearchResults weather={weather}/>
        </div>
    )
}