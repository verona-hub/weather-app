import React from 'react';
import * as _ from 'underscore';


const Errors = ({ errorMessage, errorCode }) => {

    if (_.size(errorMessage) > 0) {
        switch (errorCode) {
            case 1003:
                return <div className="alert">  Searchbar is empty. Please enter a location... </div>

            case 1006:
                return <div className="alert"> {errorMessage}. Please try a different one. </div>

            default:
                return <div className="alert"> Sorry, {errorMessage} </div>
        }
    }
    else {
        return null;
    }
};


export default Errors;
