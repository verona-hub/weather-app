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

    const darkForecast = darkMode && 'Forecast_dark';
    const Forecast = `card Forecast ${darkForecast}`;
    const slider = darkMode && 'dark-mode';

    return (
            <div className={ Forecast }>
                <AwesomeSlider
                    className='slider'
                    animation='fallAnimation'
                    bullets={false}
                >
                    <div className={ slider }>
                        <ForecastSlider
                            forecast={ forecast1day }
                            which_day='Day 1'
                            when=' Today '
                            location={ location }
                            darkMode={ darkMode }
                        />
                    </div>

                    <div className={ slider }>
                        <ForecastSlider
                            forecast={ forecast2days }
                            which_day='Day 2'
                            when=' Tomorrow '
                            location={ location }
                            darkMode={ darkMode }
                        />
                    </div>

                    <div className={ slider }>
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
