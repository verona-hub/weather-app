import React from 'react';
import { date, timeForecastHourly } from '../../Utility/DateAndTime';


const ForecastHourlyInfo = ({ hour }) => {

    const everyThirdHour = hour.map( (item, index) => {

        const { condition: { text }, time, temp_c } = item;

        if(index % 2 === 0 ){
            return <p key={index}> { date(time) } - { timeForecastHourly(time) } - { text } = Temperature { temp_c }&#8451; </p>
        }
        else {
            return null;
        }
    });


    return (
        <div>
            { everyThirdHour }
        </div>

    );
};


export default ForecastHourlyInfo;
