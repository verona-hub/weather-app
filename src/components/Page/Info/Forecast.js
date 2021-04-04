import React from 'react';

// Slider
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import AnimationStyles from 'react-awesome-slider/src/styled/fold-out-animation/fold-out-animation.scss';

// Components
import ForecastEachDay from '../Forecast/ForecastEachDay';
import Forecast2Days from '../Forecast/Forecast_2_Days';
import Forecast3Days from '../Forecast/Forecast_3_Days';



const Weather = ({ weatherInfo, weatherCondition, location, forecast_3_days }) => {

    const { forecastday } = forecast_3_days;

    const forecast1day = forecastday[0];
    const forecast2days = forecastday[1];
    const forecast3days = forecastday[2];

    return (
        <AwesomeSlider
            className="slider card Weather_wrapper"
            animation="foldOutAnimation"
        >
            <div className="forecast_wrapper">
                <ForecastEachDay
                    forecast={ forecast1day }
                    title='1 Day Forecast'
                    when=' Today: '
                    location={ location }
                />
            </div>

            <div className="forecast_wrapper">
                <ForecastEachDay
                    forecast={ forecast2days }
                    title='2 Days Forecast'
                    day=' Tomorrow: '
                    location={ location }
                />
            </div>

            <div className="forecast_wrapper">
                <ForecastEachDay
                    forecast={ forecast3days }
                    title='3 Days Forecast'
                    day=' Day after tomorrow: '
                    location={ location }
                />
            </div>

        </AwesomeSlider >
    );
};


export default Weather;
