import React from 'react';


const ForecastHeader = ({ which_day, css, day, date, when }) => {

    return (
        <div className={`MainHeader ${ css }`}>
            <h2 className="title"> Weather Forecast: { which_day } </h2>
            <h3 className="sub_title"> {when} { day } { date } </h3>
        </div>
    );
};


export default ForecastHeader;
