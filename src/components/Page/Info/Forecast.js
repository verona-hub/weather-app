import React from 'react';

// Slider
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import AnimationStyles from 'react-awesome-slider/src/styled/fold-out-animation/fold-out-animation.scss';

// Components
import ForecastSlider from './ForecastData/ForecastSlider';


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
                    <ForecastSlider
                        forecast={ forecast1day }
                        title='Forecast Weather: Day 1'
                        when=' Today: '
                        location={ location }
                    />
                </div>

                <div>
                    <ForecastSlider
                        forecast={ forecast2days }
                        title='Forecast Weather: Day 2'
                        when=' Tomorrow: '
                        location={ location }
                    />
                </div>

                <div>
                    <ForecastSlider
                        forecast={ forecast3days }
                        title='Forecast Weather: Day 3'
                        when=' The day after tomorrow: '
                        location={ location }
                    />
                </div>

            </AwesomeSlider>
        </div>
    );
};


export default Weather;
