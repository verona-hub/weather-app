import React from 'react';
import { timeForecastHourly } from '../../Utility/DateAndTime';


const ForecastHourlyInfo = ({ hour }) => {

    const everyTwoHours = hour.map( (item, index) => {

        const { condition: { text, icon }, time, temp_c } = item;

        return index % 2 === 0 && (
            <div key={ index } className="item_wrapper">
                <div className="item">{ timeForecastHourly(time) } </div>
                <div className="item item_condition">
                    <img src={ icon } alt="weather conditions icon"/>
                    <span className="condition_text">{ text }</span>
                </div>
                <div className="item center"> { temp_c }&#8451; </div>
            </div>
        )
    });


    return (
        <div className="ForecastHourlyInfo">
            <div className="item_wrapper title">
                <div className="item"> Time </div>
                <div className="item"> Weather Forecast </div>
                <div className="item center"> Temperature </div>
            </div>
            { everyTwoHours }
        </div>

    );
};


export default ForecastHourlyInfo;
