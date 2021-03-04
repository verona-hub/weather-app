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

    let low1 = '#9cff9c';
    let low2 = '#31ff00';
    let low3 = '#31cf00';
    let med4 = '#ff0';
    let med5 = '#ffcf00';
    let med6 = '#ff9a00';
    let high7 = '#ff6464';
    let high8 = 'red';
    let high9 = '#900';
    let veryHigh10 = '#ce30ff';


    /*
    + co = Carbon Monoxide
    */
    let bgCo;
    switch (true) {
        case co <= 10:
            bgCo = low1;
            break;
        case co <= 25:
            bgCo = low2;
            break;
        case co <= 50:
            bgCo = low3;
            break;
        case co <= 200:
            bgCo = med4;
            break;
        case co <= 400:
            bgCo = med5;
            break;
        case co <= 600:
            bgCo = med6;
            break;
        case co <= 800:
            bgCo = high7;
            break;
        case co <= 1200:
            bgCo = high8;
            break;
        case co <= 1600:
            bgCo = high9;
            break;
        case co > 1600:
            bgCo = veryHigh10;
            break;
        default:
            break;
    }

    /*
    + no2 = Nitrogen Dioxide
    */
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

    /*
     + o3 = Ozone
    */
    let bgO3;
    switch (true) {
        case o3 <= 33:
            bgO3 = low1;
            break;
        case o3 <= 66:
            bgO3 = low2;
            break;
        case o3 <= 100:
            bgO3 = low3;
            break;
        case o3 <= 120:
            bgO3 = med4;
            break;
        case o3 <= 140:
            bgO3 = med5;
            break;
        case o3 <= 160:
            bgO3 = med6;
            break;
        case o3 <= 187:
            bgO3 = high7;
            break;
        case o3 <= 213:
            bgO3 = high8;
            break;
        case o3 <= 240:
            bgO3 = high9;
            break;
        case o3 > 240:
            bgO3 = veryHigh10;
            break;
        default:
            break;
    }

    /*
     + so2 = Sulphur dioxide
    */
    let bgSo2;
    switch (true) {
        case so2 <= 88:
            bgSo2 = low1;
            break;
        case so2 <= 177:
            bgSo2 = low2;
            break;
        case so2 <= 266:
            bgSo2 = low3;
            break;
        case so2 <= 354:
            bgSo2 = med4;
            break;
        case so2 <= 443:
            bgSo2 = med5;
            break;
        case so2 <= 532:
            bgSo2 = med6;
            break;
        case so2 <= 710:
            bgSo2 = high7;
            break;
        case so2 <= 887:
            bgSo2 = high8;
            break;
        case so2 <= 1064:
            bgSo2 = high9;
            break;
        case so2 > 1064:
            bgSo2 = veryHigh10;
            break;
        default:
            break;
    }

    /*
     + pm2_5 = PM2.5
    */
    let bgPm2_5;
    switch (true) {
        case pm2_5 <= 11:
            bgPm2_5 = low1;
            break;
        case pm2_5 <= 23:
            bgPm2_5 = low2;
            break;
        case pm2_5 <= 35:
            bgPm2_5 = low3;
            break;
        case pm2_5 <= 41:
            bgPm2_5 = med4;
            break;
        case pm2_5 <= 47:
            bgPm2_5 = med5;
            break;
        case pm2_5 <= 53:
            bgPm2_5 = med6;
            break;
        case pm2_5 <= 58:
            bgPm2_5 = high7;
            break;
        case pm2_5 <= 64:
            bgPm2_5 = high8;
            break;
        case pm2_5 <= 70:
            bgPm2_5 = high9;
            break;
        case pm2_5 > 70:
            bgPm2_5 = veryHigh10;
            break;
        default:
            break;
    }

    /*
     + pm10 = PM10
    */
    let bgPm10;
    switch (true) {
        case pm10 <= 16:
            bgPm10 = low1;
            break;
        case pm10 <= 33:
            bgPm10 = low2;
            break;
        case pm10 <= 50:
            bgPm10 = low3;
            break;
        case pm10 <= 58:
            bgPm10 = med4;
            break;
        case pm10 <= 66:
            bgPm10 = med5;
            break;
        case pm10 <= 75:
            bgPm10 = med6;
            break;
        case pm10 <= 83:
            bgPm10 = high7;
            break;
        case pm10 <= 91:
            bgPm10 = high8;
            break;
        case pm10 <= 100:
            bgPm10 = high9;
            break;
        case pm10 > 100:
            bgPm10 = veryHigh10;
            break;
        default:
            break;
    }


    return (
        <div className="AirQualityInfo card">
            <h2 className="title">Air Quality</h2>
            <div className="main">
                <div className="spaced value" style={{ backgroundColor: bgCo }}>
                    <span> Carbon Monoxide:</span>
                    <span> { co } &#13197;/&#13221; </span>
                </div>
                <div className="spaced value" style={{ backgroundColor: bgNo2 }}>
                    <span> Nitrogen Dioxide: </span>
                    { no2 } &#13197;/&#13221;
                </div>
                <div className="spaced value" style={{ backgroundColor: bgO3 }}>
                    <span> Ozone: </span>
                    { o3 } &#13197;/&#13221;
                </div>
                <div className="spaced value" style={{ backgroundColor: bgSo2 }}>
                    <span> Sulphur Dioxide: </span>
                    { so2 } &#13197;/&#13221;
                </div>
                <div className="spaced value" style={{ backgroundColor: bgPm2_5 }}>
                    <span> PM2.5 Particles: </span>
                    { pm2_5 } &#13197;/&#13221;
                </div>
                <div className="spaced value" style={{ backgroundColor: bgPm10 }}>
                    <span> PM10 Particles: </span>
                    { pm10 } &#13197;/&#13221;
                </div>
            </div>
        </div>
    );
};



export default AirQualityInfo;
