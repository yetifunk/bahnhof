    const [coords, setCoords] = useState([])
    
    navigator.geolocation.getCurrentPosition(position)  {
        const userLatitude = position.coords.latitude
        const userLongitude = position.coords.longitude
    }


    const GeoWeatherSearch = {
        key: process.env.REACT_APP_OPENWEATHER_API_KEY,
        api: 'api.openweathermap.org/data/2.5/weather?',
        lat: 'lat=',
        long: '&lon=',
        apikey: '&appid=',
        units: '&units=imperial'
    }

    useEffect(() => {
        GeolocationGetWeather();
    }, []);

    async function GeolocationGetWeather() {
        var options = {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0
          };
        
        navigator.geolocation.getCurrentPosition(success, error, options);
          
        function success(pos) {
            setCoords(pos.coords)
            console.log(coords)
        }
          
        function error(err) {
            console.warn(`ERROR(${err.code}): ${err.message}`);
        }
          

        const geourl = `${GeoWeatherSearch.api}${GeoWeatherSearch.lat}${coords.latitude}${GeoWeatherSearch.long}${coords.longitude}${GeoWeatherSearch.apikey}${GeoWeatherSearch.key}`

        console.log(geourl)

        await fetch(geourl)
            .then(res => res.json())
            .then(result => {
                setWeather(result)
                console.log(result)
        })
        .catch(console.error);
    }

    fetch(`https://geocode.xyz/${position.coords.latitude},${position.coords.longitude}?json=1`)
    .then(res => res.json())
    .then(result => {
        setWeather(result.postal)
    })
    .catch(console.error)

    https://geocode.xyz/38.9218304,-104.78551039999999?json=1