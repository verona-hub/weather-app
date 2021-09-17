import React from 'react';

// Components
import Spinner from "./Spinner";
import Errors from "../Error/Errors";


// Modal component
const Modal = ({ text, spinner, errorMessage, errorCode, clearError, search, abortSearch, darkMode }) => {
    // Function that cancels the search
    const handleAbortSearch = () => abortSearch();
    // Dark mode
    const modalContentDark = darkMode ? 'modal_content_dark' : undefined;

    return (
        <div className="Modal">
            { search && (
                <div className={ `modal_content ${modalContentDark}` }>
                    <div className="modal_text">
                        <h1> Search in progress <span className="dots"> </span> </h1>

                        { spinner && ( <Spinner/> ) }

                        <h2 className="location"> Location: <span> { text } </span></h2>
                        <h2 className="wait"> Please wait... </h2>
                        <button onClick={ handleAbortSearch } className="button button_abort_search"> Abort search </button>
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