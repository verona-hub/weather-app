import React from 'react';
import ForecastEveryThreeHours from "./ForecastEveryThreeHours";


// Hourly forecast component
const ForecastHourlyInfo = ({ hour }) => {

    return (
        <div className="ForecastHourlyInfo">
            <div className="main">

                <div className="sub_title">
                    <div className="item"> Time </div>
                    <div className="item"> Weather Forecast </div>
                    <div className="item center"> Temperature </div>
                </div>

                {/* Display weather data for every 3 hours */}
                <ForecastEveryThreeHours
                    hour={ hour }
                />

            </div>
        </div>

    );
};


export default ForecastHourlyInfo;
