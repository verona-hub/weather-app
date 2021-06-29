import React, { useState } from 'react';

// Components
import AirQualityCollection from "./AirQualityData/AirQualityCollection";
import AirQualityIndex from "./AirQualityData/AirQualityIndex";


const AirQuality = ({ airQuality }) => {

    // Setting initial state: the air quality index box is set to be invisible
    const [indexInfoVisible, setIndexInfoVisible] = useState(false);

    // Function to toggle the index box visibility
    const toggleIndexInfo = () => setIndexInfoVisible(!indexInfoVisible);

    return (
        <div className="AirQuality card">
            <h1> Refactor in progress... </h1>
            <h1 className="title"> Air Quality </h1>

            <div className="main">
                <AirQualityCollection
                    airQuality={ airQuality }
                />

                <button onClick={ toggleIndexInfo } className="button_index">
                    { indexInfoVisible ? 'Hide Air Quality Index' : 'Show Air Quality Index' }
                </button>

                <AirQualityIndex
                    indexInfoVisible={ indexInfoVisible }
                />

            </div>
        </div>
    );
};

export default AirQuality;
