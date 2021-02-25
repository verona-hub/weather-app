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
            <div className="top-content">
                <div className="card-top-header">
                    <img src={ icon } alt=""/>
                    <div className="time-wrapper">
                        <p> Current time: </p>
                        <Moment interval={ 1000 } format="HH:mm:ss" local>
                        </Moment>
                    </div>
                </div>

                <div className="card-top-content">
                    <h1>  { text } { temp_c } &#8451; </h1>
                    <h3> Feels like: { feelslike_c } &#8451; </h3>
                </div>
            </div>
            <div className="bottom-content">
                <div className="bottom-card-details">
                    <div className="bottom-left">
                        <div className="spaced"><p> Cloud cover: { cloud }&#37; </p></div>
                        <div className="spaced"><p> Humidity: { humidity }&#37; </p></div>
                        <div className="spaced"><p> Precipitation: { precip_mm }mm </p></div>
                        <div className="spaced"><p> Uv index: { uv } of 10 </p></div>
                    </div>
                    <div className="bottom-right">
                        <div className="spaced"><p> Visibility: { vis_km }km </p></div>
                        <div className="spaced"><p> Atmospheric pressure: { pressure_mb }mbar </p></div>
                        <div className="spaced"><p> Wind: { wind_kph }km/h from { wind_dir } </p></div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default WeatherInfo;
