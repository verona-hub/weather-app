import React from 'react';
import { timeForecastHourly } from "../../../Utility/DateAndTime";


const ForecastEveryThreeHours = ({ hour }) => {

    const everyThreeHours = hour.map( (item, index) => {

        const { condition: { text, icon }, time, temp_c } = item;

        return index % 3 === 0 && (
            <div key={ index } className="ForecastEveryThreeHours">
                <div className="item_wrapper">
                    <div className="item">{ timeForecastHourly(time) } </div>
                    <div className="item">
                        <img src={ icon } alt="weather conditions icon"/>
                        <div className="text_wrapper">
                            <span> { text } </span>
                        </div>
                    </div>
                    <div className="item"> { temp_c }&#8451; </div>
                </div>
            </div>
        )
    });

    return <div> { everyThreeHours } </div>;
};

export default ForecastEveryThreeHours;
