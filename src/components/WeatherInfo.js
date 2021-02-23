import React from 'react';
import * as _ from 'underscore';
import Spinner from './Spinner';


const WeatherInfo = (props) => {
    console.log(props.weatherInfoProp);
    const { temp_c, feelslike_c, humidity, } = props.weatherInfoProp;

    if (props.spinner){
        return <Spinner />
    }

    else {
        if(_.size(props.weatherInfoProp) > 0) {
            return (
                <div className="WeatherInfo">
                    <h3> Temperature: {temp_c} </h3>
                    <h3> Feels like: {feelslike_c} </h3>
                    <h3> Humidity: {humidity} </h3>
                </div>
            )
        }
        else {
            return null;
        }
    }
};

export default WeatherInfo;
