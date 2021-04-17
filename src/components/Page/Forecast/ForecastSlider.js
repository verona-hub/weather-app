import React from 'react';
import { timeForecast } from '../../Utility/DateAndTime';
import ForecastHeader from "./ForecastHeader";
import ForecastHourlyInfo from "./ForecastHourlyInfo";
import ForecastDailyInfo from "./ForecastDailyInfo";

// Carousel slider
import { Dot, CarouselProvider, Slide, Slider } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';


const ForecastSlider = ({ forecast, title, when }) => {

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

            <CarouselProvider
                visibleSlides={1}
                totalSlides={3}
                step={1}
                naturalSlideWidth={400}
                naturalSlideHeight={500}
                isIntrinsicHeight
            >
                <Slider>
                    <Slide index={0} className="ForecastDailyInfo_wrapper">
                        <h2> Daily Forecast </h2>
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

                    <Slide index={1}  className="ForecastHourlyInfo_wrapper">
                        <h2> Hourly Forecast </h2>
                        <ForecastHourlyInfo
                            hour={ hour }
                        />
                    </Slide>

                    <Slide index={2} className="in_progress_wrapper">
                        <h1> Work in progress... </h1>
                        <p> Work in progress... </p>
                    </Slide>
                </Slider>

                <div className="dot_slide_wrapper">
                    <Dot slide={ 0 } className="dot_slide"> Daily Forecast </Dot>
                    <Dot slide={ 1 } className="dot_slide"> Hourly Forecast </Dot>
                    <Dot slide={ 2 } className="dot_slide"> Guess what </Dot>
                </div>

            </CarouselProvider>
        </div>
    );
};


export default ForecastSlider;
