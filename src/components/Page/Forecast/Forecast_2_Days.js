import React from 'react';
import { timeForecast } from '../../Utility/DateAndTime';
import ForecastHeader from "./ForecastHeader";
import ForecastHour from "./ForecastHour";
import ForecastInfo from "./ForecastInfo";


const Forecast2Days = ({ forecast, location }) => {

    const { day, astro, hour } = forecast;
    const { condition, maxtemp_c, avgtemp_c, mintemp_c, daily_chance_of_rain, totalprecip_mm,
        avghumidity, maxwind_kph, daily_chance_of_snow, avgvis_km
    } = day;
    const { sunrise, sunset } = astro;

    return (
        <div className="Forecast_2_Days forecast">
            <div className="forecast_header">
                <h1> Work in progress... </h1>
                <ForecastHeader
                    location={ location }
                    title='2 Days Forecast'
                    css='ForecastHeader'
                    day=' Tomorrow: '
                    date={ timeForecast(forecast) }
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
                    sunrise={ sunrise }
                    sunset={ sunset }
                />
            </div>

            <div className="forecast_main_box">
                <ForecastHour
                    hour={ hour }
                />
            </div>
        </div>
    );
};


export default Forecast2Days;
