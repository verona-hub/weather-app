import React from 'react';
import ScrollToTop from '../Utility/ScrollToTop';

// Components
import AirQuality from "./Info/AirQuality";
import Astronomy from './Info/Astronomy';
import Forecast from './Info/Forecast';
import Location from "./Info/Location";
import WeatherCurrent from "./Info/WeatherCurrent";


const Main = ({ weatherInfo, weatherCondition, location, airQuality, astronomy, spinner, locationResponseSize, weatherResponseSize, forecast_3_days }) => {

    if (spinner) {
        return null;
    }

    else {
        return (
            <div className="Main">
                {
                    ( locationResponseSize > 0 || weatherResponseSize > 0 ) && (
                        <div>
                            <WeatherCurrent
                                weatherInfo={ weatherInfo }
                                weatherCondition={ weatherCondition }
                                forecast_3_days={ forecast_3_days }
                                location={ location }
                            />
                            <Forecast
                                forecast_3_days={ forecast_3_days }
                                location={ location }
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

                            <ScrollToTop />

                        </div>
                    )
                }
            </div>
        )
    }
};


export default Main;
