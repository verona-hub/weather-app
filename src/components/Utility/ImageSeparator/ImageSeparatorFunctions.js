import React from 'react';
// All possible weather forecast conditions fetched from Api
import { cloud, fogAndMist, rain, rainShower, sleet, snow, thunder, low, med, high, veryHigh } from "./ImageSeparatorData";
import carbonMonoxideChecker from '../../Page/Info/AirQualityData/ElementsChecker/CarbonMonoxide';


// Function that takes the text as a parameter and outputs the according picture
const imageSeparatorFunc = (text) => {

    if (text === 'Sunny') return <div className="ImageSeparator Sunny"> </div>;
    if (text === 'Clear') return <div className="ImageSeparator Clear"> </div>;
    if (cloud.includes(text)) return <div className="ImageSeparator Cloudy"> </div>;
    if (fogAndMist.includes(text)) return <div className="ImageSeparator FogAndMist"> </div>;
    if (rain.includes(text)) return <div className="ImageSeparator Rainy"> </div>;
    if (rainShower.includes(text)) return <div className="ImageSeparator Rain-Shower"> </div>;
    if (sleet.includes(text)) return <div className="ImageSeparator Sleet"> </div>;
    if (snow.includes(text)) return <div className="ImageSeparator Snow"> </div>;
    if (thunder.includes(text)) return <div className="ImageSeparator Thunder"> </div>;

    else return <div className="ImageSeparatorDefault"> </div>;
};


// Function that takes the fetched co (carbon monoxide) value as a parameter and outputs the according picture
const imageSeparatorAirQualityFunc = (co) => {
    // Function to round the number down to the closest integer
    function floor (num) {
        return Math.floor(num);
    }
    // The co value is floored downward to the closest integer
    co = floor(co);
    // The integer is then passed to the checker function and the coText value is extracted as a string
    const carbonMonoxideData = carbonMonoxideChecker(co);
    const coText = carbonMonoxideData.indexCo;

    // Check if the extracted string is included in the array and then displays the image
    if (low.includes(coText)) return <div className="ImageSeparator AirQuality-Low"> </div>;
    if (med.includes(coText)) return <div className="ImageSeparator AirQuality-Med"> </div>;
    if (high.includes(coText)) return <div className="ImageSeparator AirQuality-High"> </div>;
    if (veryHigh.includes(coText)) return <div className="ImageSeparator AirQuality-VeryHigh"> </div>;

    else return <div className="ImageSeparatorDefault"> </div>;
};


// Function that takes the fetched moon phase as a parameter and outputs the according picture
const imageSeparatorAstronomyFunc = (moon_phase) => {

    if (moon_phase === 'New Moon') return <div className="ImageSeparator Astronomy-NewMoon"> </div>;
    if (moon_phase === 'Waxing Crescent') return <div className="ImageSeparator Astronomy-WaxingCrescent"> </div>;
    if (moon_phase === 'First Quarter') return <div className="ImageSeparator Astronomy-FirstQuarter"> </div>;
    if (moon_phase === 'Waxing Gibbous') return <div className="ImageSeparator Astronomy-WaxingGibbous"> </div>;
    if (moon_phase === 'Full Moon') return <div className="ImageSeparator Astronomy-FullMoon"> </div>;
    if (moon_phase === 'Waning Gibbous') return <div className="ImageSeparator Astronomy-WaningGibbous"> </div>;
    if (moon_phase === 'Last Quarter') return <div className="ImageSeparator Astronomy-LastQuarter"> </div>;
    if (moon_phase === 'Waning Crescent') return <div className="ImageSeparator Astronomy-WaningCrescent"> </div>;

    else return <div className="ImageSeparatorDefault"> </div>;
};


export { imageSeparatorFunc, imageSeparatorAirQualityFunc, imageSeparatorAstronomyFunc };