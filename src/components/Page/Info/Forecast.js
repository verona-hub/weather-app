import React from 'react';

// Slider
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import AwesomeSliderStyles from 'react-awesome-slider/src/styled/fall-animation/fall-animation.scss';

// Components
import ForecastSlider from './ForecastData/ForecastSlider';

const Forecast = ({ location, forecast_3_days, darkMode }) => {

    // Destructuring the fetched forecastday into separate days: day1, day2, and day3
    const { forecastday } = forecast_3_days;
    const [forecast1day, forecast2days, forecast3days] = forecastday;

    // Dark mode classes
    const darkForecast = darkMode ? 'Forecast_dark' : undefined;
    const darkSlider = darkMode ? 'dark-mode' : undefined;

    return (
            <div className={`card Forecast ${darkForecast}`}>
                <AwesomeSlider
                    className='slider'
                    animation='fallAnimation'
                    bullets={false}
                >
                    <div className={ darkSlider }>
                        <ForecastSlider
                            forecast={ forecast1day }
                            which_day='Day 1'
                            when=' Today '
                            location={ location }
                            darkMode={ darkMode }
                        />
                    </div>

                    <div className={ darkSlider }>
                        <ForecastSlider
                            forecast={ forecast2days }
                            which_day='Day 2'
                            when=' Tomorrow '
                            location={ location }
                            darkMode={ darkMode }
                        />
                    </div>

                    <div className={ darkSlider }>
                        <ForecastSlider
                            forecast={ forecast3days }
                            which_day='Day 3'
                            when=' The day after tomorrow '
                            location={ location }
                            darkMode={ darkMode }
                        />
                    </div>

                </AwesomeSlider>
            </div>
    );
};


export default Forecast;
