import React from 'react';


const Alert = ({ alert, errorMessageVisibility, errorMessage }) => {
    console.log(errorMessage);

    if (alert !== null) {
        return (
            <div className="alert">
                { alert.message }
            </div>
        )
    }
    else if (errorMessageVisibility !== false) {
        return (
            <div className="alert">
                { errorMessage }
            </div>
        )
    }
    else {
        return null;
    }

};

export default Alert;
