import React from 'react';
import right_arrow from '../../../../img/right-arrow.png';


const ForecastHeader = ({ which_day, day, date, when, darkMode }) => {

    const titleDark = darkMode && 'title_dark';
    const subTitleDark = darkMode && 'sub_title_main_dark';
    const subTitle = `sub_title_main ${subTitleDark}`;
    const title = `title ${titleDark}`;
    const dateDark = darkMode && 'date_dark';
    const dateClass = `date ${dateDark}`;

    return (
        <div className="ForecastHeader">
            <h2 className={ title }> Weather Forecast </h2>
            <div>
                <h2 className={ subTitle }>
                    { which_day }
                    <img className="right" src={right_arrow} alt="right arrow"/>
                    { when }
                </h2>
                <div>
                    <img className="left_down" src={right_arrow} alt="right arrow"/>
                </div>
                <div className={ dateClass }>
                    <p> { day } </p>
                    <p> { date } </p>
                </div>
            </div>
        </div>
    );
};


export default ForecastHeader;