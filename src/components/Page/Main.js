import React from 'react';
import ScrollToTop from '../Utility/ScrollToTop';


// Components
import AirQuality from "./Info/AirQuality";
import Astronomy from './Info/Astronomy';
import Footer from './Footer';
import Location from "./Info/Location";
import Weather from "./Info/Weather";


const Main = ({ weatherInfo, weatherCondition, location, airQuality, astronomy, spinner, locationResponseSize, weatherResponseSize }) => {

    const { name, country } = location;

    /*
    document.addEventListener('click', function(e){
        console.log(window.scrollY);
    });
    */

    if (spinner) {
        return null;
    }

    else {
        return (
            <div>
                {
                    ( locationResponseSize > 0 || weatherResponseSize > 0 ) && (
                        <div className="Main">
                            <div className="Main_header card">
                                <h2> Realtime weather conditions in: </h2>
                                <h2> { name }, { country } </h2>
                            </div>
                            <Weather
                                weatherInfo={ weatherInfo }
                                weatherCondition={ weatherCondition }
                            />
                            <AirQuality
                                airQuality={ airQuality }
                            />
                            <div className="city_astro">
                                <Location
                                    location={ location }
                                />
                                <Astronomy
                                    astronomy={ astronomy }
                                />
                            </div>

                            <ScrollToTop />

                            <Footer/>

                        </div>
                    )
                }
            </div>
        )
    }
};


export default Main;
