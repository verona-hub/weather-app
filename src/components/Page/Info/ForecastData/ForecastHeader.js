import React from 'react';


const ForecastHeader = ({ title, css, day, date, when }) => {

    return (
        <div className={`MainHeader ${ css }`}>
            <h2 className="title"> { title } </h2>
            <h3 className="sub_title"> {when} { day } { date } </h3>
        </div>
    );
};


export default ForecastHeader;
