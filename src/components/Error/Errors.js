import React from 'react';
import * as _ from 'underscore';
import Error from "./Error";


const Errors = ({ errorMessage, errorCode, clearError }) => {

    if (_.size(errorMessage) > 0) {
        switch (errorCode) {
            case 1003:
                return (
                    <Error
                        clearError={ clearError }
                        text="Searchbar is empty. Please enter a location..."
                    />
                )

            case 1006:
                return (
                    <Error
                        clearError={ clearError }
                        addedText={ errorMessage }
                        text="Please try a different one."
                    />
                )

            default:
                return (
                    <Error
                        clearError={ clearError }
                        text={ `Sorry, ${errorMessage}` }
                    />
                )
        }
    }
    else {
        return null;
    }

}


export default Errors;
