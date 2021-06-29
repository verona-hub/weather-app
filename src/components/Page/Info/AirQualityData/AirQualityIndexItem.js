import React from 'react';


const AirQualityIndexItem = ({ backgroundColor, indexText, indexLevel}) => {
    return (
        <div className="AirQualityIndexItem">
            <div className="item" style={ { backgroundColor } }>
                <p> { indexText } </p>
            </div>
            <p> { indexLevel } </p>
        </div>
    );
};

export default AirQualityIndexItem;
