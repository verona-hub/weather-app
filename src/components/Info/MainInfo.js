import React from 'react';

// Modules
import * as _ from 'underscore';
import Moment from 'react-moment';

// Components
import CityInfo from "./CityInfo";
import Spinner from "../Spinner";
import WeatherInfo from "./WeatherInfo";


const MainInfo = ({ spinner, cityInfoProp, weatherInfoProp, weatherInfoCondition }) => {
    const { name, country } = cityInfoProp;


    if (spinner) {
        return <Spinner />
    }

    else {
        if (_.size(cityInfoProp) > 0 || _.size(weatherInfoProp) > 0) {
            return (
                <div>
                    <div className="MainInfo-header">
                        <h2> Weather conditions: { name }, { country } </h2>
                        <Moment format="dddd, DD MMMM YYYY" local>
                        </Moment>
                        <p> Current time: </p>
                        <Moment interval={ 1000 } format="HH:mm:ss" local>
                        </Moment>
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