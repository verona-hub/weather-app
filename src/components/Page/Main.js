import React from 'react';

// Components
import AirQuality from "./Info/AirQuality";
import Astronomy from './Info/Astronomy';
import Forecast from './Info/Forecast';
import ImageSeparatorAirQuality from '../Utility/ImageSeparator/ImageSeparatorAirQuality';
import ImageSeparatorAstronomy from '../Utility/ImageSeparator/ImageSeparatorAstronomy';
import ImageSeparatorWeatherCurrent from '../Utility/ImageSeparator/ImageSeparatorWeatherCurrent';
import ImageSeparatorWeatherForecast from "../Utility/ImageSeparator/ImageSeparatorWeatherForecast";
import Location from "./Info/Location";
import ScrollToTopHomepage from "../Utility/ScrollToTopHomepage";
import WeatherCurrent from "./Info/WeatherCurrent";


const Main = ({ weatherInfo, weatherCondition, location, airQuality, astronomy, spinner, locationResponseSize, weatherResponseSize, forecast_3_days, toggleDarkMode, darkMode }) => {

    const contentPresent = locationResponseSize > 0 || weatherResponseSize > 0;

    const MainDark = darkMode && 'dark-mode';
    const Main = `Main ${MainDark}`;

    if (spinner) {
        return null;
    }

    else {
        return (
            <div className={ Main }>
                {
                    ( contentPresent ) && (
                        <div>
                            <WeatherCurrent
                                weatherInfo={ weatherInfo }
                                weatherCondition={ weatherCondition }
                                forecast_3_days={ forecast_3_days }
                                location={ location }
                                toggleDarkMode={ toggleDarkMode }
                                darkMode={ darkMode }
                            />
                            <ImageSeparatorWeatherCurrent
                                weatherCondition={ weatherCondition }
                            />
                            <Forecast
                                forecast_3_days={ forecast_3_days }
                                location={ location }
                                darkMode={ darkMode }
                            />
                            <ImageSeparatorWeatherForecast
                                forecast_3_days={ forecast_3_days }
                                location={ location }
                            />
                            <AirQuality
                                airQuality={ airQuality }
                                darkMode={ darkMode }
                            />
                            <ImageSeparatorAirQuality
                                airQuality={ airQuality }
                            />

                            <div className="city_astro">
                                <Location
                                    location={ location }
                                    darkMode={ darkMode }
                                />
                                <Astronomy
                                    astronomy={ astronomy }
                                    darkMode={ darkMode }
                                />
                            </div>

                            <ImageSeparatorAstronomy
                                astronomy={ astronomy }
                            />

                            <ScrollToTopHomepage
                                darkMode={ darkMode }
                            />

                        </div>
                    )
                }
            </div>
        )
    }
};


export default Main;
