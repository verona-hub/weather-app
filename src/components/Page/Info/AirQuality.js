import React, { useState } from 'react';

// Components
import AirQualityCollection from "./AirQualityData/AirQualityCollection";
import AirQualityIndex from "./AirQualityData/AirQualityIndex";


const AirQuality = ({ airQuality, darkMode }) => {

    // Setting initial state: the air quality index box is set to be invisible
    const [indexInfoVisible, setIndexInfoVisible] = useState(false);

    // Function to toggle the index box visibility
    const toggleIndexInfo = () => setIndexInfoVisible(!indexInfoVisible);

    const titleDark = darkMode && 'title_dark';
    const title = `title ${titleDark}`;
    const indexButton = darkMode ? 'button_index_dark' : "button_index";
    const infoVisibility = indexInfoVisible ? 'Hide Air Quality Index' : 'Show Air Quality Index';

    return (
        <div className="AirQuality_wrapper">
            <div className="AirQuality card">
                <h1 className={ title }> Air Quality </h1>

                <div className="main">
                    <AirQualityCollection
                        airQuality={ airQuality }
                        darkMode={ darkMode }
                    />

                    <button onClick={ toggleIndexInfo } className={ indexButton }>
                        { infoVisibility }
                    </button>

                    <AirQualityIndex
                        indexInfoVisible={ indexInfoVisible }
                        darkMode={ darkMode }
                    />
                </div>
            </div>
        </div>
    );
};

export default AirQuality;
