import React, { Fragment } from 'react';

// Slider
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import AnimationStyles from 'react-awesome-slider/src/styled/fold-out-animation/fold-out-animation.scss';

// Components
import ForecastEachDay from '../Forecast/ForecastEachDay';


const Weather = ({ location, forecast_3_days }) => {

    const { forecastday } = forecast_3_days;

    const forecast1day = forecastday[0];
    const forecast2days = forecastday[1];
    const forecast3days = forecastday[2];

    return (
        <div className="card Forecast_wrapper">
            <AwesomeSlider
                className="slider "
                animation="foldOutAnimation"
            >
                <div>
                    <ForecastEachDay
                        forecast={ forecast1day }
                        title='1 Day Forecast'
                        when=' Today: '
                        location={ location }
                    />
                </div>

                <div>
                    <ForecastEachDay
                        forecast={ forecast2days }
                        title='2 Days Forecast'
                        when=' Tomorrow: '
                        location={ location }
                    />
                </div>

                <div>
                    <ForecastEachDay
                        forecast={ forecast3days }
                        title='3 Days Forecast'
                        when=' The day after tomorrow: '
                        location={ location }
                    />
                </div>

            </AwesomeSlider>
        </div>
    );
};


export default Weather;
