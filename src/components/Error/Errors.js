import React from 'react';
import * as _ from 'underscore';
import warning from '../../img/warning.png';


const Errors = ({ errorMessage, errorCode, clearError }) => {

    const handleClearError = () => {
        clearError();
    }

    if (_.size(errorMessage) > 0) {
        switch (errorCode) {
            case 1003:
                return (
                    <div className="alert">
                        <div>
                            <img src={ warning } alt="warning logo" className="warning_logo"/>
                            <h2> Ooops! </h2>
                            <p> Searchbar is empty. Please enter a location... </p>
                            <p className="close"> (this box will self-close<span className="counter"> </span>) </p>
                        </div>
                        <button onClick={ handleClearError } className="button button_ok"> Close now </button>
                    </div>
                )

            case 1006:
                return (
                    <div className="alert">
                        <div className="alert_content">
                            <img src={ warning } alt="warning logo" className="warning_logo"/>
                            <h2> Ooops! </h2>
                            <p>{ errorMessage }.</p>
                            <p> Please try a different one. </p>
                            <p className="close"> (this box will self-close<span className="counter"> </span>) </p>
                        </div>
                        <button onClick={ handleClearError } className="button button_ok"> Close now </button>
                    </div>
                )

            default:
                return (
                    <div className="alert">
                        <div className="alert_content">
                            <img src={ warning } alt="warning logo" className="warning_logo"/>
                            <h2> Ooops! </h2>
                            <p>Sorry, { errorMessage } </p>
                            <p className="close"> (this box will self-close<span className="counter"> </span>) </p>
                        </div>
                        <button onClick={ handleClearError } className="button button_ok"> Close now </button>
                    </div>)
        }
    }
    else {
        return null;
    }

}


export default Errors;
