import React from 'react';
import { timeLocation, date } from '../../Utility/DateAndTime';


const Location = ({ location, darkMode }) => {

    // Destructuring the fetched location data
    const { name, region, country, lat, lon, localtime, tz_id } = location;

    const titleDark = darkMode && 'title_dark';
    const title = `title ${titleDark}`;
    const spacedDark = darkMode && 'spaced_dark';
    const spaced = `spaced ${spacedDark}`;

    return (
        <div className="Location card">
            <h2 className={ title }> Location </h2>
            <div className="main">
                <div className={ spaced }><span> City:</span> { name } </div>
                <div className={ spaced }><span> Region:</span> { region } </div>
                <div className={ spaced }><span> Country:</span> { country } </div>
                <div className={ spaced }><span> Latitude:</span> { lat } </div>
                <div className={ spaced }><span> Longitude:</span> { lon } </div>
                <div className={ spaced }><span> Local Time:</span> { timeLocation(localtime) } </div>
                <div className={ spaced }><span> Local Date:</span> { date(localtime) } </div>
                <div className={ spaced }><span> Timezone:</span> { tz_id } </div>
            </div>
        </div>
    );
};


export default Location;