import React from 'react';
import warning from "../../img/warning.png";


const Error = ({ clearError, addedText, text }) => {

    // If clicked on the button, clearError from App.js will be called and the box will close
    const handleClearError = () => {
        clearError();
    }

    return (
        <div className="alert">
            <div className="alert_content">
                <img src={ warning } alt="warning logo" className="warning_logo"/>
                <h2> Ooops! </h2>
                <p> { addedText }</p>
                <p> { text }</p>
                <p className="close"> (this box will self-close<span className="counter"> </span>) </p>
            </div>
            <button onClick={ handleClearError } className="button button_ok"> Close now </button>
        </div>
    );
};


export default Error;
