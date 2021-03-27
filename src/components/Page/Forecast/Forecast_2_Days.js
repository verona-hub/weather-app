import React from 'react';


const Forecast2Days = ({ forecast2days }) => {

    const oldDate = forecast2days.date.toString();
    const date = oldDate.split('-').reverse().join('-');

    return (
        <div className="Forecast_2_Days">
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


export default Forecast2Days;
