import React from 'react';
import right_arrow from '../../../../img/right-arrow.png';


const ForecastHeader = ({ which_day, day, date, when, darkMode }) => {

    // Dark mode
    const titleDark = darkMode && 'title_dark';
    const subTitleDark = darkMode && 'sub_title_main_dark';
    const dateDark = darkMode && 'date_dark';

    return (
        <div className="ForecastHeader">
            <h2 className={ `title ${titleDark}` }> Weather Forecast </h2>
            <div>
                <h2 className={ `sub_title_main ${subTitleDark}` }>
                    { which_day }
                    <img className="right" src={right_arrow} alt="right arrow"/>
                    { when }
                </h2>
                <div>
                    <img className="left_down" src={right_arrow} alt="right arrow"/>
                </div>
                <div className={ `date ${dateDark}` }>
                    <p> { day } </p>
                    <p> { date } </p>
                </div>
            </div>
        </div>
    );
};


export default ForecastHeader;