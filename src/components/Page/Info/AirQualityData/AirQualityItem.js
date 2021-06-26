import React from 'react';


const AirQualityItem = ({ backgroundColor, color, name, index, level }) => {

    return (
        <div className="box" style={ { backgroundColor, color } }>
            <span> { name } </span>
            <span> { index } </span>
            <span> { level } &#13197;/&#13221; </span>
        </div>
    );
};

export default AirQualityItem;
