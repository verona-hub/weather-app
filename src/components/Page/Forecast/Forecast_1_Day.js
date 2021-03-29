import React from 'react';
import MainHeader from "../MainHeader";


const Forecast1Day = ({ forecast1day, location }) => {

    console.log(forecast1day);

    const oldDate = forecast1day.date.toString();
    const date = oldDate.split('-').reverse().join('-');

    const {day} = forecast1day;
    console.log(day);

    return (
        <div className="Forecast_1_Day">
            <MainHeader
                location={ location }
                title='1 Day Forecast'
                css='MainHeader__forecast'
            />
            <div>
                <h2>
                    Date: { date }
                </h2>
            </div>
            <div className="day">
                <h2> Work </h2>
                <h3> In </h3>
                <h4> Progress... </h4>
            </div>
        </div>
    );
};


export default Forecast1Day;
