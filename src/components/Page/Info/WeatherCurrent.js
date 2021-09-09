import React from 'react';
import feels_logo from '../../../img/feels.png'
import DarkMode from "../../Utility/DarkMode";


// Current weather component
const WeatherCurrent = ({ weatherInfo, weatherCondition, location, toggleDarkMode }) => {

    // Destructuring the fetched weather data
    const { cloud, temp_c, feelslike_c, humidity, precip_mm, uv, vis_km,
        pressure_mb, wind_kph, wind_dir } = weatherInfo;
    // Destructuring the fetched weather conditions data
    const { icon, text } = weatherCondition;
    // Destructuring the fetched location data
    const { name, country } = location;

    return (
        <div className="WeatherCurrent card">

            <DarkMode
                toggleDarkMode={ toggleDarkMode }
            />

            <h1 className="title"> Current Weather </h1>
            <div className="Weather_current_main">
                <h2 className="sub_title_main"> { name }, { country } </h2>
                <div className="top_content">
                    <div className="top_content_header">
                        <img src={ icon } alt="weather conditions icon"/>
                    </div>
                    <div className="top_content_main">
                        <h2 className="current_weather_text">  { text } { temp_c } &#8451; </h2>
                        <div className="feels_like">
                            <img src={ feels_logo } alt="feels like icon"/>
                            <h3> Feels like: { feelslike_c } &#8451; </h3>
                        </div>
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
