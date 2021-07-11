import React from 'react';
// All possible weather forecast conditions fetched from Api
import { cloud, fogAndMist, rain, rainShower, sleet, snow, thunder } from "./ImageSeparatorData";


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

export default imageSeparatorFunc;