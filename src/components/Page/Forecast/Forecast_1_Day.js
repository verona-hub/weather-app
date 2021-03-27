import React from 'react';


const Forecast1Day = ({ forecast1day }) => {

    console.log(forecast1day);

    const oldDate = forecast1day.date.toString();
    const date = oldDate.split('-').reverse().join('-');

    return (
        <div className="Forecast_1_Day">
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


export default Forecast1Day;
