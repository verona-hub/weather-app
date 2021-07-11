import React from 'react';

import AirQualityElement from "./AirQualityElement";
import carbonMonoxideChecker from "./ElementsChecker/CarbonMonoxide";
import nitrogenDioxideChecker from "./ElementsChecker/NitrogenDioxide";
import ozoneChecker from "./ElementsChecker/Ozone";
import sulphurDioxideChecker from "./ElementsChecker/SulphurDioxide";
import pm2_5_Checker from "./ElementsChecker/Pm2_5";
import pm10_Checker from "./ElementsChecker/Pm10";


const AirQualityCollection = ({ airQuality }) => {

    // Destructuring the fetched air quality data
    let { co, no2, o3, so2, pm2_5, pm10 } = airQuality;

    // Function to round the number down to the closest integer
    function floor (num) {
        return Math.floor(num);
    }

    // Each value is floored downward to the closest integer
    co = floor(co);
    no2 = floor(no2);
    o3 = floor(o3);
    so2 = floor(so2);
    pm2_5 = floor(pm2_5);
    pm10 = floor(pm10);

    // All the fetched data is passed through a function that contains a switch to determine which category the data belongs to:
    // index level, background color, and text color
    /*
    + co = Carbon Monoxide
    */

    const carbonMonoxideData = carbonMonoxideChecker(co);
    const bgCo = carbonMonoxideData.bgCo;
    const indexCo = carbonMonoxideData.indexCo;
    const textCoColor = carbonMonoxideData.textCoColor;

    /*
    + no2 = Nitrogen Dioxide
    */

    const nitrogenDioxideData = nitrogenDioxideChecker(no2);
    const bgNo2 = nitrogenDioxideData.bgNo2;
    const indexNo2 = nitrogenDioxideData.indexNo2;
    const textNo2Color = nitrogenDioxideData.textNo2Color;

    /*
     + o3 = Ozone
    */

    const ozoneData = ozoneChecker(o3);
    const bgO3 = ozoneData.bgO3;
    const indexO3 = ozoneData.indexO3;
    const textO3Color = ozoneData.textO3Color;

    /*
     + so2 = Sulphur dioxide
    */

    const sulphurDioxideData = sulphurDioxideChecker(so2);
    const bgSo2 = sulphurDioxideData.bgSo2;
    const indexSo2 = sulphurDioxideData.indexSo2;
    const textSo2Color = sulphurDioxideData.textSo2Color;

    /*
     + pm2_5 = PM2.5
    */

    const pm2_5_Data = pm2_5_Checker(pm2_5);
    const bgPm2_5 = pm2_5_Data.bgPm2_5;
    const indexPm2_5 = pm2_5_Data.indexPm2_5;
    const textPm2_5Color = pm2_5_Data.textPm2_5Color;

    /*
     + pm10 = PM10
    */

    const pm10_Data = pm10_Checker(pm10);
    const bgPm10 = pm10_Data.bgPm10;
    const indexPm10 = pm10_Data.indexPm10;
    const textPm10Color = pm10_Data.textPm10Color;


    return (
        <div className="AirQualityCollection">
            <AirQualityElement
                backgroundColor={ bgCo }
                color={ textCoColor }
                name="Carbon Monoxide:"
                index={ indexCo }
                level={ co }
            />

            <AirQualityElement
                backgroundColor={ bgNo2 }
                color={ textNo2Color }
                name="Nitrogen Dioxide:"
                index={ indexNo2 }
                level={ no2 }
            />
            <AirQualityElement
                backgroundColor={ bgO3 }
                color={ textO3Color }
                name="Ozone:"
                index={ indexO3 }
                level={ o3  }
            />
            <AirQualityElement
                backgroundColor={ bgSo2 }
                color={ textSo2Color }
                name="Sulphur Dioxide:"
                index={ indexSo2 }
                level={ so2 }
            />
            <AirQualityElement
                backgroundColor={ bgPm2_5 }
                color={ textPm2_5Color }
                name="PM2.5 Particles:"
                index={ indexPm2_5 }
                level={ pm2_5 }
            />
            <AirQualityElement
                backgroundColor={ bgPm10 }
                color={ textPm10Color }
                name="PM10 Particles:"
                index={ indexPm10 }
                level={ pm10 }
            />

        </div>
    );
};

export default AirQualityCollection;
