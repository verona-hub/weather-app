import React from 'react';

const ForecastHeader = ({ location, title, css, day, date }) => {

    const { name, country } = location;

    return (
        <div className={`MainHeader ${ css }`}>
            <h2 className="title"> { title } </h2>
            <h2 className="sub_title"> { name }, { country } </h2>
            <h3> { day } { date } </h3>
        </div>
    );
};

export default ForecastHeader;
