import React from 'react';

// Components
import Spinner from "./Spinner";
import Errors from "../Error/Errors";


const Modal = ({ text, spinner, errorMessage, errorCode, clearError, search, cancelSearch }) => {

    const handleCancelSearch = () => {
        cancelSearch();
    }

    return (
        <div className="Modal">
            { search && (
                <div className="modal_content">
                    <div className="modal_text">
                        <h1> Search in progress <span className="dots"></span> </h1>

                        { spinner && ( <Spinner/> ) }

                        <h2 className="location"> Location: <span> { text } </span></h2>
                        <h2 className="wait"> Please wait... </h2>
                        <button onClick={ handleCancelSearch } className="button button_cancel_search"> Close window </button>
                    </div>
                </div>
            )}

            <Errors
                errorMessage={ errorMessage }
                errorCode={ errorCode }
                clearError={ clearError }
            />
        </div>
    )
}


export default Modal;