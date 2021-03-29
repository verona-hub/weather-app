import React from 'react';

// Slider
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import AnimationStyles from 'react-awesome-slider/src/styled/fold-out-animation/fold-out-animation.scss';

// Components
import Forecast1Day from '../Forecast/Forecast_1_Day';
import Forecast2Days from '../Forecast/Forecast_2_Days';
import Forecast3Days from '../Forecast/Forecast_3_Days';
import MainHeader from "../MainHeader";
import WeatherCurrent from '../Forecast/WeatherCurrent';



const Weather = ({ weatherInfo, weatherCondition, location, forecast_3_days }) => {

    const { forecastday } = forecast_3_days;

    const forecast1day = forecastday[0];
    const forecast2days = forecastday[1];
    const forecast3days = forecastday[2];

    // console.log(forecast1day);
    // console.log(forecastday_2_days);
    // console.log(forecastday_3_days);


    return (
        <AwesomeSlider
            className="slider card Weather_wrapper"
            animation="foldOutAnimation"
        >
            <div className="Weather_current_box">
                <MainHeader
                    location={ location }
                    title='Current weather conditions'
                    css=''
                />
                <WeatherCurrent
                    weatherInfo={ weatherInfo }
                    weatherCondition={ weatherCondition }
                />
            </div>

            <div>
                <Forecast1Day
                    forecast1day={ forecast1day }
                    location={ location }
                    title='1 Day Forecast'
                    css='MainHeader__forecast'
                />
            </div>

            <div>
                <Forecast2Days
                    forecast2days={ forecast2days }
                    location={ location }
                    title='2 Days Forecast'
                    css='MainHeader__forecast'
                />
            </div>

            <div className='forecast_box'>
                <MainHeader
                    location={ location }
                    title='3 Days Forecast'
                    css='MainHeader__forecast'
                />
                <Forecast3Days
                    forecast3days={ forecast3days }
                />
            </div>

        </AwesomeSlider >
    );
};


export default Weather;
