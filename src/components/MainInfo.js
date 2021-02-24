import React from 'react';
import * as _ from 'underscore';
import CityInfo from "./CityInfo";
import Spinner from "./Spinner";
import WeatherInfo from "./WeatherInfo";


const MainInfo = (props) => {

    if (props.spinner) {
        return <Spinner />
    }

    else {
        if (_.size(props.cityInfoProp) > 0 || _.size(props.weatherInfoProp) > 0) {
            return (
                <div className="grid-2">
                    <CityInfo
                        cityInfoProp={props.cityInfoProp}
                    />
                    <WeatherInfo
                        weatherInfoProp={props.weatherInfoProp}
                        weatherInfoCondition={props.weatherInfoCondition}
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
