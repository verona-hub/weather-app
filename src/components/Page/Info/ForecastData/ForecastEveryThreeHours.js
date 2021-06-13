import React from 'react';
import { timeForecastHourly } from "../../../Utility/DateAndTime";


// Forecast data for the ForecastHourlyInfo component
const ForecastEveryThreeHours = ({ hour }) => {

    // Map through the fetched hourly data
    const everyThreeHours = hour.map( (item, index) => {

        // Destructuring the fetched data from each item
        const { condition: { text, icon }, time, temp_c } = item;

        // Check and return weather data for every 3 hours to be displayed
        return index % 3 === 0 && (
            <div key={ index } className="ForecastEveryThreeHours">
                <div className="item_wrapper">
                    <div className="item">{ timeForecastHourly(time) } </div>
                    <div className="item item_icon_plus_text">
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
