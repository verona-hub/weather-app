import React from 'react';

// Modules
import * as _ from 'underscore';

// Components
import AirQuality from "../Info/AirQuality";
import Astronomy from '../Info/Astronomy';
import Footer from './Footer';
import Location from "../Info/Location";
import Weather from "../Info/Weather";


const Main = ({ weatherProp, weatherCondition, location, airQuality, astronomy, spinner }) => {
    const { name, country } = location;


    if (spinner) {
        return null;
    }

    else {
        return (
            <div>
                {
                    ( _.size(location) > 0 || _.size(weatherProp) > 0 ) && (
                        <div className="Main">
                            <div className="Main_header card">
                                <h2> Realtime weather conditions in: </h2>
                                <h2> { name }, { country } </h2>
                            </div>
                            <Weather
                                weatherProp={ weatherProp }
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

                            <Footer/>

                        </div>
                    )
                }
            </div>
        )
    }
};


export default Main;
