import React from 'react';


const AirQualityInfo = ({ airQuality }) => {

    let { co, no2, o3, so2, pm2_5, pm10 } = airQuality;

    function floor(num) {
        return Math.floor(num);
    }

     co = floor(co);
     no2 = floor(no2);
     o3 = floor(o3);
     so2 = floor(so2);
     pm2_5 = floor(pm2_5);
     pm10 = floor(pm10);

    return (
        <div className="AirQualityInfo card">
            <h2 className="title">Air Quality</h2>
            <div className="main">
                <div className="spaced"><span> Carbon Monoxide: </span> { co } &#13197;/&#13221; </div>
                <div className="spaced"><span> Nitrogen Dioxide: </span> { no2 } &#13197;/&#13221; </div>
                <div className="spaced"><span> Ozone: </span> { o3 } &#13197;/&#13221; </div>
                <div className="spaced"><span> Sulphur Dioxide: </span> { so2 } &#13197;/&#13221; </div>
                <div className="spaced"><span> PM2.5 Particles: </span> { pm2_5 } &#13197;/&#13221; </div>
                <div className="spaced"><span> PM10 Particles: </span> { pm10 } &#13197;/&#13221; </div>
            </div>
        </div>
    );
};



export default AirQualityInfo;
