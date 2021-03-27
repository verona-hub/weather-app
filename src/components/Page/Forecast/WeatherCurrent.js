import React from 'react';
import { NavLink } from 'react-router-dom';


const WeatherCurrent = ({ weatherInfo, weatherCondition, forecast_3_days }) => {

    const { cloud, temp_c, feelslike_c, humidity, precip_mm, uv, vis_km,
        pressure_mb, wind_kph, wind_dir } = weatherInfo;
    const { icon, text } = weatherCondition;

    const { forecastday } = forecast_3_days;
    const forecastday_1_day = forecastday[0];
    const forecastday_2_days = forecastday[1];
    const forecastday_3_days = forecastday[2];

    // console.log(forecastday_1_day);
    // console.log(forecastday_2_days);
    // console.log(forecastday_3_days);

    return (
        <div>
            <div className="main">
                <div className="top_content">
                    <div className="card_top_header">
                        <img src={ icon } alt=""/>
                    </div>
                    <div className="card_top_main">
                        <h1>  { text } { temp_c } &#8451; </h1>
                        <h3> Feels like: { feelslike_c } &#8451; </h3>
                    </div>
                </div>
                <div className="bottom_content">
                    <div className="bottom_left">
                        <div className="spaced"><span> Cloud cover:</span> { cloud }&#37;</div>
                        <div className="spaced"><span> Wind speed:</span> { wind_kph }km/h</div>
                        <div className="spaced"><span> Atmospheric pressure:</span> { pressure_mb }mbar</div>
                        <div className="spaced"><span> Humidity:</span> { humidity }&#37; </div>
                    </div>
                    <div className="bottom_right">
                        <div className="spaced"><span> Precipitation:</span> { precip_mm }mm</div>
                        <div className="spaced"><span> Wind direction:</span> from { wind_dir } </div>
                        <div className="spaced"><span> Visibility:</span> { vis_km }km</div>
                        <div className="spaced"><span> Uv index:</span> { uv } of 10</div>
                    </div>
                </div>
            </div>



            {/*<div className="weather_navlinks_wrapper">
                <NavLink to='/weather_current' activeClassName="forecast_navlink">
                    <div className="button_weather_nav"> This is current weather</div>
                </NavLink>
                <NavLink to='/forecast_1_day' activeClassName="forecast_navlink">
                    <div className="button_weather_nav"> Go to 1 day forecast</div>
                </NavLink>
                <NavLink to='/forecast_2_days' activeClassName="forecast_navlink">
                    <div className="button_weather_nav"> Go to 2 days forecast</div>
                </NavLink>
                <NavLink to='/forecast_3_days' activeClassName="forecast_navlink">
                    <div className="button_weather_nav"> Go to 3 days forecast</div>
                </NavLink>
            </div>*/}

        </div>
    );
};

export default WeatherCurrent;
