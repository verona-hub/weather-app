import React from 'react';

// Slider
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import AnimationStyles from 'react-awesome-slider/src/styled/fold-out-animation/fold-out-animation.scss';

// Components
import WeatherCurrent from '../Forecast/WeatherCurrent';
import Forecast1Day from '../Forecast/Forecast_1_Day';
import Forecast2Days from '../Forecast/Forecast_2_Days';
import Forecast3Days from '../Forecast/Forecast_3_Days';



const Weather = ({ weatherInfo, weatherCondition, location, forecast_3_days }) => {

    const { forecastday } = forecast_3_days;
    const forecastday_1_day = forecastday[0];
    const forecastday_2_days = forecastday[1];
    const forecastday_3_days = forecastday[2];

    // console.log(forecastday_1_day);
    // console.log(forecastday_2_days);
    // console.log(forecastday_3_days);

    const { name, country } = location;

    return (
        <AwesomeSlider
            className="slider card"
            animation="foldOutAnimation"
        >

            <div className="Weather_current">
                <div className="Main_header">
                    <h2 className="title"> Current weather conditions </h2>
                    <h2 className="sub_title"> { name }, { country } </h2>
                </div>

                <WeatherCurrent
                    weatherInfo={ weatherInfo }
                    weatherCondition={ weatherCondition }
                    forecast_3_days={ forecast_3_days }
                />
            </div>

            <div>
                <div className="Main_header">
                    <h2 className="title"> 1 Day Forecast </h2>
                    <h2 className="sub_title"> { name }, { country } </h2>
                </div>

                <Forecast1Day />
            </div>

            <div>
                <div className="Main_header">
                    <h2 className="title"> 2 Days Forecast </h2>
                    <h2 className="sub_title"> { name }, { country } </h2>
                </div>

                <Forecast2Days />
            </div>

            <div>
                <div className="Main_header">
                    <h2 className="title"> 3 Days Forecast </h2>
                    <h2 className="sub_title"> { name }, { country } </h2>
                </div>

                <Forecast3Days />
            </div>

        </AwesomeSlider >
    );
};


export default Weather;
