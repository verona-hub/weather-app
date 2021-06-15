import React from 'react';

// Components
import ForecastHeader from "./ForecastData/ForecastHeader";


// Current weather component
const WeatherCurrent = ({ weatherInfo, weatherCondition, location }) => {

    // Destructuring the fetched weather data
    const { cloud, temp_c, feelslike_c, humidity, precip_mm, uv, vis_km,
        pressure_mb, wind_kph, wind_dir } = weatherInfo;
    // Destructuring the fetched weather conditions data
    const { icon, text } = weatherCondition;
    // Destructuring the fetched location data
    const { name, country } = location;

    return (
        <div className="WeatherCurrent card">
            <h2 className="title"> Current Weather </h2>
            <div className="Weather_current_main">
                <h1> { name }, { country } </h1>
                <div className="top_content">
                    <div className="card_top_header">
                        <img src={ icon } alt="weather conditions icon"/>
                    </div>
                    <div className="card_top_main">
                        <h1>  { text } { temp_c } &#8451; </h1>
                        <h3> Feels like: { feelslike_c } &#8451; </h3>
                    </div>
                </div>
                <div className="bottom_content">
                    <div className="bottom_left">
                        <div className="spaced"><span> Cloud Cover:</span> { cloud }&#37;</div>
                        <div className="spaced"><span> Wind Speed:</span> { wind_kph }km/h</div>
                        <div className="spaced"><span> Atmospheric Pressure:</span> { pressure_mb }mbar</div>
                        <div className="spaced"><span> Humidity:</span> { humidity }&#37; </div>
                    </div>
                    <div className="bottom_right">
                        <div className="spaced"><span> Precipitation:</span> { precip_mm }mm</div>
                        <div className="spaced"><span> Wind Direction:</span> from { wind_dir } </div>
                        <div className="spaced"><span> Visibility:</span> { vis_km }km</div>
                        <div className="spaced"><span> Uv Index:</span> { uv } of 10</div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default WeatherCurrent;
