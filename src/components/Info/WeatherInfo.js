import React from 'react';
import Moment from 'react-moment';


const WeatherInfo = ({ weatherInfoProp, weatherInfoCondition}) => {
    // console.log(weatherInfoProp);
    // console.log(weatherInfoProp.condition);

    const { cloud, temp_c, feelslike_c, humidity, precip_mm, uv, vis_km,
        pressure_mb, wind_kph, wind_dir } = weatherInfoProp;
    const { icon, text } = weatherInfoCondition;

    return (
        <div className="WeatherInfo card">

            <div className="card-header">
                <h3> Current time: </h3>
                <Moment interval={1000} format="HH:mm:ss" local>
                </Moment>
            </div>

            <div className="card-content">


            </div>

            <div className="card-details">
                <img src={ icon } alt=""/>
                <h3> Weather conditions: { text } </h3>
                <h3> Cloud cover: { cloud }&#37; </h3>
                <h3> Air temperature: { temp_c } &#8451; </h3>
                <h3> Feels like: { feelslike_c } &#8451; </h3>
                <h3> Humidity: { humidity }&#37; </h3>
                <h3> Precipitation: { precip_mm }mm </h3>
                <h3> Uv index: { uv } of 10 </h3>
                <h3> Visibility: { vis_km }km </h3>
                <h3> Atmospheric pressure: { pressure_mb }mbar </h3>
                <h3> Wind: { wind_kph }km/h from { wind_dir } </h3>
            </div>
        </div>
    );
};


export default WeatherInfo;
