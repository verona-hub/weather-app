import React from 'react';

// Modules
import * as _ from 'underscore';

// Components
import AirQualityInfo from "./AirQualityInfo";
import Astronomy from './Astronomy';
import CityInfo from "./CityInfo";
import Spinner from "../Spinner";
import WeatherInfo from "./WeatherInfo";


const MainInfo = ({ weatherInfoProp, weatherInfoCondition, cityInfoProp, airQuality, astronomy, spinner }) => {
    const { name, country } = cityInfoProp;


    if (spinner) {
        return <Spinner />
    }

    else {
        if (_.size(cityInfoProp) > 0 || _.size(weatherInfoProp) > 0) {
            return (
                <div>
                    <div className="MainInfo-header card">
                        <h2> Realtime weather conditions in: </h2>
                        <h2> { name }, { country } </h2>
                    </div>
                    <WeatherInfo
                        weatherInfoProp={ weatherInfoProp }
                        weatherInfoCondition={ weatherInfoCondition }
                    />
                    <CityInfo
                        cityInfoProp={ cityInfoProp }
                    />
                    <div className="flex">
                        <AirQualityInfo
                            airQuality={ airQuality }
                        />
                        <Astronomy
                            astronomy={ astronomy }
                        />
                    </div>
                </div>
            );
        }

        else {
            return null;
        }
    }
};


export default MainInfo;
