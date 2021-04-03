import React from 'react';

// Slider
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import AnimationStyles from 'react-awesome-slider/src/styled/fold-out-animation/fold-out-animation.scss';

// Components
import Forecast1Day from '../Forecast/Forecast_1_Day';
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
                <Forecast1Day
                    forecast={ forecast1day }
                    location={ location }
                />
            </div>

            <div className="forecast_wrapper">
                <Forecast2Days
                    forecast={ forecast2days }
                    location={ location }
                />
            </div>

            <div className="forecast_wrapper">
                <Forecast3Days
                    forecast={ forecast3days }
                    location={ location }
                />
            </div>

        </AwesomeSlider >
    );
};


export default Weather;
