import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import WeatherCurrent from '../Forecast/WeatherCurrent';
import Forecast_1_Day from '../Forecast/Forecast_1_Day';
import Forecast_2_Days from '../Forecast/Forecast_2_Days';
import Forecast_3_Days from '../Forecast/Forecast_3_Days';


const Weather = ({ weatherInfo, weatherCondition }) => {

    return (
        <BrowserRouter>
            <Switch>
                <Route path='/forecast_1_day' component={ Forecast_1_Day }/>
                <Route path='/forecast_2_days' component={ Forecast_2_Days }/>
                <Route path='/forecast_3_days' component={ Forecast_3_Days }/>

                <WeatherCurrent
                    weatherInfo={ weatherInfo }
                    weatherCondition={ weatherCondition }
                />
            </Switch>

        </BrowserRouter>
    );
};


export default Weather;
