import React from 'react';


const CityInfo = ({ cityInfoProp }) => {

    const { name, region, country, lat, lon, localtime, tz_id } = cityInfoProp;

    return (
        <div className="CityInfo card">
            <h2 className="title"> Location details </h2>
            <div className="main">
                <div className="spaced"><span> City:</span> { name } </div>
                <div className="spaced"><span> Region:</span> { region } </div>
                <div className="spaced"><span> Country:</span> { country }</div>
                <div className="spaced"><span> Latitude:</span> { lat } </div>
                <div className="spaced"><span> Longitude:</span> { lon } </div>
                <div className="spaced"><span> Local Time:</span> { localtime } </div>
                <div className="spaced"><span> Timezone:</span> { tz_id }</div>
            </div>
        </div>
    );

}


export default CityInfo;