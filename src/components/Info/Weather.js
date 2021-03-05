import React from 'react';


const Weather = ({ weatherProp, weatherCondition }) => {

    const { cloud, temp_c, feelslike_c, humidity, precip_mm, uv, vis_km,
        pressure_mb, wind_kph, wind_dir } = weatherProp;
    const { icon, text } = weatherCondition;

    return (
        <div className="Weather card">
            <div className="top_content">
                <div className="card_top_header">
                    <img src={ icon } alt=""/>
                </div>
                <div className="card_top_main">
                    <h1>  { text } { temp_c } &#8451; </h1>
                    <h3> Feels like: { feelslike_c } &#8451; </h3>
                </div>
            </div>
            <div className="bottom_content">
                    <div className="bottom_left">
                        <div className="spaced"><span> Cloud cover:</span> { cloud }&#37;</div>
                        <div className="spaced"><span> Wind speed:</span> { wind_kph }km/h </div>
                        <div className="spaced"><span> Atmospheric pressure:</span> { pressure_mb }mbar </div>
                        <div className="spaced"><span> Humidity:</span> { humidity }&#37; </div>
                    </div>
                    <div className="bottom_right">
                        <div className="spaced"><span> Precipitation:</span> { precip_mm }mm </div>
                        <div className="spaced"><span> Wind direction:</span> from { wind_dir } </div>
                        <div className="spaced"><span> Visibility:</span> { vis_km }km </div>
                        <div className="spaced"><span> Uv index:</span> { uv } of 10 </div>
                    </div>
            </div>
        </div>
    );
};


export default Weather;
