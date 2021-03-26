import React, { Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import WeatherCurrent from '../Forecast/WeatherCurrent';
import Forecast1Day from '../Forecast/Forecast_1_Day';
import Forecast_2_Days from '../Forecast/Forecast_2_Days';
import Forecast_3_Days from '../Forecast/Forecast_3_Days';


const Weather = ({ weatherInfo, weatherCondition, forecast_3_days }) => {

    return (
        <BrowserRouter>
            <Switch>
                <Route path='/forecastday_1_day' render={ () => (
                        <Forecast1Day />
                )} />
                {/*<Route path='/forecast_1_day' component={ Forecast_1_Day }/>*/}
                <Route path='/forecast_2_days' component={ Forecast_2_Days }/>
                <Route path='/forecast_3_days' component={ Forecast_3_Days }/>

                <WeatherCurrent
                    weatherInfo={ weatherInfo }
                    weatherCondition={ weatherCondition }
                    forecast_3_days={ forecast_3_days }
                />

            </Switch>
        </BrowserRouter>
    );
};


export default Weather;
