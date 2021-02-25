import React from 'react';


const CityInfo = ({ cityInfoProp }) => {

    const { name, region, country, lat, lon, localtime, tz_id } = cityInfoProp;

    return (
        <div className="CityInfo">
            <h1> City: {name} </h1>
            <h1> Region: {region} </h1>
            <h1> Country: {country}</h1>
            <h2> Latitude: {lat} </h2>
            <h2> Longitude: {lon} </h2>
            <h3> Local Time: {localtime} </h3>
            <h3> Timezone: {tz_id}</h3>
        </div>
    );

}


export default CityInfo;