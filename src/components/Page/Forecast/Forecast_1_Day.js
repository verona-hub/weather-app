import React from 'react';
import ForecastHeader from "./ForecastHeader";
import ForecastInfo from "./ForecastInfo";
import ForecastHour from "./ForecastHour";

// Slider
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

const Forecast1Day = ({ forecast, location }) => {

    const oldDate = forecast.date.toString();
    const date = oldDate.split('-').reverse().join('-');

    const { day, astro, hour } = forecast;
    const { condition, maxtemp_c, avgtemp_c, mintemp_c, daily_chance_of_rain, totalprecip_mm,
        avghumidity, maxwind_kph, daily_chance_of_snow, avgvis_km
    } = day;
    const { sunrise, sunset } = astro;

    return (
        <div className="Forecast_1_Day forecast">
            <div className="forecast_header">
                <ForecastHeader
                    location={ location }
                    title='1 Day Forecast'
                    css='ForecastHeader'
                    day=' Today: '
                    date={ date }
                />
            </div>

            <div className="forecast_main">
                <AwesomeSlider>
                    <div className="forecast_main_box">
                        <h2> Work in progress...</h2>
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
                </AwesomeSlider>
            </div>
        </div>
    );
};


export default Forecast1Day;
