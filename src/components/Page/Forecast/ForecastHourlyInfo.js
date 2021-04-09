import React from 'react';
import { timeForecastHourly } from '../../Utility/DateAndTime';


const ForecastHourlyInfo = ({ hour }) => {

    const everyThirdHour = hour.map( (item, index) => {

        const { condition: { text }, time, temp_c } = item;

        if(index % 2 === 0 ){
            return (
                <div key={ index } className="item_wrapper">
                    <div className="item">{ timeForecastHourly(time) } </div>
                    <div className="item"> Weather Forecast: { text } </div>
                    <div className="item"> Temperature: { temp_c }&#8451; </div>
                </div>
            )
        }
        else {
            return null;
        }
    });


    return (
        <div className="ForecastHourlyInfo">
            <div className="item_wrapper">
                <div className="item"> Time </div>
                <div className="item"> Weather Forecast </div>
                <div className="item center"> Temperature </div>
            </div>
            { everyThirdHour }
        </div>

    );
};


export default ForecastHourlyInfo;
