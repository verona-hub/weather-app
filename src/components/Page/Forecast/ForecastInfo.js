import React from 'react';


const ForecastInfo = ({ condition, maxtemp_c, avgtemp_c, mintemp_c, daily_chance_of_rain, totalprecip_mm,
                          avghumidity, maxwind_kph, daily_chance_of_snow, avgvis_km, sunrise, sunset }) => {

    const { text } = condition;

    return (
        <div>
            <p> Weather Forecast: { text } </p>
            <p> Max Temperature: {maxtemp_c}&#8451; </p>
            <p> Average Temperature: { avgtemp_c}&#8451; </p>
            <p> Min Temperature: {mintemp_c}&#8451; </p>
            <p> Daily change of rain: { daily_chance_of_rain}&#37; </p>
            <p> Total rain precipitation: { totalprecip_mm }mm </p>
            <p> Average Humidity: { avghumidity }&#37; </p>
            <p> Max wind speed: { maxwind_kph }km/h</p>
            <p> Daily change of snow: { daily_chance_of_snow}&#37; </p>
            <p> Average Visibility: { avgvis_km }km; </p>
            <p> Sunrise: { sunrise } </p>
            <p> Sunset: { sunset } </p>
        </div>
    );
};


export default ForecastInfo;
