import React from 'react';

const ForecastHour = ({ hour }) => {

    const everyThirdHour = hour.map( (item, index) => {
        const { condition: { text }, time, temp_c } = item;
        if(index % 2 === 0 ){
            return <p key={index}> { time }h - { text } - { temp_c }&#8451; </p>
        }
        else {
            return null;
        }
    });

    return (
        <div>
            { everyThirdHour }
        </div>

    );
};

export default ForecastHour;
