import React from 'react';


const AirQuality = ({ airQuality }) => {

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
    let low2 = '#66cb55';
    let low3 = '#5a9f4f';
    let mod4 = '#fbfb66';
    let mod5 = '#ffcf00';
    let mod6 = '#ff9a00';
    let high7 = '#ff6464';
    let high8 = '#e63d3d';
    let high9 = 'red';
    let veryHigh10 = '#191818';
     veryHigh10 = '#700b88';


    /*
    + co = Carbon Monoxide
    */
    let bgCo;
    let textCo;
    let textCoColor;
    switch (true) {
        case co <= 10:
            bgCo = low1;
            textCo = 'Index 1 - (Low)';
            break;
        case co <= 25:
            bgCo = low2;
            textCo = 'Index 2 - (Low)';
            break;
        case co <= 50:
            bgCo = low3;
            textCo = 'Index 3 - (Low)';
            break;
        case co <= 200:
            bgCo = mod4;
            textCo = 'Index 4 - (Moderate)';
            break;
        case co <= 400:
            bgCo = mod5;
            textCo = 'Index 5 - (Moderate)';
            break;
        case co <= 600:
            bgCo = mod6;
            textCo = 'Index 6 - (Moderate)';
            break;
        case co <= 800:
            bgCo = high7;
            textCo = 'Index 7 - (High)';
            break;
        case co <= 1200:
            bgCo = high8;
            textCo = 'Index 8 - (High)';
            break;
        case co <= 1600:
            bgCo = high9;
            textCo = 'Index 9 - (High)';
            break;
        case co > 1600:
            bgCo = veryHigh10;
            textCo = 'Index 10 - (Very High)';
            textCoColor = 'white';
            break;
        default:
            break;
    }

    /*
    + no2 = Nitrogen Dioxide
    */
    let bgNo2;
    let textNo2;
    let textNo2Color;
    switch (true) {
        case no2 <= 67:
            bgNo2 = low1;
            textNo2 = 'Index 1 - (Low)';
            break;
        case no2 <= 134:
            bgNo2 = low2;
            textNo2 = 'Index 2 - (Low)';
            break;
        case no2 <= 200:
            bgNo2 = low3;
            textNo2 = 'Index 3 - (Low)';
            break;
        case no2 <= 267:
            bgNo2 = mod4;
            textNo2 = 'Index 4 - (Moderate)';
            break;
        case no2 <= 334:
            bgNo2 = mod5;
            textNo2 = 'Index 5 - (Moderate)';
            break;
        case no2 <= 400:
            bgNo2 = mod6;
            textNo2 = 'Index 6 - (Moderate)';
            break;
        case no2 <= 467:
            bgNo2 = high7;
            textNo2 = 'Index 7 - (High)';
            break;
        case no2 <= 534:
            bgNo2 = high8;
            textNo2 = 'Index 8 - (High)';
            break;
        case no2 <= 600:
            bgNo2 = high9;
            textNo2 = 'Index 9 - (High)';
            break;
        case no2 > 600:
            bgNo2 = veryHigh10;
            textNo2 = 'Index 10 - (Very High)';
            textNo2Color = 'white';
            break;
        default:
            break;
    }

    /*
     + o3 = Ozone
    */
    let bgO3;
    let textO3;
    let textO3Color;
    switch (true) {
        case o3 <= 33:
            bgO3 = low1;
            textO3 = 'Index 1 - (Low)';
            break;
        case o3 <= 66:
            bgO3 = low2;
            textO3 = 'Index 2 - (Low)';
            break;
        case o3 <= 100:
            bgO3 = low3;
            textO3 = 'Index 3 - (Low)';
            break;
        case o3 <= 120:
            bgO3 = mod4;
            textO3 = 'Index 4 - (Moderate)';
            break;
        case o3 <= 140:
            bgO3 = mod5;
            textO3 = 'Index 5 - (Moderate)';
            break;
        case o3 <= 160:
            bgO3 = mod6;
            textO3 = 'Index 6 - (Moderate)';
            break;
        case o3 <= 187:
            bgO3 = high7;
            textO3 = 'Index 7 - (High)';
            break;
        case o3 <= 213:
            bgO3 = high8;
            textO3 = 'Index 8 - (High)';
            break;
        case o3 <= 240:
            bgO3 = high9;
            textO3 = 'Index 9 - (High)';
            break;
        case o3 > 240:
            bgO3 = veryHigh10;
            textO3 = 'Index 10 - (Very High)';
            textO3Color = 'white';
            break;
        default:
            break;
    }

    /*
     + so2 = Sulphur dioxide
    */
    let bgSo2;
    let textSo2;
    let textSo2Color;
    switch (true) {
        case so2 <= 88:
            bgSo2 = low1;
            textSo2 = 'Index 1 - (Low)';
            break;
        case so2 <= 177:
            bgSo2 = low2;
            textSo2 = 'Index 2 - (Low)';
            break;
        case so2 <= 266:
            bgSo2 = low3;
            textSo2 = 'Index 3 - (Low)';
            break;
        case so2 <= 354:
            bgSo2 = mod4;
            textSo2 = 'Index 4 - (Moderate)';
            break;
        case so2 <= 443:
            bgSo2 = mod5;
            textSo2 = 'Index 5 - (Moderate)';
            break;
        case so2 <= 532:
            bgSo2 = mod6;
            textSo2 = 'Index 6 - (Moderate)';
            break;
        case so2 <= 710:
            bgSo2 = high7;
            textSo2 = 'Index 7 - (High)';
            break;
        case so2 <= 887:
            bgSo2 = high8;
            textSo2 = 'Index 8 - (High)';
            break;
        case so2 <= 1064:
            bgSo2 = high9;
            textSo2 = 'Index 9 - (High)';
            break;
        case so2 > 1064:
            bgSo2 = veryHigh10;
            textSo2 = 'Index 10 - (Very High)';
            textSo2Color = 'white';
            break;
        default:
            break;
    }

    /*
     + pm2_5 = PM2.5
    */
    let bgPm2_5;
    let textPm2_5;
    let textPm2_5Color;
    switch (true) {
        case pm2_5 <= 11:
            bgPm2_5 = low1;
            textPm2_5 = 'Index 1 - (Low)';
            break;
        case pm2_5 <= 23:
            bgPm2_5 = low2;
            textPm2_5 = 'Index 2 - (Low)';
            break;
        case pm2_5 <= 35:
            bgPm2_5 = low3;
            textPm2_5 = 'Index 3 - (Low)';
            break;
        case pm2_5 <= 41:
            bgPm2_5 = mod4;
            textPm2_5 = 'Index 4 - (Moderate)';
            break;
        case pm2_5 <= 47:
            bgPm2_5 = mod5;
            textPm2_5 = 'Index 5 - (Moderate)';
            break;
        case pm2_5 <= 53:
            bgPm2_5 = mod6;
            textPm2_5 = 'Index 6 - (Moderate)';
            break;
        case pm2_5 <= 58:
            bgPm2_5 = high7;
            textPm2_5 = 'Index 7 - (High)';
            break;
        case pm2_5 <= 64:
            bgPm2_5 = high8;
            textPm2_5 = 'Index 8 - (High)';
            break;
        case pm2_5 <= 70:
            bgPm2_5 = high9;
            textPm2_5 = 'Index 9 - (High)';
            break;
        case pm2_5 > 70:
            bgPm2_5 = veryHigh10;
            textPm2_5 = 'Index 10 - (Very High)';
            textPm2_5Color = 'white';
            break;
        default:
            break;
    }

    /*
     + pm10 = PM10
    */
    let bgPm10;
    let textPm10;
    let textPm10Color;
    switch (true) {
        case pm10 <= 16:
            bgPm10 = low1;
            textPm10 = 'Index 1 - (Low)';
            break;
        case pm10 <= 33:
            bgPm10 = low2;
            textPm10 = 'Index 2 - (Low)';
            break;
        case pm10 <= 50:
            bgPm10 = low3;
            textPm10 = 'Index 3 - (Low)';
            break;
        case pm10 <= 58:
            bgPm10 = mod4;
            textPm10 = 'Index 4 - (Moderate)';
            break;
        case pm10 <= 66:
            bgPm10 = mod5;
            textPm10 = 'Index 5 - (Moderate)';
            break;
        case pm10 <= 75:
            bgPm10 = mod6;
            textPm10 = 'Index 6 - (Moderate)';
            break;
        case pm10 <= 83:
            bgPm10 = high7;
            textPm10 = 'Index 7 - (High)';
            break;
        case pm10 <= 91:
            bgPm10 = high8;
            textPm10 = 'Index 8 - (High)';
            break;
        case pm10 <= 100:
            bgPm10 = high9;
            textPm10 = 'Index 9 - (High)';
            break;
        case pm10 > 100:
            bgPm10 = veryHigh10;
            textPm10 = 'Index 10 - (Very High)';
            textPm10Color = 'white';
            break;
        default:
            break;
    }


    return (
        <div className="AirQuality card">
            <h2 className="title">Air Quality</h2>
            <div className="main">
                <div className="box" style={{ backgroundColor: bgCo, color: textCoColor  }}>
                    <span> Carbon Monoxide:</span>
                    <span>{ textCo }</span>
                    <span> { co } &#13197;/&#13221; </span>
                </div>
                <div className="box" style={{ backgroundColor: bgNo2, color: textNo2Color  }}>
                    <span> Nitrogen Dioxide: </span>
                    <span> { textNo2 } </span>
                    <span> { no2 } &#13197;/&#13221; </span>
                </div>
                <div className="box" style={{ backgroundColor: bgO3, color: textO3Color  }}>
                    <span> Ozone: </span>
                    <span> { textO3 } </span>
                    <span> { o3 } &#13197;/&#13221; </span>
                </div>
                <div className="box" style={{ backgroundColor: bgSo2, color: textSo2Color  }}>
                    <span> Sulphur Dioxide: </span>
                    <span> { textSo2 } </span>
                    <span> { so2 } &#13197;/&#13221; </span>
                </div>
                <div className="box" style={{ backgroundColor: bgPm2_5, color: textPm2_5Color }}>
                    <span> PM2.5 Particles: </span>
                    <span> { textPm2_5 } </span>
                    <span> { pm2_5 } &#13197;/&#13221; </span>
                </div>
                <div className="box" style={{ backgroundColor: bgPm10, color: textPm10Color  }}>
                    <span> PM10 Particles: </span>
                    <span> { textPm10 } </span>
                    <span> { pm10 } &#13197;/&#13221; </span>
                </div>
            </div>
        </div>
    );
};



export default AirQuality;
