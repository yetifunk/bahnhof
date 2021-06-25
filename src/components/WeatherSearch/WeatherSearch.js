import { useState, useEffect } from "react";
import WeatherSearchResults from "./WeatherSearchResults/WeatherSearchResults";

export default function WeatherSearch() {

    ////Weather Handlers
    const weatherSearch = {
    key: process.env.REACT_APP_OPENWEATHER_API_KEY,
    api: 'https://api.openweathermap.org/data/2.5/weather?q=',
    apikey: '&appid=',
    units: '&units=imperial'
    }

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
        const url = `${weatherSearch.api}${searchString}${weatherSearch.units}${weatherSearch.apikey}${weatherSearch.key}`

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
                <h2>Weather</h2>
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