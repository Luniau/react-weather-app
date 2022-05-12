import React, {useState} from "react";
import WeatherForecastDay from "./WeatherFoecastDay";
import "./WeatherForecast.css"; 
import axios from "axios";

export default function WeatherForecast (props) {
    let [loaded, setLoaded] = useState (false);
    let [forecast, setForecast] = useState(null);

    function handleResponse(response) {
        setForecast(response.data.daily);
       setLoaded(true);
    }
    if (loaded) {
        return (
        <div className="WeatherForecast">
            <div className="row">
                <div className="col">
                   <WeatherForecastDay data = {forecast[0]}/>

                </div>
            </div>
        </div>
        );
    }
   
    else {
        let apiKey = "704c1ac4921f1b0774eeea454560dd2f";
        let longitude = props.coordinates.lon;
        let latitude = props.coordinates.lat;
        let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

        axios.get(apiUrl).then(handleResponse);
        return null;
    }
}