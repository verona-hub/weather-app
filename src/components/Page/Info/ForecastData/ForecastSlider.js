import React from 'react';
import { timeForecast } from '../../../Utility/DateAndTime';
import ForecastHeader from "./ForecastHeader";
import ForecastHourlyInfo from "./ForecastHourlyInfo";
import ForecastDailyInfo from "./ForecastDailyInfo";

// Carousel slider
import { Dot, CarouselProvider, Slide, Slider } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';


// The slider component
const ForecastSlider = ({ forecast, title, when }) => {

    // Destructuring the fetched forecast data
    const { day, astro, hour } = forecast;
    const { condition, maxtemp_c, avgtemp_c, mintemp_c, daily_chance_of_rain, totalprecip_mm,
        avghumidity, maxwind_kph, daily_chance_of_snow, avgvis_km
    } = day;
    const { sunrise, sunset } = astro;

    return (
        <div className="ForecastEachDay">
            <ForecastHeader
                title= { title }
                css='ForecastHeader'
                when= { when }
                date={ timeForecast(forecast) }
            />

            {/* Main slider for switching between: day 1, day2, and day 3 */}
            <CarouselProvider
                visibleSlides={1}
                totalSlides={2}
                step={1}
                naturalSlideWidth={400}
                naturalSlideHeight={500}
                isIntrinsicHeight
            >
                {/* Little tab slider for daily and hourly summary */}
                <Slider>
                    {/* Daily summary */}
                    <Slide index={0} className="ForecastDailyInfo_wrapper">
                        <h2 className="daily_summary"> Daily Summary </h2>
                        <ForecastDailyInfo
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
                    </Slide>

                    {/* Hourly summary */}
                    <Slide index={1}  className="ForecastHourlyInfo_wrapper">
                        <h2> Hourly Summary </h2>
                        <ForecastHourlyInfo
                            hour={ hour }
                        />
                    </Slide>
                </Slider>

                {/* Two main buttons to switch tabs between daily and hourly summary */}
                <div className="dot_slide_wrapper">
                    <Dot slide={ 0 } className="dot_slide"> Daily Summary </Dot>
                    <Dot slide={ 1 } className="dot_slide"> Hourly Summary </Dot>
                </div>

            </CarouselProvider>
        </div>
    );
};


export default ForecastSlider;
