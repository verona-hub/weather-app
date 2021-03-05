import React, { Component } from 'react';


class AirQuality extends Component {

    state = {
        isVisible: false
    }

    colors = {
        low1: '#9cff9c',
        low2: '#66cb55',
        low3: '#5a9f4f',
        mod4: '#fbfb66',
        mod5: '#ffcf00',
        mod6: '#ff9a00',
        high7: '#ff6464',
        high8: '#d85454',
        high9: '#e63d3d',
        veryHigh10: 'red',
        white: '#fff'
    }

    text = {
        index1: 'Index 1',
        index2: 'Index 2',
        index3: 'Index 3',
        index4: 'Index 4',
        index5: 'Index 5',
        index6: 'Index 6',
        index7: 'Index 7',
        index8: 'Index 8',
        index9: 'Index 9',
        index10: 'Index 10'
    }

    index = {
        1: {
            text: 'Index 1',
            color: '#9cff9c'
        }
    }

    render () {

        const { colors } = this;
        const { isVisible } = this.state;
        let { co, no2, o3, so2, pm2_5, pm10 } = this.props.airQuality;

        function floor(num) {
            return Math.floor(num);
        }
        co = floor(co);
        no2 = floor(no2);
        o3 = floor(o3);
        so2 = floor(so2);
        pm2_5 = floor(pm2_5);
        pm10 = floor(pm10);

        let textIndex1 = 'Index 1';
        let textIndex2 = 'Index 2';
        let textIndex3 = 'Index 3';
        let textIndex4 = 'Index 4';
        let textIndex5 = 'Index 5';
        let textIndex6 = 'Index 6';
        let textIndex7 = 'Index 7';
        let textIndex8 = 'Index 8';
        let textIndex9 = 'Index 9';
        let textIndex10 = 'Index 10';

        let textLow = 'Low';
        let textModerate = 'Moderate';
        let textHigh = 'High';
        let textVeryHigh = 'Very High';

        /*
        + co = Carbon Monoxide
        */
        let bgCo;
        let textCo;
        let textCoColor;
        switch (true) {
            case co <= 10:
                bgCo = colors.low1;
                textCo = textIndex1;
                break;
            case co <= 25:
                bgCo = colors.low2;
                textCo = textIndex2;
                break;
            case co <= 50:
                bgCo = colors.low3;
                textCo = textIndex3;
                break;
            case co <= 200:
                bgCo = colors.mod4;
                textCo = textIndex4;
                break;
            case co <= 400:
                bgCo = colors.mod5;
                textCo = textIndex5;
                break;
            case co <= 600:
                bgCo = colors.mod6;
                textCo = textIndex6;
                break;
            case co <= 800:
                bgCo = colors.high7;
                textCo = textIndex7;
                textCoColor = colors.white;
                break;
            case co <= 1200:
                bgCo = colors.high8;
                textCo = textIndex8;
                textCoColor = colors.white;
                break;
            case co <= 1600:
                bgCo = colors.high9;
                textCo = textIndex9;
                textCoColor = colors.white;
                break;
            case co > 1600:
                bgCo = colors.veryHigh10;
                textCo = textIndex10;
                textCoColor = colors.white;
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
                bgNo2 = colors.low1;
                textNo2 = textIndex1;
                break;
            case no2 <= 134:
                bgNo2 = colors.low2;
                textNo2 = textIndex2;
                break;
            case no2 <= 200:
                bgNo2 = colors.low3;
                textNo2 = textIndex3;
                break;
            case no2 <= 267:
                bgNo2 = colors.mod4;
                textNo2 = textIndex4;
                break;
            case no2 <= 334:
                bgNo2 = colors.mod5;
                textNo2 = textIndex5;
                break;
            case no2 <= 400:
                bgNo2 = colors.mod6;
                textNo2 = textIndex6;
                break;
            case no2 <= 467:
                bgNo2 = colors.high7;
                textNo2 = textIndex7;
                textNo2Color = colors.white;
                break;
            case no2 <= 534:
                bgNo2 = colors.high8;
                textNo2 = textIndex8;
                textNo2Color = colors.white;
                break;
            case no2 <= 600:
                bgNo2 = colors.high9;
                textNo2 = textIndex9;
                textNo2Color = colors.white;
                break;
            case no2 > 600:
                bgNo2 = colors.veryHigh10;
                textNo2 = textIndex10;
                textNo2Color = colors.white;
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
                bgO3 = colors.low1;
                textO3 = textIndex1;
                break;
            case o3 <= 66:
                bgO3 = colors.low2;
                textO3 = textIndex2;
                break;
            case o3 <= 100:
                bgO3 = colors.low3;
                textO3 = textIndex3;
                break;
            case o3 <= 120:
                bgO3 = colors.mod4;
                textO3 = textIndex4;
                break;
            case o3 <= 140:
                bgO3 = colors.mod5;
                textO3 = textIndex5;
                break;
            case o3 <= 160:
                bgO3 = colors.mod6;
                textO3 = textIndex6;
                break;
            case o3 <= 187:
                bgO3 = colors.high7;
                textO3 = textIndex7;
                textO3Color = colors.white;
                break;
            case o3 <= 213:
                bgO3 = colors.high8;
                textO3 = textIndex8;
                textO3Color = colors.white;
                break;
            case o3 <= 240:
                bgO3 = colors.high9;
                textO3 = textIndex9;
                textO3Color = colors.white;
                break;
            case o3 > 240:
                bgO3 = colors.veryHigh10;
                textO3 = textIndex10;
                textO3Color = colors.white;
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
                bgSo2 = colors.low1;
                textSo2 = textIndex1;
                break;
            case so2 <= 177:
                bgSo2 = colors.low2;
                textSo2 = textIndex2;
                break;
            case so2 <= 266:
                bgSo2 = colors.low3;
                textSo2 = textIndex3;
                break;
            case so2 <= 354:
                bgSo2 = colors.mod4;
                textSo2 = textIndex4;
                break;
            case so2 <= 443:
                bgSo2 = colors.mod5;
                textSo2 = textIndex5;
                break;
            case so2 <= 532:
                bgSo2 = colors.mod6;
                textSo2 = textIndex6;
                break;
            case so2 <= 710:
                bgSo2 = colors.high7;
                textSo2 = textIndex7;
                textSo2Color = colors.white;
                break;
            case so2 <= 887:
                bgSo2 = colors.high8;
                textSo2 = textIndex8;
                textSo2Color = colors.white;
                break;
            case so2 <= 1064:
                bgSo2 = colors.high9;
                textSo2 = textIndex9;
                textSo2Color = colors.white;
                break;
            case so2 > 1064:
                bgSo2 = colors.veryHigh10;
                textSo2 = textIndex10;
                textSo2Color = colors.white;
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
                bgPm2_5 = colors.low1;
                textPm2_5 = textIndex1;
                break;
            case pm2_5 <= 23:
                bgPm2_5 = colors.low2;
                textPm2_5 = textIndex2;
                break;
            case pm2_5 <= 35:
                bgPm2_5 = colors.low3;
                textPm2_5 = textIndex3;
                break;
            case pm2_5 <= 41:
                bgPm2_5 = colors.mod4;
                textPm2_5 = textIndex4;
                break;
            case pm2_5 <= 47:
                bgPm2_5 = colors.mod5;
                textPm2_5 = textIndex5;
                break;
            case pm2_5 <= 53:
                bgPm2_5 = colors.mod6;
                textPm2_5 = textIndex6;
                break;
            case pm2_5 <= 58:
                bgPm2_5 = colors.high7;
                textPm2_5 = textIndex7;
                textPm2_5Color = colors.white;
                break;
            case pm2_5 <= 64:
                bgPm2_5 = colors.high8;
                textPm2_5 = textIndex8;
                textPm2_5Color = colors.white;
                break;
            case pm2_5 <= 70:
                bgPm2_5 = colors.high9;
                textPm2_5 = textIndex9;
                textPm2_5Color = colors.white;
                break;
            case pm2_5 > 70:
                bgPm2_5 = colors.veryHigh10;
                textPm2_5 = textIndex10;
                textPm2_5Color = colors.white;
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
                bgPm10 = colors.low1;
                textPm10 = textIndex1;
                break;
            case pm10 <= 33:
                bgPm10 = colors.low2;
                textPm10 = textIndex2;
                break;
            case pm10 <= 50:
                bgPm10 = colors.low3;
                textPm10 = textIndex3;
                break;
            case pm10 <= 58:
                bgPm10 = colors.mod4;
                textPm10 = textIndex4;
                break;
            case pm10 <= 66:
                bgPm10 = colors.mod5;
                textPm10 = textIndex5;
                break;
            case pm10 <= 75:
                bgPm10 = colors.mod6;
                textPm10 = textIndex6;
                break;
            case pm10 <= 83:
                bgPm10 = colors.high7;
                textPm10 = textIndex7;
                textPm10Color = colors.white;
                break;
            case pm10 <= 91:
                bgPm10 = colors.high8;
                textPm10 = textIndex8;
                textPm10Color = colors.white;
                break;
            case pm10 <= 100:
                bgPm10 = colors.high9;
                textPm10 = textIndex9;
                textPm10Color = colors.white;
                break;
            case pm10 > 100:
                bgPm10 = colors.veryHigh10;
                textPm10 = textIndex10;
                textPm10Color = colors.white;
                break;
            default:
                break;
        }

        const toggleIndex = () => {
            this.setState( (prevState) => ( {
                isVisible: !prevState.isVisible
            }));
        }


        return (
            <div className="AirQuality card">
                <h1 className="title">Air Quality</h1>
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

                <button onClick={toggleIndex} className="button_index">
                    { isVisible ? 'Hide Air Quality Index' : 'Show Air Quality Index' }
                </button>

                {
                    isVisible && (
                        <div className="index_wrapper">
                            <h2 className="title"> Air Quality Index: </h2>
                            <div className="index_levels">
                                <div className="index_box">
                                    <div className="item" style={ { backgroundColor: colors.low1 } }>{ textIndex1 } </div>
                                    <div className="item-text"> { textLow } </div>
                                </div>
                                <div className="index_box">
                                    <div className="item" style={ { backgroundColor: colors.low2 } }> { textIndex2 } </div>
                                    <div className="item-text"> { textLow } </div>
                                </div>
                                <div className="index_box">
                                    <div className="item" style={ { backgroundColor: colors.low3 } }> { textIndex3 } </div>
                                    <div className="item-text"> { textLow } </div>
                                </div>
                                <div className="index_box">
                                    <div className="item" style={ { backgroundColor: colors.mod4 } }> { textIndex4 } </div>
                                    <div className="item-text"> { textModerate } </div>
                                </div>
                                <div className="index_box">
                                    <div className="item" style={ { backgroundColor: colors.mod5 } }> { textIndex5 } </div>
                                    <div className="item-text"> { textModerate } </div>
                                </div>
                                <div className="index_box">
                                    <div className="item" style={ { backgroundColor: colors.mod6 } }> { textIndex6 } </div>
                                    <div className="item-text"> { textModerate } </div>
                                </div>
                                <div className="index_box">
                                    <div className="item" style={ { backgroundColor: colors.high7 } }> { textIndex7 } </div>
                                    <div className="item-text"> { textHigh } </div>
                                </div>
                                <div className="index_box">
                                    <div className="item" style={ { backgroundColor: colors.high8 } }> { textIndex8 } </div>
                                    <div className="item-text"> { textHigh } </div>
                                </div>
                                <div className="index_box">
                                    <div className="item" style={ { backgroundColor: colors.high9 } }> { textIndex9 } </div>
                                    <div className="item-text">  { textHigh } </div>
                                </div>
                                <div className="index_box">
                                    <div className="item" style={ { backgroundColor: colors.veryHigh10 } }> { textIndex10 } </div>
                                    <div className="item-text"> { textVeryHigh } </div>
                                </div>
                            </div>
                        </div>
                    )
                }

            </div>
        );
    }

}



export default AirQuality;
