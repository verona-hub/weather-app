import React, { useState } from 'react';
import { data } from './AirQualityData/AirQualityData';
import carbonMonoxideChecker from './AirQualityData/CarbonMonoxideData';

const AirQuality = ({ airQuality }) => {
    // Setting initial state: the air quality index box is set to be invisible
    const [indexInfoVisible, setIndexInfoVisible] = useState(false);

     /*
     + Remove this when refactor for data will be done!
     */
    // Destructuring from the AirQualityData.js component in Utility
    const { case1, case2, case3, case4, case5, case6, case7, case8, case9, case10, mix } = data;

    // Destructuring the fetched air quality data
    let { co, no2, o3, so2, pm2_5, pm10 } = airQuality;

    // Function to round the number down to the closest integer
    function floor (num) {
        return Math.floor(num);
    }

    // Each value is floored
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
    let bgCo = carbonMonoxideData.bgCo;
    let indexCo = carbonMonoxideData.indexCo;
    let textCoColor = carbonMonoxideData.textCoColor;


    /*
    + no2 = Nitrogen Dioxide
    */
    let bgNo2;
    let indexNo2;
    let textNo2Color;
    switch (true) {
        case no2 <= 67:
            bgNo2 = case1.color;
            indexNo2 = case1.index;
            break;
        case no2 <= 134:
            bgNo2 = case2.color;
            indexNo2 = case2.index;
            break;
        case no2 <= 200:
            bgNo2 = case3.color;
            indexNo2 = case3.index;
            break;
        case no2 <= 267:
            bgNo2 = case4.color;
            indexNo2 = case4.index;
            break;
        case no2 <= 334:
            bgNo2 = case5.color;
            indexNo2 = case5.index;
            break;
        case no2 <= 400:
            bgNo2 = case6.color;
            indexNo2 = case6.index;
            break;
        case no2 <= 467:
            bgNo2 = case7.color;
            indexNo2 = case7.index;
            textNo2Color = mix.white;
            break;
        case no2 <= 534:
            bgNo2 = case8.color;
            indexNo2 = case8.index;
            textNo2Color = mix.white;
            break;
        case no2 <= 600:
            bgNo2 = case9.color;
            indexNo2 = case9.index;
            break;
        case no2 > 600:
            bgNo2 = case10.color;
            indexNo2 = case10.index;
            textNo2Color = mix.white;
            break;
        default:
            break;
    }

    /*
     + o3 = Ozone
    */
    let bgO3;
    let indexO3;
    let textO3Color;
    switch (true) {
        case o3 <= 33:
            bgO3 = case1.color;
            indexO3 = case1.index;
            break;
        case o3 <= 66:
            bgO3 = case2.color;
            indexO3 = case2.index;
            break;
        case o3 <= 100:
            bgO3 = case3.color;
            indexO3 = case3.index;
            break;
        case o3 <= 120:
            bgO3 = case4.color;
            indexO3 = case4.index;
            break;
        case o3 <= 140:
            bgO3 = case5.color;
            indexO3 = case5.index;
            break;
        case o3 <= 160:
            bgO3 = case6.color;
            indexO3 = case6.index;
            break;
        case o3 <= 187:
            bgO3 = case7.color;
            indexO3 = case7.index;
            textO3Color = mix.white;
            break;
        case o3 <= 213:
            bgO3 = case8.color;
            indexO3 = case8.index;
            textO3Color = mix.white;
            break;
        case o3 <= 240:
            bgO3 = case9.color;
            indexO3 = case9.index;
            textO3Color = mix.white;
            break;
        case o3 > 240:
            bgO3 = case10.color;
            indexO3 = case10.index;
            textO3Color = mix.white;
            break;
        default:
            break;
    }

    /*
     + so2 = Sulphur dioxide
    */
    let bgSo2;
    let indexSo2;
    let textSo2Color;
    switch (true) {
        case so2 <= 88:
            bgSo2 = case1.color;
            indexSo2 = case1.index;
            break;
        case so2 <= 177:
            bgSo2 = case2.color;
            indexSo2 = case2.index;
            break;
        case so2 <= 266:
            bgSo2 = case3.color;
            indexSo2 = case3.index;
            break;
        case so2 <= 354:
            bgSo2 = case4.color;
            indexSo2 = case4.index;
            break;
        case so2 <= 443:
            bgSo2 = case5.color;
            indexSo2 = case5.index;
            break;
        case so2 <= 532:
            bgSo2 = case6.color;
            indexSo2 = case6.index;
            break;
        case so2 <= 710:
            bgSo2 = case7.color;
            indexSo2 = case7.index;
            textSo2Color = mix.white;
            break;
        case so2 <= 887:
            bgSo2 = case8.color;
            indexSo2 = case8.index;
            textSo2Color = mix.white;
            break;
        case so2 <= 1064:
            bgSo2 = case9.color;
            indexSo2 = case9.index;
            textSo2Color = mix.white;
            break;
        case so2 > 1064:
            bgSo2 = case10.color;
            indexSo2 = case10.index;
            textSo2Color = mix.white;
            break;
        default:
            break;
    }

    /*
     + pm2_5 = PM2.5
    */
    let bgPm2_5;
    let indexPm2_5;
    let textPm2_5Color;
    switch (true) {
        case pm2_5 <= 11:
            bgPm2_5 = case1.color;
            indexPm2_5 = case1.index;
            break;
        case pm2_5 <= 23:
            bgPm2_5 = case2.color;
            indexPm2_5 = case2.index;
            break;
        case pm2_5 <= 35:
            bgPm2_5 = case3.color;
            indexPm2_5 = case3.index;
            break;
        case pm2_5 <= 41:
            bgPm2_5 = case4.color;
            indexPm2_5 = case4.index;
            break;
        case pm2_5 <= 47:
            bgPm2_5 = case5.color;
            indexPm2_5 = case5.index;
            break;
        case pm2_5 <= 53:
            bgPm2_5 = case6.color;
            indexPm2_5 = case6.index;
            break;
        case pm2_5 <= 58:
            bgPm2_5 = case7.color;
            indexPm2_5 = case7.index;
            textPm2_5Color = mix.white;
            break;
        case pm2_5 <= 64:
            bgPm2_5 = case8.color;
            indexPm2_5 = case8.index;
            textPm2_5Color = mix.white;
            break;
        case pm2_5 <= 70:
            bgPm2_5 = case9.color;
            indexPm2_5 = case9.index;
            textPm2_5Color = mix.white;
            break;
        case pm2_5 > 70:
            bgPm2_5 = case10.color;
            indexPm2_5 = case10.index;
            textPm2_5Color = mix.white;
            break;
        default:
            break;
    }

    /*
     + pm10 = PM10
    */
    let bgPm10;
    let indexPm10;
    let textPm10Color;
    switch (true) {
        case pm10 <= 16:
            bgPm10 = case1.color;
            indexPm10 = case1.index;
            break;
        case pm10 <= 33:
            bgPm10 = case2.color;
            indexPm10 = case2.index;
            break;
        case pm10 <= 50:
            bgPm10 = case3.color;
            indexPm10 = case3.index;
            break;
        case pm10 <= 58:
            bgPm10 = case4.color;
            indexPm10 = case4.index;
            break;
        case pm10 <= 66:
            bgPm10 = case5.color;
            indexPm10 = case5.index;
            break;
        case pm10 <= 75:
            bgPm10 = case6.color;
            indexPm10 = case6.index;
            break;
        case pm10 <= 83:
            bgPm10 = case7.color;
            indexPm10 = case7.index;
            textPm10Color = mix.white;
            break;
        case pm10 <= 91:
            bgPm10 = case8.color;
            indexPm10 = case8.index;
            textPm10Color = mix.white;
            break;
        case pm10 <= 100:
            bgPm10 = case9.color;
            indexPm10 = case9.index;
            textPm10Color = mix.white;
            break;
        case pm10 > 100:
            bgPm10 = case10.color;
            indexPm10 = case10.index;
            textPm10Color = mix.white;
            break;
        default:
            break;
    }

    // Function to toggle the index box visibility
    const toggleIndexInfo = () => setIndexInfoVisible(!indexInfoVisible);


    return (
        <div className="AirQuality card">
            <h1 className="title">Air Quality</h1>
            <div className="main">
                <div className="box" style={ { backgroundColor: bgCo, color: textCoColor } }>
                    <span> Carbon Monoxide: </span>
                    <span> { indexCo } </span>
                    <span> { co } &#13197;/&#13221; </span>
                </div>
                <div className="box" style={ { backgroundColor: bgNo2, color: textNo2Color } }>
                    <span> Nitrogen Dioxide: </span>
                    <span> { indexNo2 } </span>
                    <span> { no2 } &#13197;/&#13221; </span>
                </div>
                <div className="box" style={ { backgroundColor: bgO3, color: textO3Color } }>
                    <span> Ozone: </span>
                    <span> { indexO3 } </span>
                    <span> { o3 } &#13197;/&#13221; </span>
                </div>
                <div className="box" style={ { backgroundColor: bgSo2, color: textSo2Color } }>
                    <span> Sulphur Dioxide: </span>
                    <span> { indexSo2 } </span>
                    <span> { so2 } &#13197;/&#13221; </span>
                </div>
                <div className="box" style={ { backgroundColor: bgPm2_5, color: textPm2_5Color } }>
                    <span> PM2.5 Particles: </span>
                    <span> { indexPm2_5 } </span>
                    <span> { pm2_5 } &#13197;/&#13221; </span>
                </div>
                <div className="box" style={ { backgroundColor: bgPm10, color: textPm10Color } }>
                    <span> PM10 Particles: </span>
                    <span> { indexPm10 } </span>
                    <span> { pm10 } &#13197;/&#13221; </span>
                </div>
            </div>

            <button onClick={ toggleIndexInfo } className="button_index">
                { indexInfoVisible ? 'Hide Air Quality Index' : 'Show Air Quality Index' }
            </button>

            {
                <div className={ indexInfoVisible ? "index_wrapper visible" : "index_wrapper hidden"} >
                    <h2 className="title"> Air Quality Index: </h2>
                    <div className="index_levels">
                        <div className="index_box">
                            <div className="item" style={ { backgroundColor: case1.color } }>{ case1.index } </div>
                            <div className="item-text"> { case1.level } </div>
                        </div>
                        <div className="index_box">
                            <div className="item" style={ { backgroundColor: case2.color } }> { case2.index } </div>
                            <div className="item_text"> { case2.level } </div>
                        </div>
                        <div className="index_box">
                            <div className="item" style={ { backgroundColor: case3.color } }> { case3.index } </div>
                            <div className="item_text"> { case3.level } </div>
                        </div>
                        <div className="index_box">
                            <div className="item" style={ { backgroundColor: case4.color } }> { case4.index } </div>
                            <div className="item_text"> { case4.level } </div>
                        </div>
                        <div className="index_box">
                            <div className="item" style={ { backgroundColor: case5.color } }> { case5.index } </div>
                            <div className="item_text"> { case5.level } </div>
                        </div>
                        <div className="index_box">
                            <div className="item" style={ { backgroundColor: case6.color } }> { case6.index } </div>
                            <div className="item_text"> { case6.level } </div>
                        </div>
                        <div className="index_box">
                            <div className="item" style={ { backgroundColor: case7.color } }> { case7.index } </div>
                            <div className="item_text"> { case7.level } </div>
                        </div>
                        <div className="index_box">
                            <div className="item" style={ { backgroundColor: case8.color } }> { case8.index } </div>
                            <div className="item_text"> { case8.level } </div>
                        </div>
                        <div className="index_box">
                            <div className="item" style={ { backgroundColor: case9.color } }> { case9.index } </div>
                            <div className="item_text">  { case9.level } </div>
                        </div>
                        <div className="index_box">
                            <div className="item" style={ { backgroundColor: case10.color } }> { case10.index } </div>
                            <div className="item_text"> { case10.level } </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}


export default AirQuality;