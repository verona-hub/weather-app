import React from 'react';


const AirQualityElement = ({ backgroundColor, color, name, index, level }) => {

    return (
        <div className="AirQualityElement">
            <div className="element" style={{ backgroundColor, color, borderBottom: `1px solid #696969` }}>
                <span> { name } </span>
                <span> { index } </span>
                <span> { level } &#13197;/&#13221; </span>
            </div>
        </div>
    );
};

export default AirQualityElement;
