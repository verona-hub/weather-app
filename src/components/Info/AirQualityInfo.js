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

    console.log(no2);

    let low1 = '#9cff9c';
    let low2 = '#31ff00;';
    let low3 = '#31cf00';
    let med4 = '#ff0';
    let med5 = '#ffcf00';
    let med6 = '#ff9a00';
    let high7 = '#ff6464';
    let high8 = 'red';
    let high9 = '#900';
    let veryHigh10 = '#ce30ff';


    let bgNo2;
    switch (true) {
        case no2 <= 67:
            bgNo2 = low1;
            break;
        case no2 <= 134:
            bgNo2 = low2;
            break;
        case no2 <= 200:
            bgNo2 = low3;
            break;
        case no2 <= 267:
            bgNo2 = med4;
            break;
        case no2 <= 334:
            bgNo2 = med5;
            break;
        case no2 <= 400:
            bgNo2 = med6;
            break;
        case no2 <= 467:
            bgNo2 = high7;
            break;
        case no2 <= 534:
            bgNo2 = high8;
            break;
        case no2 <= 600:
            bgNo2 = high9;
            break;
        case no2 > 600:
            bgNo2 = veryHigh10;
            break;
        default:
            break;
    }

    return (
        <div className="AirQualityInfo card">
            <h2 className="title">Air Quality</h2>
            <div className="main">
                <div className="spaced">
                    <span> Carbon Monoxide:</span>
                    <span> { co } &#13197;/&#13221; </span>
                </div>
                <div className="spaced value" style={{ backgroundColor: bgNo2 }}>
                    <span> Nitrogen Dioxide: </span>
                    { no2 } &#13197;/&#13221;
                </div>
                <div className="spaced">
                    <span> Ozone: </span>
                    { o3 } &#13197;/&#13221;
                </div>
                <div className="spaced">
                    <span> Sulphur Dioxide: </span>
                    { so2 } &#13197;/&#13221;
                </div>
                <div className="spaced">
                    <span> PM2.5 Particles: </span>
                    { pm2_5 } &#13197;/&#13221;
                </div>
                <div className="spaced">
                    <span> PM10 Particles: </span>
                    { pm10 } &#13197;/&#13221;
                </div>
            </div>
        </div>
    );
};



export default AirQualityInfo;
