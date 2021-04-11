import React from 'react';
import { timeForecastHourly } from '../../Utility/DateAndTime';


const ForecastHourlyInfo = ({ hour }) => {

    const everyThreeHours = hour.map( (item, index) => {

        const { condition: { text, icon }, time, temp_c } = item;

        return index % 3 === 0 && (
            <div key={ index } className="item_wrapper">
                <div className="item">{ timeForecastHourly(time) } </div>
                <div className="item item_condition">
                    <img src={ icon } alt="weather conditions icon"/>
                    <div className="text_wrapper">
                        <span> { text } </span>
                    </div>
                </div>
                <div className="item center"> { temp_c }&#8451; </div>
            </div>
        )
    });


    return (
        <div className="ForecastHourlyInfo">
            <div className="main">
                <div className="item_wrapper sub_title">
                    <div className="item"> Time</div>
                    <div className="item"> Weather Forecast</div>
                    <div className="item center"> Temperature</div>
                </div>
                { everyThreeHours }
            </div>
        </div>

    );
};


export default ForecastHourlyInfo;
