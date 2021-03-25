import React from 'react';
import { NavLink } from 'react-router-dom';


const Forecast_3_Days = () => {
    return (
        <div className="Forecast_3_Days weather_wrapper card">
            <div className="main">
                <h1> Forecast for 3 days </h1>
                <h2> Work </h2>
                <h3> In </h3>
                <h4> Progress... </h4>
            </div>

            {/*<div className="weather_navlinks_wrapper">
                <NavLink to='/weather_current' activeClassName="forecast_navlink">
                    <div className="button_weather_nav"> Go to current weather</div>
                </NavLink>
                <NavLink to='/forecast_1_day' activeClassName="forecast_navlink">
                    <div className="button_weather_nav"> Go to 1 day forecast</div>
                </NavLink>
                <NavLink to='/forecast_2_days' activeClassName="forecast_navlink">
                    <div className="button_weather_nav"> Go to 2 days forecast</div>
                </NavLink>
                <NavLink to='/forecast_3_days' activeClassName="forecast_navlink">
                    <div className="button_weather_nav"> This is 3 days forecast</div>
                </NavLink>
            </div>*/}

        </div>
    );
};


export default Forecast_3_Days;
