import React from 'react';


const ForecastDailyInfo = ({ condition, maxtemp_c, avgtemp_c, mintemp_c, daily_chance_of_rain, totalprecip_mm,
                          avghumidity, maxwind_kph, daily_chance_of_snow, avgvis_km, sunrise, sunset }) => {

    const { text } = condition;

    return (
        <div className="ForecastDailyInfo">
            <div className="main">
                <div className="bottom_content">
                    <div className="bottom_left">
                        <div className="spaced"><span> Weather Forecast:</span> { text } </div>
                        <div className="spaced"><span> Max Temperature: </span> { maxtemp_c }&#8451; </div>
                        <div className="spaced"><span> Average Temperature: </span> { avgtemp_c }&#8451; </div>
                        <div className="spaced"><span> Min Temperature: </span> { mintemp_c }&#8451; </div>
                        <div className="spaced"><span> Daily rain chance: </span> { daily_chance_of_rain }&#37; </div>
                        <div className="spaced"><span> Total rain precipitation: </span> { totalprecip_mm }mm</div>
                    </div>
                    <div className="bottom_right">
                        <div className="spaced"><span> Average Humidity: </span> { avghumidity }&#37; </div>
                        <div className="spaced"><span> Max wind speed: </span> { maxwind_kph }km/h</div>
                        <div className="spaced"><span> Daily snow chance: </span> { daily_chance_of_snow }&#37; </div>
                        <div className="spaced"><span> Average Visibility: </span> { avgvis_km }km;</div>
                        <div className="spaced"><span> Sunrise: </span> { sunrise } </div>
                        <div className="spaced"><span> Sunset: </span> { sunset } </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default ForecastDailyInfo;
