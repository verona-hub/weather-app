import React, { useState } from 'react';

// Air Quality Data
import { data } from './AirQualityData/AirQualityData';
import carbonMonoxideChecker from './AirQualityData/CarbonMonoxide';
import nitrogenDioxideChecker from './AirQualityData/NitrogenDioxide';
import ozoneChecker from './AirQualityData/Ozone';
import sulphurDioxideChecker from './AirQualityData/SulphurDioxide';
import pm2_5_Checker from './AirQualityData/Pm2_5';


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
    const bgCo = carbonMonoxideData.bgCo;
    const indexCo = carbonMonoxideData.indexCo;
    const textCoColor = carbonMonoxideData.textCoColor;

    /*
    + no2 = Nitrogen Dioxide
    */

    const nitrogenDioxideData = nitrogenDioxideChecker(no2);
    const bgNo2 = nitrogenDioxideData.bgNo2;
    const indexNo2 = nitrogenDioxideData.indexNo2;
    const textNo2Color = nitrogenDioxideData.textNo2Color;

    /*
     + o3 = Ozone
    */

    const ozoneData = ozoneChecker(o3);
    const bgO3 = ozoneData.bgO3;
    const indexO3 = ozoneData.indexO3;
    const textO3Color = ozoneData.textO3Color;

    /*
     + so2 = Sulphur dioxide
    */

    const sulphurDioxideData = sulphurDioxideChecker(so2);
    const bgSo2 = sulphurDioxideData.bgSo2;
    const indexSo2 = sulphurDioxideData.indexSo2;
    const textSo2Color = sulphurDioxideData.textSo2Color;

    /*
     + pm2_5 = PM2.5
    */

    const pm2_5_Data = pm2_5_Checker(pm2_5);
    const bgPm2_5 = pm2_5_Data.bgPm2_5;
    const indexPm2_5 = pm2_5_Data.indexPm2_5;
    const textPm2_5Color = pm2_5_Data.textPm2_5Color;

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