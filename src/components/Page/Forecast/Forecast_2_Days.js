import React from 'react';
import ForecastHeader from "./ForecastHeader";
import ForecastInfo from "./ForecastInfo";


const Forecast2Days = ({ forecast, location }) => {

    const oldDate = forecast.date.toString();
    const date = oldDate.split('-').reverse().join('-');

    const { day } = forecast;
    const { condition, maxtemp_c, avgtemp_c, mintemp_c, daily_chance_of_rain, totalprecip_mm,
        avghumidity, maxwind_kph, daily_chance_of_snow, avgvis_km
    } = day;

    return (
        <div className="Forecast_2_Days forecast">
            <div className="forecast_header">
                <h1> Work in progress... </h1>
                <ForecastHeader
                    location={ location }
                    title='2 Days Forecast'
                    css='ForecastHeader'
                    day=' Tomorrow: '
                    date={ date }
                />
            </div>

            <div className="forecast_main">
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
        </div>
    );
};


export default Forecast2Days;
