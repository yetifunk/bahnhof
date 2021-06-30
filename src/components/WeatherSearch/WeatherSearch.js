import { useState, useEffect } from "react";
import WeatherSearchResults from "./WeatherSearchResults/WeatherSearchResults";

export default function WeatherSearch() {
    
    const [weather, setWeather] = useState([]);
    const [searchString, setSearchString] = useState('');
    const [lastSearch, setLastSearch] = useState('');
    
    const weatherSearch = {
        key: process.env.REACT_APP_OPENWEATHER_API_KEY,
        api: 'https://api.openweathermap.org/data/2.5/weather?q=',
        apikey: '&appid=',
        units: '&units=imperial'
    }
    
    function handleChange(event) {
        setSearchString(event.target.value);
    }
    
    function handleSubmit(event) {
        event.preventDefault();
        getWeather(searchString)
        setSearchString("")
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