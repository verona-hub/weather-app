import React from 'react';

// Modules
import * as _ from 'underscore';

// Components
import AirQualityInfo from "./AirQualityInfo";
import CityInfo from "./CityInfo";
import Spinner from "../Spinner";
import WeatherInfo from "./WeatherInfo";


const MainInfo = ({ airQuality, weatherInfoProp, weatherInfoCondition, cityInfoProp, spinner }) => {
    const { name, country } = cityInfoProp;


    if (spinner) {
        return <Spinner />
    }

    else {
        if (_.size(cityInfoProp) > 0 || _.size(weatherInfoProp) > 0) {
            return (
                <div>
                    <AirQualityInfo
                        airQuality={ airQuality }
                    />
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
                </div>
            );
        }

        else {
            return null;
        }
    }
};


export default MainInfo;
