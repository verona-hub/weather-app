import React  from 'react';
import { data } from './AirQualityColors';


const AirQualityIndex = ({ indexInfoVisible }) => {

    // Destructuring from the AirQualityColors.js component in Utility
    const { case1, case2, case3, case4, case5, case6, case7, case8, case9, case10, mix } = data;

    return (
        <div className="AirQualityIndex">
            <div className={ indexInfoVisible ? "index_wrapper visible" : "index_wrapper hidden" } >
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
        </div>
    );
};

export default AirQualityIndex;
