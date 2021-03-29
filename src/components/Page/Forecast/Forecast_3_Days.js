import React from 'react';
import MainHeader from "../MainHeader";


const Forecast3Days = ({ forecast3days, location }) => {

    const oldDate = forecast3days.date.toString();
    const date = oldDate.split('-').reverse().join('-');

    return (
        <div className="Forecast_3_Days">
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
            <div className="main">
                <h2> Work </h2>
                <h3> In </h3>
                <h4> Progress... </h4>
            </div>
        </div>
    );
};


export default Forecast3Days;
