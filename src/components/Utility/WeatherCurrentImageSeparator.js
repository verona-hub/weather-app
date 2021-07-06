import React from 'react';


const WeatherCurrentImageSeparator = ({ weatherCondition }) => {
    const { text } = weatherCondition;
    console.log(text);

    const cloud = ['Cloudy', 'Partly cloudy'];
    const rain = ['Light rain', 'Patchy light rain', 'Moderate rain', 'Light rain shower'];
    const fogAndMist = ['Fog', 'Mist'];


    if (text === 'Sunny') return <div className="ImageSeparatorSunny"> </div>;
    if (text === 'Clear') return <div className="ImageSeparatorClear"> </div>;

    if (cloud.includes(text)) return <div className="ImageSeparatorPartlyCloudy"> </div>;
    if (text === 'Overcast') return <div className="ImageSeparatorCloudy"> </div>;

    if (rain.includes(text)) return <div className="ImageSeparatorRainy"> </div>;

    if (text === 'Moderate or heavy rain with thunder') return <div className="ImageSeparatorThunder"> </div>;
    if (fogAndMist.includes(text)) return <div className="ImageSeparatorFog"> </div>;

    else return <div className="ImageSeparator"> </div>;

};

export default WeatherCurrentImageSeparator;
