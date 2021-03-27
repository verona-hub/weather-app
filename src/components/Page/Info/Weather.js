import React, { Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Slider
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

// Components
import WeatherCurrent from '../Forecast/WeatherCurrent';
import Forecast_1_Day from '../Forecast/Forecast_1_Day';
import Forecast_2_Days from '../Forecast/Forecast_2_Days';
import Forecast_3_Days from '../Forecast/Forecast_3_Days';


const Weather = ({ weatherInfo, weatherCondition, location, forecast_3_days }) => {

    const { name, country } = location;

    return (
        <BrowserRouter>
            <AwesomeSlider
                className="slider card"
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
                    <h1> 1 day Forecast </h1>
                    <h2> Work in progress... </h2>
                </div>

                <div>
                    <h1> 2 days Forecast </h1>
                    <h2> Work in progress... </h2>
                </div>

                <div>
                    <h1> 3 days Forecast </h1>
                    <h2> Work in progress... </h2>
                </div>

            </AwesomeSlider >
        </BrowserRouter>
    );
};


export default Weather;
