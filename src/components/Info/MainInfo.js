import React from 'react';
import * as _ from 'underscore';
import CityInfo from "./CityInfo";
import Spinner from "../Spinner";
import WeatherInfo from "./WeatherInfo";


const MainInfo = ({ spinner, cityInfoProp, weatherInfoProp, weatherInfoCondition }) => {

    if (spinner) {
        return <Spinner />
    }

    else {
        if (_.size(cityInfoProp) > 0 || _.size(weatherInfoProp) > 0) {
            return (
                <div className="grid-2">
                    <CityInfo
                        cityInfoProp={cityInfoProp}
                    />
                    <WeatherInfo
                        weatherInfoProp={weatherInfoProp}
                        weatherInfoCondition={weatherInfoCondition}
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
