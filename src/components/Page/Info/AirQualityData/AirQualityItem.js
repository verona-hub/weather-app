import React from 'react';


const AirQualityItem = ({ backgroundColor, color, name, index, level }) => {

    return (
        <div className="AirQualityItem">
            <div className="element" style={ { backgroundColor, color, borderBottom: `1px solid black` } }>
                <span> { name } </span>
                <span> { index } </span>
                <span> { level } &#13197;/&#13221; </span>
            </div>
        </div>
    );
};

export default AirQualityItem;
