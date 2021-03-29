import React from 'react';
import ForecastHeader from "./ForecastHeader";
import ForecastInfo from "./ForecastInfo";


const Forecast1Day = ({ forecast, location }) => {

    const oldDate = forecast.date.toString();
    const date = oldDate.split('-').reverse().join('-');

    console.log(forecast);

    const { day, astro } = forecast;
    const { condition, maxtemp_c, avgtemp_c, mintemp_c, daily_chance_of_rain, totalprecip_mm,
        avghumidity, maxwind_kph, daily_chance_of_snow, avgvis_km
    } = day;
    const { sunrise, sunset } = astro;

    return (
        <div className="Forecast_1_Day forecast">
            <div className="forecast_header">
                <h1> Work in progress... </h1>
                <ForecastHeader
                    location={ location }
                    title='1 Day Forecast'
                    css='ForecastHeader'
                    day=' Today: '
                    date={ date }
                />
            </div>

            <div className="forecast_main">

                <div className="forecast_main_box">
                    <ForecastInfo
                        condition={ condition }
                        maxtemp_c={ maxtemp_c }
                        avgtemp_c={ avgtemp_c }
                        mintemp_c={ mintemp_c }
                        daily_chance_of_rain={ daily_chance_of_rain }
                        totalprecip_mm={ totalprecip_mm }
                        avghumidity={ avghumidity }
                        maxwind_kph={ maxwind_kph }
                        daily_chance_of_snow={ daily_chance_of_snow }
                        avgvis_km={ avgvis_km }
                    />
                </div>

                <div className="forecast_main_box">
                    <p> Sunrise: { sunrise } </p>
                    <p> Sunset: { sunset } </p>
                </div>
            </div>
        </div>
    );
};


export default Forecast1Day;
