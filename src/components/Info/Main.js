import React from 'react';

// Modules
import * as _ from 'underscore';

// Components
import AirQuality from "./AirQuality";
import Astronomy from './Astronomy';
import Location from "./Location";
import Spinner from "../Spinner";
import Weather from "./Weather";


const Main = ({ weatherProp, weatherCondition, location, airQuality, astronomy, spinner }) => {
    const { name, country } = location;


    if (spinner) {
        return <Spinner />
    }

    else {
        if (_.size(location) > 0 || _.size(weatherProp) > 0) {
            return (
                <div>
                    <div className="Main-header card">
                        <h2> Realtime weather conditions in: </h2>
                        <h2> { name }, { country } </h2>
                    </div>
                    <Weather
                        weatherProp={ weatherProp }
                        weatherCondition={ weatherCondition }
                    />
                    <AirQuality
                        airQuality={ airQuality }
                    />
                    <div className="city_astro">
                        <Location
                            location={ location }
                        />
                        <Astronomy
                            astronomy={ astronomy }
                        />
                    </div>
                    <div className="api">
                        <a href="https://www.weatherapi.com/" title="Free Weather API">
                            <img src='//cdn.weatherapi.com/v4/images/weatherapi_logo.png' alt="Weather data by WeatherAPI.com" className="api-img"/>
                        </a>
                        <p>Powered by <a href="https://www.weatherapi.com/" title="Free Weather API">WeatherAPI.com</a></p>
                    </div>
                </div>
            );
        }

        else {
            return null;
        }
    }
};


export default Main;
