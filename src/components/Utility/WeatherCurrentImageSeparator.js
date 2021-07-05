import React from 'react';


const WeatherCurrentImageSeparator = ({ weatherCondition }) => {
    const { text } = weatherCondition;
    console.log(text);

    if (text === 'Sunny') return <div className="ImageSeparatorSunny"> </div>;
    if (text === 'Partly cloudy') return <div className="ImageSeparatorPartlyCloudy"> </div>;
    if (text === 'Overcast') return <div className="ImageSeparatorCloudy"> </div>;
    if (text === 'Moderate or heavy rain with thunder') return <div className="ImageSeparatorThunder"> </div>;
    else return <div className="ImageSeparator"> </div>;
};

export default WeatherCurrentImageSeparator;
