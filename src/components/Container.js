import React from 'react';


const Container = (props) => {
        const { name, country, region, lat, lon, localtime } = props.cityInfoProp;
        console.log(name);


        return (
            <div>
                <h1> City: {name} </h1>
                <h1> Country: {country}</h1>
                <h1> Region: {region} </h1>
                <h2> Latitude: {lat} </h2>
                <h2> Longitude: {lon} </h2>
                <h3> Local Time: {localtime} </h3>
            </div>
        );
}


export default Container;