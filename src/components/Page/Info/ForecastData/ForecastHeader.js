import React from 'react';
import right_arrow from '../../../../img/right-arrow.png';


const ForecastHeader = ({ which_day, day, date, when }) => {

    return (
        <div className="ForecastHeader">
            <h2 className="title"> Weather Forecast </h2>
            <div>
                <h2 className="sub_title_main">
                    { which_day }
                    <img className="right" src={right_arrow} alt="right arrow"/>
                    { when }
                </h2>
                <div>
                    <img className="left_down" src={ right_arrow } alt="right arrow"/>
                </div>
                <div className="date">
                    <p> { day } </p>
                    <p> { date } </p>
                </div>
            </div>
        </div>
    );
};


export default ForecastHeader;
