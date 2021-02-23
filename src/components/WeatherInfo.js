import React from 'react';
import * as _ from 'underscore';
import Spinner from './Spinner';


const WeatherInfo = (props) => {
    console.log(props.weatherInfoProp);
    console.log(props.weatherInfoProp.condition)

    const { temp_c, feelslike_c, humidity, precip_mm, uv, vis_km,
            pressure_mb, wind_kph, wind_dir } = props.weatherInfoProp;
    const { icon, text } = props.weatherInfoCondition;

    if (props.spinner){
        return <Spinner />
    }

    else {
        if(_.size(props.weatherInfoProp) > 0) {
            return (
                <div className="WeatherInfo">
                    <img src={icon} alt=""/>
                    <h3> Weather: {text} </h3>
                    <h3> Temperature: {temp_c} &#8451; </h3>
                    <h3> Feels like: {feelslike_c} &#8451; </h3>
                    <h3> Humidity: {humidity}&#37; </h3>
                    <h3> Precipitation: {precip_mm}mm </h3>
                    <h3> Uv index: {uv} </h3>
                    <h3> Visibility: {vis_km}km </h3>
                    <h3> Pressure: {pressure_mb}mbar </h3>
                    <h3> Wind speed: {wind_kph}km/h </h3>
                    <h3> Wind direction: {wind_dir} </h3>
                </div>
            );
        }
        else {
            return null;
        }
    }
};

export default WeatherInfo;
