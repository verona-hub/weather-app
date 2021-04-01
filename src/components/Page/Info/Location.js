import React from 'react';


const Location = ({ location }) => {

    const { name, region, country, lat, lon, localtime, tz_id } = location;


    const oldDateAndTime = localtime.split('-');
    const oldTime = oldDateAndTime[2];
    const oldDay = oldTime.split(' ');

    const date = () => {
        const year = oldDateAndTime[0];
        const month = oldDateAndTime[1];
        const day = oldDay[0];

        return `${day}-${month}-${year}`;
    }

    const time = () => {
        const time = oldDay[1];
        return `${time}h`;
    }

    return (
        <div className="Location card">
            <h2 className="title"> Location details </h2>
            <div className="main">
                <div className="spaced">
                    <span> City:</span>
                    <span className="city_name">{ name }</span>
                </div>
                <div className="spaced"><span> Region:</span> { region } </div>
                <div className="spaced"><span> Country:</span> { country }</div>
                <div className="spaced"><span> Latitude:</span> { lat } </div>
                <div className="spaced"><span> Longitude:</span> { lon } </div>
                <div className="spaced"><span> Local Time:</span> { time() } </div>
                <div className="spaced"><span> Local Date:</span> { date() } </div>
                <div className="spaced"><span> Timezone:</span> { tz_id }</div>
            </div>
        </div>
    );

}


export default Location;