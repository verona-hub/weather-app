import React from 'react';
import ForecastEveryThreeHours from "./ForecastEveryThreeHours";


const ForecastHourlyInfo = ({ hour }) => {

    return (
        <div className="ForecastHourlyInfo">
            <div className="main">

                <div className="sub_title">
                    <div className="item"> Time </div>
                    <div className="item"> Weather Forecast </div>
                    <div className="item center"> Temperature </div>
                </div>

                <ForecastEveryThreeHours
                    hour={ hour }
                />

            </div>
        </div>

    );
};


export default ForecastHourlyInfo;
