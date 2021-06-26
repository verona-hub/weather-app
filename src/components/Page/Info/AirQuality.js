import React  from 'react';

// Air Quality Data and checker functions
import AirQualityCollection from "./AirQualityData/AirQualityCollection";
import AirQualityIndex from "./AirQualityData/AirQualityIndex";


const AirQuality = ({ airQuality }) => {

    return (
        <div className="AirQuality card">
            <h1> Refactor in progress... </h1>
            <h1 className="title"> Air Quality </h1>

            <div className="main">
                <AirQualityCollection
                    airQuality={ airQuality }
                />
            </div>

            <AirQualityIndex />
        </div>
    );
};

export default AirQuality;
