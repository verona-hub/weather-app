import React from 'react';
import Spinner from "./Spinner";
import * as _ from 'underscore';


const Container = (props) => {
    /*console.log(_.size(props.cityInfoProp));*/

    const { name, country, region, lat, lon, localtime, tz_id } = props.cityInfoProp;

    if (props.spinner) {
        return <Spinner />
    }

    else {
        if (_.size(props.cityInfoProp) > 0) {
            return (
                <div>
                    <h1> City: {name} </h1>
                    <h1> Country: {country}</h1>
                    <h1> Region: {region} </h1>
                    <h2> Latitude: {lat} </h2>
                    <h2> Longitude: {lon} </h2>
                    <h3> Local Time: {localtime} </h3>
                    <h3> Timezone: {tz_id}</h3>
                </div>
            );
        }
        else {
            return null;
        }
    }

}


export default Container;