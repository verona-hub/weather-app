import React from 'react';
// All possible weather forecast conditions fetched from Api
import { cloud, fogAndMist, rain, rainShower, sleet, snow, thunder, low, med, high, veryHigh } from "./ImageSeparatorData";
import carbonMonoxideChecker from '../../Page/Info/AirQualityData/ElementsChecker/CarbonMonoxide';


// Function that takes the text as parameter and outputs the according picture
const imageSeparatorFunc = (text) => {

    if (text === 'Sunny') return <div className="ImageSeparatorSunny"> </div>;
    if (text === 'Clear') return <div className="ImageSeparatorClear"> </div>;
    if (cloud.includes(text)) return <div className="ImageSeparatorCloudy"> </div>;
    if (fogAndMist.includes(text)) return <div className="ImageSeparatorFogAndMist"> </div>;
    if (rain.includes(text)) return <div className="ImageSeparatorRainy"> </div>;
    if (rainShower.includes(text)) return <div className="ImageSeparatorRainShower"> </div>;
    if (sleet.includes(text)) return <div className="ImageSeparatorSleet"> </div>;
    if (snow.includes(text)) return <div className="ImageSeparatorSnow"> </div>;
    if (thunder.includes(text)) return <div className="ImageSeparatorThunder"> </div>;

    else return <div className="ImageSeparator"> </div>;
};




const imageSeparatorAirQualityFunc = (co) => {
    // Function to round the number down to the closest integer
    function floor (num) {
        return Math.floor(num);
    }
    // Each value is floored downward to the closest integer
    co = floor(co);

    const carbonMonoxideData = carbonMonoxideChecker(co);
    const coText = carbonMonoxideData.indexCo;

    if (low.includes(coText)) return <div className="ImageSeparatorAirQualityLow"> </div>;
    if (med.includes(coText)) return <div className="ImageSeparatorAirQualityMed"> </div>;
    if (high.includes(coText)) return <div className="ImageSeparatorAirQualityHigh"> </div>;
    if (veryHigh.includes(coText)) return <div className="ImageSeparatorAirQualityVeryHigh"> </div>;
    else return <div className="ImageSeparator"> </div>;


}

export { imageSeparatorFunc, imageSeparatorAirQualityFunc };