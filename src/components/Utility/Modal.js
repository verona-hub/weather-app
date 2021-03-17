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
                            <h2> Searching:
                                <span> { text } </span>
                            </h2>
                            <h2> Please wait... </h2>
                        </div>
                        <div className="x_button_wrapper">
                            <button onClick={ handleCancelSearch } className="button_cancel_search"> X </button>
                        </div>
                    </div>
                )
                }

                { spinner && ( <Spinner/> ) }

            <Errors
                errorMessage={ errorMessage }
                errorCode={ errorCode }
                clearError={ clearError }
            />
        </div>
    )
}


export default Modal;