import React from 'react';
import * as _ from 'underscore';


const Alert = ({ alert, errorResponse, errorMessage, errorData }) => {
    // console.log(errorData[0].code);
    // const { code } = errorData.code;
    const errorCode = [errorData][0][0];
    console.log(errorCode);

    if (alert !== null) {
        return (
            <div className="alert">
                { alert.message }
            </div>
        )
    }
    /*else if (errorData[0].code === 1003) {
        console.log('Yes!');
    }*/

    else if (_.size(errorMessage) > 0) {
        /*
        switch (errorMessage) {
            case ''
        }
        */
        return (
            <div className="alert">
                { errorMessage } Please enter a valid city.
            </div>
        )
    }
    else {
        return null;
    }

};


export default Alert;
