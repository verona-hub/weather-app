import React from 'react';
import ScrollToTop from '../Utility/ScrollToTop';

// Components
import AirQuality from "./Info/AirQuality";
import Astronomy from './Info/Astronomy';
import Location from "./Info/Location";
import Weather from "./Info/Weather";


const Main = ({ weatherInfo, weatherCondition, location, airQuality, astronomy, spinner, locationResponseSize, weatherResponseSize, forecast_3_days }) => {

    if (spinner) {
        return null;
    }

    else {
        return (
            <div>
                {
                    ( locationResponseSize > 0 || weatherResponseSize > 0 ) && (
                        <div className="Main">
                            <Weather
                                weatherInfo={ weatherInfo }
                                weatherCondition={ weatherCondition }
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
